import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_REDIS_URL)
  console.log(process.env.NEXT_PUBLIC_HOST)
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_APP_API_KEY)
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_APP_API_SECRET_KEY)
  console.log(process.env.NEXT_PUBLIC_SCOPES)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> Shopify App Boilerplate
        </h1>

        <p className={styles.description}>
          Read <a href="https://github.com/t-kelly/nextjs-shopify-app">the repo's README.md</a> for instructions to get started
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>NextJS Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://shopify.dev/concepts/apps" className={styles.card}>
            <h3>Shopify App Development Documentation &rarr;</h3>
            <p>Learn all about building Apps on Shopify</p>
          </a>

          <a
            href="https://shopify.dev/concepts/about-apis"
            className={styles.card}
          >
            <h3>Shopify APIs &rarr;</h3>
            <p>Our APIs enable your app to solve solve meaningful problems in commerce</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy on Vercel &rarr;</h3>
            <p>
              Instantly deploy your Next.js Shopify App to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}