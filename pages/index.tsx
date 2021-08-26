import Head from "next/head";
import styles from "../styles/Home.module.css";

import ContrastChecker from "../stories/ContrastChecker";

export default function Home(props: { colors: any[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contrast Checker</title>
      </Head>

      <main className={styles.main}>
        {
           props.colors.map(el => <ContrastChecker colorName={el.colorName} colorHex={el.colorHex}></ContrastChecker>)
        }
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: { 
      //colors to test
      colors: [
        { colorHex: '#007bff', colorName: 'Primary Color' },
        { colorHex: '#17a2b8', colorName: 'Info Color' },
        { colorHex: '#ffc107', colorName: 'Warning Color' },
        { colorHex: '#dc3545', colorName: 'Danger Color' }
      ] 
    },
  };
};

