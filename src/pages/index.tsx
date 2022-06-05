import type { NextPage } from 'next'
import Head from 'next/head'

import { Banner } from '../components/Banner'
import { Continents } from '../components/Continents'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
      <TravelTypes />
      <Continents />
    </div>
  )
}

export default Home
