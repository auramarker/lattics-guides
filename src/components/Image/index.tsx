import React, {CSSProperties} from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  width?: number;
  widthSm?: number;
  alt?: string;
  border?: boolean;
};

export default function ({src, width = 80, widthSm, alt = "", border = true}: Props) {
  return (
    <figure className={styles.root} style={{
      '--w': `${width}%`,
      '--w-sm': `${widthSm || width}%`, ...(border === false ? {border: 'none'} : {})
    } as CSSProperties}>
      <img src={src} alt={alt}/>
    </figure>
  );
}
