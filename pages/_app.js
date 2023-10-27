// pages/_app.js
import Head from 'next/head'
import '../public/style.css';
import '../public/global.css';
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" />
        <meta name="google-adsense-account" content="ca-pub-4379694315841199"></meta>
        <meta name="description" content="Esta pagina es para hacer preguntas random, jugar con tus amigos y divertirse" />
        {/* <link rel="icon" type="image/x-icon" href="../static/favicon.ico" alt="Principiante en Programar" />
        <link rel="apple-touch-icon" href="../static/Principiante-en-Programar.png"></link>*/}
        <title>Preguntas Aleatorias</title>
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}

export default MyApp;