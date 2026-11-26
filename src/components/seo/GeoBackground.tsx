import { Background, Row } from "@once-ui-system/core";
import { ParticleGate } from "./LazyFx";

export const GeoBackground: React.FC<React.ComponentProps<typeof Row>> = ({ ...flex }) => {
  return (
    <Row position="absolute" fill overflow="hidden" pointerEvents="none" {...flex}>
      <Background
        fill
        themeSolid="color"
        gradient={{
          display: true,
          x: 50,
          y: 100,
          width: 100,
          height: 50,
          colorStart: "brand-solid-strong",
          colorEnd: "static-transparent",
        }}
      />
      <Background
        fill
        position="absolute"
        bottom="0"
        left="0"
        style={{ filter: "blur(1rem)", transform: "scale(1.1)" }}
        gradient={{
          display: true,
          x: 50,
          y: 100,
          width: 100,
          height: 30,
          colorStart: "brand-on-background-strong",
          colorEnd: "static-transparent",
        }}
      />
      <ParticleGate />
    </Row>
  );
};
