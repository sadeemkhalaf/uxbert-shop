import React from 'react';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="py-0 px-2 flex flex-col justify-center items-center h-screen">
        {/* <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

        <main className="flex w-full flex-col items-center px-2 py-0">
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{` `}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <p className={styles.description}>This is not an official starter!</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
