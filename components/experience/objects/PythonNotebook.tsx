"use client";

import type { ThreeElements } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { site } from "@/content/site";
import { useStore } from "@/lib/store";
import { palette } from "@/lib/palette";
import { cssFont, Interactive, useCanvasTexture } from "../parts";

export function PythonNotebook(props: ThreeElements["group"]) {
  const tooltip = useStore((s) => s.setTooltip);
  const texture = useCanvasTexture(480, 640, (g, w, h) => {
    g.fillStyle = "#344f43";
    g.fillRect(0, 0, w, h);
    g.strokeStyle = "#d1c49e";
    g.lineWidth = 3;
    g.strokeRect(26, 26, w - 52, h - 52);
    g.fillStyle = "#e9dfc3";
    g.fillRect(0, 0, 24, h);
    g.textAlign = "center";
    const title = "Python for DUMMIES";
    const face = cssFont("--font-instrument-serif", "Georgia");
    let titleSize = 52;
    g.font = `${titleSize}px ${face}`;
    while (g.measureText(title).width > w - 80 && titleSize > 28) {
      g.font = `${--titleSize}px ${face}`;
    }
    g.fillText(title, w / 2, 288);
    g.font = "italic 29px Georgia";
    g.fillText("Yes YOU are the dummy", w / 2, 350);
  });
  return (
    <group {...props}>
      <Interactive
        label="from JC to NUS"
        onClick={() => tooltip({ id: "school", text: site.school.tooltip })}
        hit={[0.46, 0.6, 0.14]}
        hitPosition={[0, 0.24, 0]}
      >
        <RoundedBox
          args={[0.39, 0.51, 0.055]}
          radius={0.006}
          position={[0, 0.255, 0]}
          castShadow
        >
          <meshStandardMaterial color={palette.crema} roughness={0.9} />
        </RoundedBox>
        <mesh position={[0, 0.255, 0.029]}>
          <planeGeometry args={[0.39, 0.51]} />
          <meshStandardMaterial map={texture} roughness={0.8} />
        </mesh>
      </Interactive>
    </group>
  );
}
