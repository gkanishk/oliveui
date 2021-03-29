import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olive Ui</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container padding-sm">
        <h1>Olive UI: the modern CSS framework.</h1>
        <p className={styles.containerBody}>
          Olive-ui is a free, open source framework that provides ready-to-use
          frontend components that you can easily combine to build responsive
          web interfaces.
        </p>
        <div className="d-flex justify-center">
        <button className="btn btn-outline home-btn">Download</button>
        <Link href="/docs">
        <button className="btn btn-primary home-btn">
          Getting started
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
