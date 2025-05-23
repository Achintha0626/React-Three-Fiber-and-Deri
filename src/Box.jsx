import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Box(props) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
    ref.current.position.y=Math.sin(state.clock.getElapsedTime()*2)
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
