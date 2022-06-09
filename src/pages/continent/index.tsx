import Head from "next/head";
import { Header } from "../../components/Header";
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentAbout } from "../../components/ContinentAbout";

export default function Continent() {
    return(
        <>
            <Head>
                <title>WorldTrip - Continent</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header showButtonBackHome />
            <ContinentBanner />
            <ContinentAbout />
        </>
    )
}