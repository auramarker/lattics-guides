import React from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  width?: number;
};

export default function ({ src, width = 80 }: Props) {
  return (
    <section className={styles.root} style={{ width: `${width}%` }}>
      <video src={src} autoPlay loop muted />
    </section>
  );
}
