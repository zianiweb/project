import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Home(props: { label: string }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
      </Head>

      <main className={styles.main}>
        Hello World
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: { label: "Hello World" }, // will be passed to the page component as props
  };
};

