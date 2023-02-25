import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import React from 'react'
import Portfolio from './portfolio/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello</h1>
      < Portfolio />
      
    </div>
  )
}
