import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import {initiateCheckOut} from '../lib/payments'

export default function Home() {
  console.log('process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly shop
        </h1>

        <p className={styles.description}>
          The best space jellyfish swag on the universe!
        </p>

        <ul className={styles.grid}>
          {products.map( product => {
            const {id,title,description,image,price} = product;
            return(
              <li key={id} className={styles.card}>
              <a href='#'>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>${price}</p>
              <p>{description}</p>
              <p>
                <button className={styles.button} onClick={() => {
                 initiateCheckOut({
                   lineItems: [
                     {
                       price: id,
                       quantity: 1
                     }
                   ]
                 })
                }}>Buy Now</button>
              </p>
            </a>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
