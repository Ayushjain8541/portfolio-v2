"use client";

import type { ThreeElements } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";
import { palette } from "@/lib/palette";
import { clockMinutes, lightsAt } from "@/lib/time";
import { cssFont } from "./parts";
import { EspressoMachine } from "./objects/EspressoMachine";
import { Grinder } from "./objects/Grinder";
import { Mug } from "./objects/Mug";
import { Laptop } from "./objects/Laptop";
import { ReceiptPrinter } from "./objects/ReceiptPrinter";
import { Phone } from "./objects/Phone";
import { Lamp } from "./objects/Lamp";
import { Plant } from "./objects/Plant";
import { ChessBoard } from "./objects/ChessBoard";
import { PythonNotebook } from "./objects/PythonNotebook";
import { HackathonTrophy } from "./objects/HackathonTrophy";
import { Bicycle } from "./objects/Bicycle";
import { Ticket } from "./objects/Ticket";
import { MiniSUB } from "./objects/MiniSUB";
import { PolaroidWall } from "./objects/PolaroidWall";

const WALL = "#536657";
const SIDE = "#3e5046";
const FLOOR = "#3a2519";
const FRAME = "#e8dccb";
const DESK = "#8a5a3c";

function Box({
  size,
  position,
  color,
  roughness = 0.85,
}: {
  size: [number, number, number];
  position: [number, number, number];
  color: string;
  roughness?: number;
}) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={roughness} />
    </mesh>
  );
}

/** the wall clock: ticks forward with the scroll, 4:47 pm to 1:12 am */
function WallClock() {
  const hour = useRef<THREE.Group>(null);
  const minute = useRef<THREE.Group>(null);
  useFrame(() => {
    const m = clockMinutes(useStore.getState().progress);
    if (minute.current) minute.current.rotation.z = -((m % 60) / 60) * Math.PI * 2;
    if (hour.current) hour.current.rotation.z = -(((m / 60) % 12) / 12) * Math.PI * 2;
  });
  return (
    <group position={[-1.95, 2.22, -1.69]}>
      <mesh>
        <circleGeometry args={[0.18, 48]} />
        <meshStandardMaterial color={palette.milk} roughness={0.6} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.18, 0.014, 10, 48]} />
        <meshStandardMaterial color={palette.charcoal} roughness={0.4} />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.sin(a) * 0.15, Math.cos(a) * 0.15, 0.003]}>
            <boxGeometry args={[i % 3 === 0 ? 0.012 : 0.006, i % 3 === 0 ? 0.03 : 0.018, 0.002]} />
            <meshStandardMaterial color={palette.charcoal} />
          </mesh>
        );
      })}
      <group ref={hour} position={[0, 0, 0.006]}>
        <mesh position={[0, 0.045, 0]}>
          <boxGeometry args={[0.012, 0.09, 0.003]} />
          <meshStandardMaterial color={palette.charcoal} />
        </mesh>
      </group>
      <group ref={minute} position={[0, 0, 0.009]}>
        <mesh position={[0, 0.065, 0]}>
          <boxGeometry args={[0.007, 0.13, 0.003]} />
          <meshStandardMaterial color={palette.cherry} />
        </mesh>
      </group>
      <mesh position={[0, 0, 0.012]}>
        <cylinderGeometry args={[0.012, 0.012, 0.006, 12]} />
        <meshStandardMaterial color={palette.charcoal} />
      </mesh>
    </group>
  );
}

/** A café sign on the back wall, brighter as the night goes on. */
function NeonSign() {
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const texture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 1024;
    c.height = 340;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  useEffect(() => {
    if (!texture) return;
    const draw = () => {
      const c = texture.image as HTMLCanvasElement;
      const g = c.getContext("2d")!;
      const family = cssFont("--font-instrument-serif", "Georgia, serif");
      g.clearRect(0, 0, c.width, c.height);
      g.font = `italic 155px ${family}`;
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.shadowColor = palette.agent;
      for (const blur of [40, 18, 0]) {
        g.shadowBlur = blur;
        g.fillStyle = blur ? "rgba(182,216,169,0.9)" : "#eff6e1";
        g.fillText("one more cup", 512, 165);
      }
      texture.needsUpdate = true;
    };
    draw();
    void document.fonts?.ready.then(draw);
  }, [texture]);
  useFrame((state) => {
    const l = lightsAt(useStore.getState().progress);
    const hum = 0.96 + Math.sin(state.clock.elapsedTime * 11) * 0.02;
    if (mat.current) mat.current.color.setScalar((0.55 + 1.3 * (1 - l.ambient + 0.3)) * hum);
  });
  if (!texture) return null;
  return (
    <mesh position={[1.82, 2.18, -1.69]}>
      <planeGeometry args={[0.86, 0.3]} />
      <meshBasicMaterial ref={mat} map={texture} transparent toneMapped={false} depthWrite={false} />
    </mesh>
  );
}

function CafeMenu() {
  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 420; c.height = 560;
    const g = c.getContext("2d")!;
    g.fillStyle = "#20372f"; g.fillRect(0, 0, 420, 560);
    g.strokeStyle = "#d0c7a3"; g.lineWidth = 2; g.strokeRect(22, 22, 376, 516);
    g.textAlign = "center"; g.fillStyle = "#f3ebd5";
    g.font = "italic 48px Georgia"; g.fillText("café & cadence", 210, 100);
    g.font = "16px monospace"; g.fillStyle = "#c6d6b3"; g.fillText("GOOD COFFEE. LONG RIDES.", 210, 144);
    g.strokeStyle = "#849e83"; g.beginPath(); g.moveTo(62, 180); g.lineTo(358, 180); g.stroke();
    g.font = "28px Georgia"; g.fillStyle = "#f3ebd5";
    ["espresso", "flat white", "filter coffee", "the scenic route"].forEach((line, i) => g.fillText(line, 210, 238 + i * 58));
    g.font = "italic 19px Georgia"; g.fillStyle = "#c6d6b3"; g.fillText("take a seat. stay a little.", 210, 510);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <group position={[-1.92, 1.13, -1.68]}>
      <RoundedBox args={[0.66, 0.87, 0.025]} radius={0.01} castShadow>
        <meshStandardMaterial color={palette.woodDark} roughness={0.8} />
      </RoundedBox>
      <mesh position={[0, 0, 0.014]}><planeGeometry args={[0.6, 0.8]} /><meshStandardMaterial map={texture} roughness={0.9} /></mesh>
    </group>
  );
}

function Chair(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <RoundedBox args={[0.48, 0.07, 0.46]} radius={0.03} position={[0, 0.48, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={palette.charcoal} roughness={0.7} />
      </RoundedBox>
      <RoundedBox args={[0.46, 0.5, 0.06]} radius={0.03} position={[0, 0.8, 0.22]} rotation={[0.12, 0, 0]} castShadow>
        <meshStandardMaterial color={palette.charcoal} roughness={0.7} />
      </RoundedBox>
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.025, 0.42, 10]} />
        <meshStandardMaterial color="#7d776f" metalness={0.6} roughness={0.3} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[Math.sin((i / 5) * Math.PI * 2) * 0.14, 0.04, Math.cos((i / 5) * Math.PI * 2) * 0.14]} rotation={[0, (i / 5) * Math.PI * 2, 0]} castShadow>
          <boxGeometry args={[0.04, 0.03, 0.3]} />
          <meshStandardMaterial color="#2b2522" />
        </mesh>
      ))}
    </group>
  );
}

export function Room() {
  const quality = useStore((s) => s.quality);
  const contact = quality === "high" || quality === "medium";
  const half = Math.PI / 2;

  return (
    <group>
      {/* shell */}
      <Box size={[5.44, 0.1, 4.1]} position={[0, -0.05, 0.2]} color={FLOOR} />
      <Box size={[1.47, 3, 0.12]} position={[-1.985, 1.5, -1.76]} color={WALL} />
      <Box size={[1.47, 3, 0.12]} position={[1.985, 1.5, -1.76]} color={WALL} />
      <Box size={[2.5, 1.05, 0.12]} position={[0, 0.525, -1.76]} color={WALL} />
      <Box size={[2.5, 0.35, 0.12]} position={[0, 2.825, -1.76]} color={WALL} />
      <Box size={[0.12, 3, 4.0]} position={[-2.66, 1.5, 0.2]} color={SIDE} />
      <Box size={[0.12, 3, 4.0]} position={[2.66, 1.5, 0.2]} color={SIDE} />
      {/* baseboards */}
      <Box size={[5.2, 0.08, 0.02]} position={[0, 0.04, -1.69]} color={palette.roast} />
      <Box size={[0.02, 0.08, 3.9]} position={[-2.59, 0.04, 0.2]} color={palette.roast} />
      <Box size={[0.02, 0.08, 3.9]} position={[2.59, 0.04, 0.2]} color={palette.roast} />

      {/* window frame */}
      <Box size={[2.62, 0.06, 0.16]} position={[0, 2.65, -1.72]} color={FRAME} roughness={0.6} />
      <Box size={[2.8, 0.04, 0.26]} position={[0, 1.04, -1.62]} color={FRAME} roughness={0.6} />
      <Box size={[0.06, 1.62, 0.16]} position={[-1.28, 1.85, -1.72]} color={FRAME} roughness={0.6} />
      <Box size={[0.06, 1.62, 0.16]} position={[1.28, 1.85, -1.72]} color={FRAME} roughness={0.6} />
      <Box size={[0.035, 1.6, 0.06]} position={[-0.42, 1.85, -1.74]} color={FRAME} roughness={0.6} />
      <Box size={[0.035, 1.6, 0.06]} position={[0.42, 1.85, -1.74]} color={FRAME} roughness={0.6} />
      <Box size={[2.5, 0.03, 0.06]} position={[0, 2.22, -1.74]} color={FRAME} roughness={0.6} />

      <NeonSign />
      <CafeMenu />
      <WallClock />

      {/* rug + chair */}
      <RoundedBox args={[2.3, 0.012, 1.5]} radius={0.005} position={[0.1, 0.006, -0.2]} receiveShadow>
        <meshStandardMaterial color="#30483f" roughness={1} />
      </RoundedBox>
      <RoundedBox args={[2.0, 0.013, 1.2]} radius={0.005} position={[0.1, 0.007, -0.2]} receiveShadow>
        <meshStandardMaterial color="#627e67" roughness={1} />
      </RoundedBox>
      <Chair position={[0.78, 0, -0.32]} rotation={[0, -0.55, 0]} />

      {/* desk */}
      <RoundedBox args={[2.4, 0.05, 0.72]} radius={0.015} position={[0, 0.755, -1.27]} castShadow receiveShadow>
        <meshStandardMaterial color={DESK} roughness={0.55} />
      </RoundedBox>
      {[
        [-1.13, -1.58],
        [1.13, -1.58],
        [-1.13, -0.96],
        [1.13, -0.96],
      ].map(([x, z]) => (
        <Box key={`${x}${z}`} size={[0.05, 0.73, 0.05]} position={[x, 0.365, z]} color={palette.woodDark} />
      ))}

      {/* on the desk, left to right */}
      <EspressoMachine position={[-0.9, 0.78, -1.34]} />
      <Grinder position={[-0.6, 0.78, -1.42]} rotation={[0, 0.15, 0]} />
      <Mug position={[-0.38, 0.78, -1.02]} />
      <Laptop position={[0, 0.78, -1.2]} />
      <ReceiptPrinter position={[0.45, 0.78, -1.3]} rotation={[0, -0.12, 0]} />
      <Phone position={[0.66, 0.78, -1.0]} />
      <Lamp />

      {/* left wall shelf */}
      <RoundedBox args={[0.34, 0.035, 1.4]} radius={0.01} position={[-2.43, 1.55, -0.78]} castShadow receiveShadow>
        <meshStandardMaterial color={palette.wood} roughness={0.6} />
      </RoundedBox>
      <Box size={[0.2, 0.12, 0.03]} position={[-2.5, 1.47, -1.3]} color={palette.charcoal} />
      <Box size={[0.2, 0.12, 0.03]} position={[-2.5, 1.47, -0.26]} color={palette.charcoal} />
      <PythonNotebook position={[-2.42, 1.5675, -1.15]} rotation={[0, half, 0]} />
      <Ticket position={[-2.5, 1.5675, -0.74]} rotation={[0, half, 0]} />
      <MiniSUB position={[-2.42, 1.5675, -0.42]} rotation={[0, half, 0]} />
      <Grinder position={[-2.42, 1.5675, -0.13]} rotation={[0, half, 0]} />
      <Bicycle position={[1.75, 0, 0.38]} rotation={[0, -0.6, -0.035]} />
      <ChessBoard position={[-1.35, 0.67, 0.15]} rotation={[0, 0.12, 0]} />

      {/* right wall */}
      <PolaroidWall position={[2.585, 1.62, -0.66]} rotation={[0, -half, 0]} />
      <Plant position={[1.95, 0, -1.25]} />
      <Box size={[0.3, 0.035, 1.0]} position={[2.43, 0.84, -0.66]} color={palette.wood} />
      <HackathonTrophy position={[2.38, 0.86, -0.66]} rotation={[0, -half, 0]} />

      {contact && (
        <>
          <ContactShadows position={[0, 0.002, 0.1]} scale={[5.4, 4]} far={1.2} blur={2.4} opacity={0.55} resolution={512} frames={1} color="#0a0503" />
          <ContactShadows position={[0, 0.782, -1.27]} scale={[2.4, 0.72]} far={0.35} blur={1.6} opacity={0.5} resolution={512} frames={1} color="#1a0c06" />
        </>
      )}
    </group>
  );
}
