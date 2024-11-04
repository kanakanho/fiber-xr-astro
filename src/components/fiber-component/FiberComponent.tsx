import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import type { ReactElement } from "react";
import styles from "./FiberComponent.module.scss";
import XRButton from "./xr_button/XRButton";
import XRIndex from "./xr_index/XRIndex";

const store = createXRStore({
  depthSensing: true,
  hand: {
    model: false,
  },
  controller: {
    model: false,
  },
  frameBufferScaling: "high",
});

const FiberComponent = (): ReactElement => {
  return (
    <div className={styles.threeCanvas}>
      <XRButton store={store} />
      <Canvas>
        <XR store={store}>
          <XRIndex />
        </XR>
      </Canvas>
    </div>
  );
};

export default FiberComponent;
