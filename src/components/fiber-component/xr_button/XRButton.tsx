import type { XRStore } from "@react-three/xr";
import type { ReactElement } from "react";
import styles from "./XRButton.module.scss";

type Props = {
  store: XRStore;
};

const XRButton = ({ store }: Props): ReactElement => {
  return (
    <div className={styles.xrButtonContainer}>
      <button type="button" className={styles.xrButton} onClick={() => store.enterAR()}>
        Enter AR
      </button>
    </div>
  );
};

export default XRButton;
