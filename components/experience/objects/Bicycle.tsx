"use client";

import type { ThreeElements } from "@react-three/fiber";
import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/store";
import { palette } from "@/lib/palette";
import { Interactive, Segment } from "../parts";

const TYRE = "#252b27";
const FRAME = "#86aa92";
const SPOKE = "#aaa99b";
type Point = [number, number, number];
const rear: Point = [-0.59, 0.35, 0];
const front: Point = [0.63, 0.35, 0];
const crank: Point = [-0.02, 0.33, 0];
const seat: Point = [-0.2, 0.9, 0];
const head: Point = [0.4, 0.86, 0];

function Wheel({ position, moving }: { position: Point; moving: RefObject<THREE.Group | null> }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <torusGeometry args={[0.315, 0.024, 10, 64]} />
        <meshStandardMaterial color={TYRE} roughness={0.94} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.292, 0.014, 8, 64]} />
        <meshStandardMaterial color="#cfbc95" roughness={0.65} />
      </mesh>
      <group ref={moving}>
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          return <Segment key={i} from={[0, 0, 0]} to={[Math.cos(angle) * 0.284, Math.sin(angle) * 0.284, 0]} radius={0.0025} color={SPOKE} metalness={0.7} />;
        })}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.027, 0.027, 0.09, 12]} />
          <meshStandardMaterial color={palette.steel} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.16, 0.14, 0.005]}>
          <boxGeometry args={[0.06, 0.016, 0.012]} />
          <meshStandardMaterial color={palette.amber} />
        </mesh>
      </group>
    </group>
  );
}

/** A road bike made from geometry. Click to spin the wheels. */
export function Bicycle(props: ThreeElements["group"]) {
  const backWheel = useRef<THREE.Group>(null);
  const frontWheel = useRef<THREE.Group>(null);
  const pedals = useRef<THREE.Group>(null);
  const spin = useStore((s) => s.waveRobot);
  useFrame((_, delta) => {
    const state = useStore.getState();
    const elapsed = (Date.now() - state.robotWave) / 1000;
    if (!state.robotWave || elapsed > 3 || state.reducedMotion) return;
    const speed = Math.pow(1 - elapsed / 3, 2) * 12 * Math.min(delta, 0.05);
    if (backWheel.current) backWheel.current.rotation.z -= speed;
    if (frontWheel.current) frontWheel.current.rotation.z -= speed;
    if (pedals.current) pedals.current.rotation.z -= speed * 0.5;
  });

  const tubes: [Point, Point][] = [[rear, seat], [rear, crank], [crank, seat], [seat, head], [head, crank], [head, front]];
  return (
    <group {...props}>
      <Interactive label="take a spin" onClick={spin} hit={[2, 1.3, 0.45]} hitPosition={[0, 0.6, 0]}>
        <Wheel position={rear} moving={backWheel} />
        <Wheel position={front} moving={frontWheel} />
        {tubes.map(([from, to], i) => <Segment key={i} from={from} to={to} radius={i === 5 ? 0.018 : 0.025} color={FRAME} metalness={0.35} roughness={0.4} />)}
        <Segment from={seat} to={[-0.24, 1.035, 0]} radius={0.015} color={SPOKE} metalness={0.75} />
        <mesh position={[-0.24, 1.04, 0]} castShadow>
          <boxGeometry args={[0.23, 0.04, 0.12]} />
          <meshStandardMaterial color="#553b29" roughness={0.8} />
        </mesh>
        <Segment from={head} to={[0.37, 1.0, 0]} radius={0.016} color={SPOKE} metalness={0.75} />
        <Segment from={[0.37, 1, 0]} to={[0.52, 1.02, 0]} radius={0.017} color={SPOKE} metalness={0.75} />
        <Segment from={[0.52, 1.02, -0.16]} to={[0.52, 1.02, 0.16]} radius={0.017} color={TYRE} />
        {[-0.16, 0.16].map((z) => (
          <group key={z} position={[0.57, 0.95, z]}>
            <mesh rotation={[0, 0, -Math.PI / 2]}>
              <torusGeometry args={[0.07, 0.016, 8, 18, Math.PI * 1.5]} />
              <meshStandardMaterial color="#553b29" roughness={0.8} />
            </mesh>
          </group>
        ))}
        <group position={crank}>
          <mesh position={[0, 0, 0.055]}>
            <torusGeometry args={[0.095, 0.008, 8, 32]} />
            <meshStandardMaterial color={SPOKE} metalness={0.8} roughness={0.35} />
          </mesh>
          <Segment from={[-0.59, 0.02, 0.05]} to={[0, -0.095, 0.055]} radius={0.003} color={TYRE} />
          <Segment from={[-0.59, 0.02, 0.05]} to={[0, 0.095, 0.055]} radius={0.003} color={TYRE} />
          <group ref={pedals}>
            <Segment from={[-0.12, 0, 0.07]} to={[0.12, 0, 0.07]} radius={0.012} color={SPOKE} metalness={0.8} />
            {[-1, 1].map((side) => <mesh key={side} position={[side * 0.12, 0, side * 0.1]}><boxGeometry args={[0.075, 0.025, 0.09]} /><meshStandardMaterial color={TYRE} /></mesh>)}
          </group>
        </group>
        <Segment from={[0.04, 0.54, 0]} to={[-0.015, 0.7, 0]} radius={0.038} color={palette.milk} roughness={0.8} />
        <Segment from={[-0.04, 0.36, -0.03]} to={[-0.18, 0.02, -0.17]} radius={0.009} color={SPOKE} metalness={0.8} />
      </Interactive>
    </group>
  );
}
