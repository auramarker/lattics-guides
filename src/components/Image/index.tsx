import React from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  width?: number;
  alt?: string;
};

export default function ({ src, width = 80, alt = "" }: Props) {
  return (
    <figure className={styles.root} style={{ width: `${width}%` }}>
      <img src={src} alt={alt} />
    </figure>
  );
}
