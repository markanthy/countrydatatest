import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://mango-glacier-0656f1b0f.2.azurestaticapps.net/api/enpull',
    };
    axios.request(options).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.sectiontitle}>Dat geography doe</div>
        <div>
          {data && (
            <>
              
              <p className={styles.country}> {data.name.official}</p>
              <p>Capital: {data.capital}</p>
              <p>Language: {data.languages.eng}</p>
              <p>Currency: {data.currencies.USD.name}</p>
            </>
          )}
        </div>
      </main>
    </>
  )
}


