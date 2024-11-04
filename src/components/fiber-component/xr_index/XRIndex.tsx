import useCameraPosition from "@/hooks/useCameraPosition";
import type { ReactElement } from "react";

const XRIndex = (): ReactElement => {
  const [positionRef, quaternionRef] = useCameraPosition();

  return (
    <mesh pointerEventsType={{ deny: "grab" }} position={[0, 1, 0]}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default XRIndex;
