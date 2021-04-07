import React from 'react'
import Head from '@docusaurus/Head'
import MainLayout from '../components/mainLayout'
import {
  Hero,
  Overview,
  ValueProp,
  Differentiator,
  InnovationPartners,
} from '../components'

function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Cloud Carbon Footprint</title>
        <meta property="og:title" content="Cloud Carbon Footprint"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://www.cloudcarbonfootprint.org/"
        ></meta>
        <meta
          property="og:description"
          content="An open source tool to measure and analyze cloud carbon emissions"
        ></meta>
        <meta
          property="og:image"
          content="https://cloud-carbon-footprint.org/img/share-image.png"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:image"
          content="https://cloud-carbon-footprint.org/img/share-image-twitter.png"
        />
      </Head>
      <Hero />
      <Overview />
      <ValueProp />
      <Differentiator />
      <InnovationPartners />
    </MainLayout>
  )
}

export default Home
