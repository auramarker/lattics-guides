import React, {CSSProperties} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Aura Marker Studio'
      description="Aura Marker Studio is an independent product innovation firm."
    >
      <main className={styles.main}>
        <header>
          Aura Marker Studio <br />
          is an independent product innovation firm.
        </header>
        <section>
          <article>
            <a href="https://lattics.zineapi.com/" target="_blank">
              <svg
                width="102"
                height="102"
                viewBox="0 0 102 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.465 21.205c.428 1.502.658 3.087.658 4.727 0 1.718-.252 3.377-.721 4.942h45.74a4.835 4.835 0 0 0 0-9.67H42.464zM30.66 42.465a17.203 17.203 0 0 1-4.728.657c-1.718 0-3.376-.251-4.941-.72v45.954a4.835 4.835 0 1 0 9.67 0V42.464zM8.254 1.415l9.43 9.43a17.272 17.272 0 0 0-6.838 6.837l-9.43-9.43a4.835 4.835 0 1 1 6.838-6.837z"
                  fill="#DD0AFF"
                />
                <circle cx="25.932" cy="25.932" r="12.893" fill="#DD0AFF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.878 76.068c0 1.64.23 3.226.658 4.728H33.884v-9.67h25.715a17.19 17.19 0 0 0-.72 4.942zm-40.68-4.942H13.86a4.835 4.835 0 1 0 0 9.67h4.337v-9.67zm57.87-12.248a17.2 17.2 0 0 0-4.727.658V33.668h9.67v25.93a17.191 17.191 0 0 0-4.942-.72zm4.942-40.896v-4.337a4.835 4.835 0 1 0-9.67 0v4.337h9.67zm3.307 73.172l9.43 9.43a4.835 4.835 0 0 0 6.838-6.837l-9.43-9.43a17.272 17.272 0 0 1-6.838 6.837z"
                  fill="#8759F2"
                />
                <circle
                  cx="76.069"
                  cy="76.068"
                  r="12.893"
                  transform="rotate(-180 76.069 76.068)"
                  fill="#8759F2"
                />
              </svg>
            </a>
            <p>
              <strong>Lattics</strong> - Brain-like KM Notes
            </p>
          </article>
          <article>
            <a
              href="https://varlens.zineapi.com/"
              target="_blank"
              style={{
                background:
                  "linear-gradient(131.69deg, #1E1E1E -10.28%, #535353 108.75%)",
              }}
            >
              <svg
                width="116"
                height="116"
                viewBox="0 0 116 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.452 10.62a6.936 6.936 0 0 1 6.85 1.085l31.819 25.766a6.937 6.937 0 0 1 2.486 6.475l-6.405 40.439a6.936 6.936 0 0 1-4.365 5.39l-38.223 14.672a6.935 6.935 0 0 1-6.85-1.085L14.944 77.597a6.936 6.936 0 0 1-2.486-6.476l6.405-40.438a6.936 6.936 0 0 1 4.365-5.39L61.452 10.62z"
                  stroke="#fff"
                  stroke-width="2.312"
                />
                <path
                  clip-rule="evenodd"
                  d="M52.015 87.319l-17.54-51.665 53.477 11.927L52.015 87.32z"
                  stroke="#fff"
                  stroke-width="1.156"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.526 74.41L51.55 86.715M50.395 104.054l1.733-17.34M94.322 86.714H51.55M102.414 40.473l-14.645 7.135M65.422 11.573L87.386 47.41M94.7 87.036l-7.313-39.627M65.968 10.64L34.586 36.596M13.526 74.41l21.06-37.815M21.012 27.339l13.474 8.104"
                  stroke="#fff"
                  stroke-width="1.156"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <p>
              <strong>Varlens</strong> - DSLR in Phone
            </p>
          </article>
          <article>
            <a
              href="https://zine.la/"
              target="_blank"
              style={{ "--item-bg": "#01CDCD" } as CSSProperties}
            >
              <svg
                width="110"
                height="71"
                viewBox="0 0 110 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0h41.34v6.455H0V0zm0 63.802h41.34v6.513H0v-6.513zM32.65 9.945h7.61L7.646 60.328H.034L32.65 9.945zm24.181 38.727v-4.718h-5.075v4.718h5.075zm0 21.873V51.28h-5.075v19.262h5.074l.001.003zm27.081-11.97c.03-1.149-.063-2.298-.28-3.427a5.643 5.643 0 0 0-.993-2.14 5.155 5.155 0 0 0-2.102-1.55 7.559 7.559 0 0 0-3.07-.609 7.67 7.67 0 0 0-6.32 3.265v-2.829h-4.714v19.262h5.074v-8.725a16.7 16.7 0 0 1 .388-4.426 3.662 3.662 0 0 1 1.435-1.922 4.047 4.047 0 0 1 2.366-.724 2.998 2.998 0 0 1 1.76.508c.497.349.867.848 1.058 1.423.286 1.325.395 2.681.323 4.034v9.83h5.074v-11.97h.001zm19.463 7.946a3.093 3.093 0 0 1-2.004.645 3.841 3.841 0 0 1-2.925-1.258 5.178 5.178 0 0 1-1.229-3.53h12.713c.073-3.905-.715-6.804-2.365-8.695a8.492 8.492 0 0 0-6.755-2.84 8.186 8.186 0 0 0-6.304 2.71 10.67 10.67 0 0 0-2.492 7.503 11.066 11.066 0 0 0 1.896 6.638 8.573 8.573 0 0 0 7.403 3.282 9.01 9.01 0 0 0 5.265-1.46 8.322 8.322 0 0 0 3.079-4.254l-5.056-.852a4.049 4.049 0 0 1-1.226 2.106v.005zm-6.067-7.261a4.716 4.716 0 0 1 1.066-3.302 3.65 3.65 0 0 1 5.382-.063 4.923 4.923 0 0 1 1.132 3.364h-7.581.001z"
                  fill="#fff"
                />
              </svg>
            </a>
            <p>
              <strong>Zine</strong> - Enjoy Writing
            </p>
          </article>
        </section>
        <footer>
          <p>For join us please contact:</p>
          <a href="mailto:hr@auramarker.com" className={styles.mailto}>
            hr@auramarker.com
          </a>
        </footer>
      </main>
    </Layout>
  );
}
