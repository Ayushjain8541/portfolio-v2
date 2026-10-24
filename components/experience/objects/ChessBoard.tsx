"use client";

import type { ThreeElements } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { site } from "@/content/site";
import { palette } from "@/lib/palette";
import { useStore } from "@/lib/store";
import { Interactive } from "../parts";

function Piece({ type, color }: { type: number; color: string }) {
  const pawn = type === 0;
  const h = pawn ? 0.075 : 0.11;
  return (
    <group>
      <mesh position={[0, 0.009, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.029, 0.018, 12]} />
        <meshStandardMaterial color={color} roughness={0.45} />
      </mesh>
      <mesh position={[0, h * 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.013, 0.022, h * 0.7, 12]} />
        <meshStandardMaterial color={color} roughness={0.45} />
      </mesh>
      <mesh position={[0, h * 0.85, 0]} castShadow>
        <sphereGeometry args={[pawn ? 0.022 : 0.026, 12, 10]} />
        <meshStandardMaterial color={color} roughness={0.45} />
      </mesh>
      {!pawn && type === 4 && (
        <group position={[0, h + 0.026, 0]}>
          <mesh>
            <boxGeometry args={[0.009, 0.038, 0.009]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <mesh position={[0, 0.006, 0]}>
            <boxGeometry args={[0.03, 0.009, 0.009]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </group>
      )}
      {!pawn && type === 1 && (
        <mesh position={[0, h, 0]}>
          <cylinderGeometry args={[0.028, 0.028, 0.025, 8]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}
      {!pawn && type === 2 && (
        <mesh position={[0.009, h, 0]} rotation={[0, 0, -0.45]}>
          <boxGeometry args={[0.022, 0.043, 0.025]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}
    </group>
  );
}

export function ChessBoard(props: ThreeElements["group"]) {
  const tooltip = useStore((s) => s.setTooltip);
  const unlock = useStore((s) => s.unlock);
  return (
    <group {...props}>
      <RoundedBox
        args={[1.02, 0.045, 1.02]}
        radius={0.015}
        position={[0, -0.025, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={palette.woodDark} roughness={0.6} />
      </RoundedBox>
      {[
        [-0.4, -0.4],
        [-0.4, 0.4],
        [0.4, -0.4],
        [0.4, 0.4],
      ].map(([x, z]) => (
        <mesh key={`${x}:${z}`} position={[x, -0.34, z]} castShadow>
          <boxGeometry args={[0.045, 0.64, 0.045]} />
          <meshStandardMaterial color={palette.woodDark} />
        </mesh>
      ))}
      <Interactive
        label="the first chess project"
        onClick={() => {
          tooltip({ id: "chess", text: site.origin.chessTooltip });
          unlock("et-tu");
        }}
        hit={[0.95, 0.28, 0.95]}
        hitPosition={[0, 0.09, 0]}
      >
        <RoundedBox
          args={[0.88, 0.035, 0.88]}
          radius={0.008}
          position={[0, 0.017, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#ad8151" roughness={0.6} />
        </RoundedBox>
        {Array.from({ length: 64 }, (_, i) => {
          const col = i % 8,
            row = Math.floor(i / 8);
          return (
            <mesh
              key={i}
              position={[(col - 3.5) * 0.1, 0.037, (row - 3.5) * 0.1]}
              receiveShadow
            >
              <boxGeometry args={[0.1, 0.005, 0.1]} />
              <meshStandardMaterial
                color={(col + row) % 2 === 0 ? "#e6d8b6" : "#3b5146"}
                roughness={0.85}
              />
            </mesh>
          );
        })}
        {[0, 1, 6, 7].flatMap((row) =>
          Array.from({ length: 8 }, (_, col) => (
            <group
              key={`${row}:${col}`}
              position={[(col - 3.5) * 0.1, 0.043, (row - 3.5) * 0.1]}
            >
              <Piece
                type={
                  row === 1 || row === 6 ? 0 : [1, 2, 3, 5, 4, 3, 2, 1][col]
                }
                color={row < 2 ? "#2b302a" : "#f0e7d1"}
              />
            </group>
          )),
        )}
      </Interactive>
    </group>
  );
}
