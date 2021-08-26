import Head from "next/head";
import styles from "../styles/Home.module.css";

import ContrastChecker from "../stories/ContrastChecker";

export default function Home(props: { label: string }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Worlds</title>
      </Head>

      <main className={styles.main}>
        <ContrastChecker colorName={props.label} colorHex="#55468c"></ContrastChecker>
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: { label: "test" }, // will be passed to the page component as props
  };
};

