"use client";

import type { ThreeElements } from "@react-three/fiber";
import { DoubleSide } from "three";
import { RoundedBox } from "@react-three/drei";
import { useStore } from "@/lib/store";
import { palette } from "@/lib/palette";
import { Interactive, useCanvasTexture } from "../parts";

// A symbolic room memento for the win, not a replica of an event prize.
export function HackathonTrophy(props: ThreeElements["group"]) {
  const open = useStore((s) => s.setPolaroid);
  const label = useCanvasTexture(512, 160, (g, w, h) => {
    g.fillStyle = "#ddd0a5";
    g.fillRect(0, 0, w, h);
    g.textAlign = "center";
    g.fillStyle = "#302519";
    g.font = "bold 50px Georgia";
    g.fillText("AABW 2026", w / 2, 65);
    g.font = "27px monospace";
    g.fillText("FOUNDER TRACK", w / 2, 115);
  });
  return (
    <group {...props}>
      <Interactive
        label="that AABW win"
        onClick={() => open(0)}
        hit={[0.42, 0.55, 0.3]}
        hitPosition={[0, 0.22, 0]}
      >
        <RoundedBox
          args={[0.27, 0.09, 0.2]}
          radius={0.01}
          position={[0, 0.045, 0]}
          castShadow
        >
          <meshStandardMaterial color={palette.charcoal} roughness={0.45} />
        </RoundedBox>
        <mesh position={[0, 0.046, 0.102]}>
          <planeGeometry args={[0.23, 0.068]} />
          <meshStandardMaterial map={label} />
        </mesh>
        <mesh position={[0, 0.145, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.05, 0.12, 16]} />
          <meshStandardMaterial
            color={palette.gold}
            metalness={0.75}
            roughness={0.28}
          />
        </mesh>
        <mesh position={[0, 0.26, 0]} castShadow>
          <cylinderGeometry args={[0.11, 0.045, 0.13, 24, 1, true]} />
          <meshStandardMaterial
            color={palette.gold}
            metalness={0.75}
            roughness={0.3}
            side={DoubleSide}
          />
        </mesh>
        <mesh position={[0, 0.33, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.11, 0.009, 8, 24]} />
          <meshStandardMaterial
            color={palette.gold}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh
            key={side}
            position={[side * 0.11, 0.265, 0]}
            rotation={[0, 0, side < 0 ? Math.PI : 0]}
          >
            <torusGeometry args={[0.066, 0.012, 8, 16, Math.PI]} />
            <meshStandardMaterial
              color={palette.gold}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        ))}
      </Interactive>
    </group>
  );
}
