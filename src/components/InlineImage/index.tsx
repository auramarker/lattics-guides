import React, {CSSProperties} from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  alt?: string;
  border?: boolean;
};

export default function ({src, alt = "", border = true}: Props) {
  return (
    <img data-type="image-inline" src={src} alt={alt} className={styles.root} style={{
      ...(border === false ? {border: 'none'} : {})
    } as CSSProperties}/>
  );
}
