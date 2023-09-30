import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <header>
              <div>Header Component</div>
              <span>1050*100</span>
          </header>
          <main>
            <aside>
              <div>Aside Component</div>
              <span>350*520</span>
            </aside>
            <section>
              <div>Section Component</div>
              <span>690*520</span>
            </section>
          </main>
          <footer>
              <div>Footer Component</div>
              <span>1050*75</span>
          </footer>
    </div>
  )
}
