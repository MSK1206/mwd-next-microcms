import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Some.module.css'

const Service = props => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Service - Matsushita Web Design</title>
      <meta name="description" content="大阪のフリーランスWEBデザイン事務所" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <div className="container-fluid fl-top">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="breadcrumb-item active">
              <Link href="/service"><a>Service</a></Link>
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
        <div className="card ">
          <Image 
            src="/nyandafullife640a.png"
            width={380}
            height={220}
            className="card-img-top"
            alt="DEMO" 
          />
          <div className="card-body">
            <h5 className="card-title">WordPressサイト制作</h5>
            <p className="card-text">WordPressを用いたサイト制作を致します。</p>
            <Link href="/contact">
              <a className="btn btn-secondary">お見積り・ご相談はこちら</a>
            </Link>
          </div>
        </div>
        <div className="card">
          <Image 
            src="/nyandafullife640a.png"
            width={380}
            height={220}
            className="card-img-top"
            alt="DEMO" 
          />
          <div className="card-body">
            <h5 className="card-title">ホームページ・ECサイト制作</h5>
            <p className="card-text">レスポンシブ対応〇</p>
            <Link href="/contact">
              <a className="btn btn-secondary">お見積り・ご相談はこちら</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
      <div className="card">
          <Image 
            src="/nyandafullife640a.png"
            width={380}
            height={220}
            className="card-img-top"
            alt="DEMO" 
          />
          <div className="card-body">
            <h5 className="card-title">ランディングページ制作</h5>
            <p className="card-text">レスポンシブ対応〇</p>
            <Link href="/contact">
              <a className="btn btn-secondary">お見積り・ご相談はこちら</a>
            </Link>
          </div>
        </div>
        <div className="card">
          <Image 
            src="/nyandafullife640a.png"
            width={380}
            height={220}
            className="card-img-top"
            alt="DEMO" 
          />
          <div className="card-body">
            <h5 className="card-title">コーディングのご依頼</h5>
            <p className="card-text">
              様々なコーディングご依頼承ります。
            </p>
            <Link href="/contact">
              <a className="btn btn-secondary">お見積り・ご相談はこちら</a>
            </Link>
          </div>
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

export default Service