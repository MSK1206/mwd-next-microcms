import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Some.module.css'

const About = props => {
  return (
    <div className={styles.container}>
    <Head>
      <title>About - Matsushita Web Design</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="大阪のフリーランスWEBデザイン事務所" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <div className="container-fluid fl-top">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/service"><a>Service</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/posts"><a>Blog</a></Link>
            </li>
            <li className="breadcrumb-item active">
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
        <div className={styles.myimage}>
          <Image 
            src="/mwd.svg"
            width={150}
            height={150}
            className={styles.myphoto}
            alt="My Image" 
          />
        </div>
        <div className={styles.centerall}>
          <h1 className={styles.myname}>Masaki Matsushita.</h1>
          <p>birth: 1989/12/06</p>
          <p className={styles.txtwrap}>Thank you for watching our site. I am a freelance web designer in Osaka.</p>
          <a 
            href="https://github.com/MSK1206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-github github-icon-size"></i>
          </a>
        </div>
      </div>
      <p className={styles.hrline}></p>    
    </main>

    <footer className={styles.footer}>
      <a
        href="#pagetop"
        id={styles.largecredit}
      >
        Copyright © 2022 Matsushita Web Design All Rights Reserved{' '}
        <span className={styles.logo}>
          <Image src="/mwd.svg" alt="Matsushita Web Design Logo" width={15} height={15} />
        </span>
      </a>
      <a
        href="#pagetop"
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

export default About