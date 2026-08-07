import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  width?: number;
};

export default function Video({ src, width = 80 }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 996);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className={styles.root}
      style={{ width: isMobile ? "100%" : `${width}%` }}
    >
      <video
        src={src}
        autoPlay={!isMobile}
        controls={isMobile}
        loop
        muted
        playsInline
        /* @ts-ignore */
        webkit-playsinline="true"
        /* @ts-ignore */
        x5-playsinline="true"
        /* @ts-ignore */
        x5-video-player-type="h5-page"
        /* @ts-ignore */
        x5-video-player-fullscreen="false"
      />
    </section>
  );
}
