import Head from 'next/head'
import { client } from "../../libs/client"
import styles from '../../styles/Custom.module.scss'

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogId({ blog }) {
  return (
    <div className={styles.container}>
      <Head>
      <title>{blog.title} - Matsushita Web Design</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="大阪のフリーランスWEBデザイン事務所" />
      <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>投稿日：{dayjs.utc(blog.publishedAt).tz('Asia/Tokyo').format('YYYY'+ '年' + 'MM' + '月' + 'DD' + '日' + 'hh' + ':' + 'mm')}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          className={styles.post}
        />
      </main>
    </div>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}