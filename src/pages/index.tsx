import { Divider } from '../components/Divider'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Banner } from '../components/Banner'
import { Continents } from '../components/Continents'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WorldTrip - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Continents />
    </>
  )
}

export default Home
