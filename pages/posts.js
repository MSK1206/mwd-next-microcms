/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { client } from "../libs/client"
import styles from '../styles/Posts.module.css'

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);


export default function Posts({ blog }) {
  return (
    <div className={styles.container}>
    <Head>
      <title>Blog - Matsushita Web Design</title>
      <meta name="description" content="大阪のフリーランスWEBデザイン事務所" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <li className="breadcrumb-item active">
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
        <ul className={styles.poststyle}>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a className={styles.postscard}>
                    <img 
                      src={blog.eyecatch.url}
                      width="380"
                      height="200"
                      className="card-img-top"
                      alt={blog.title} 
                    />
                    <h5 className={styles.blogtitle}>{blog.title}</h5>
                    <p className="text-muted mt-1">投稿日：{dayjs.utc(blog.publishedAt).tz('Asia/Tokyo').format('YYYY'+ '年' + 'MM' + '月' + 'DD' + '日' + 'hh' + ':' + 'mm')}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })

  return {
    props: {
      blog: data.contents,
    },
  }
}