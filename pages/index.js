import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Home - Matsushita Web Design</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="大阪のフリーランスWEBデザイン事務所" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

      <div className="container-fluid fl-top">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/service"><a>Service</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/posts"><a>Blog</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/about"><a>About</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/contact"><a>Contact</a></Link>
            </li>
          </ol>
        </nav>
      </div>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.animetext}>Simple is Best.</h1>
            <h1 className={styles.animetext1}>Functional Beauty.</h1>
          </div>
          <div>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          id={styles.largecredit}
        >
          Copyright © 2022 Matsushita Web Design All Rights Reserved{' '}
          <span className={styles.logo}>
            <Image src="/mwd.svg" alt="Matsushita Web Design Logo" width={15} height={15} />
          </span>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          id={styles.smallcredit}
        >
          Copyright © 2022 M.W.D All Rights Reserved{' '}
          <span className={styles.logo}>
            <Image src="/mwd.svg" alt="Matsushita Web Design Logo" width={15} height={15} />
          </span>
        </a>
      </footer>
    </div>
  )
}