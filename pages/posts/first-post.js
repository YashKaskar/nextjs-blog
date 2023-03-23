import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function FirstPost() {
    return (
      <>
        <Head>
        <title>My First Next Js First Post</title>
        </Head>
        <main className={styles.main}>  
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>

        </main>
        
      </>
    );
  }