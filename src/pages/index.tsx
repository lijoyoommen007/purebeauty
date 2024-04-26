import React from 'react'
import ItemCard from '../components/blogItemCard'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Pure Beauty Blog Page</title>
        <meta name="description" content="This page contains the list of all blogs which mainly contains product details and skin care blogs. You can see detailed blog and clicking on a particualr blog" />
        <meta name="keywords" content="next.js, react, Pure beauty, skin care,pure beauty skin care" />
        <meta name="author" content="Lijoy Oommen"/>
        <link rel="icon" href="/Vector.svg" type="image/svg+xml" />
      </Head>
    <NavBar subNavData="Blogs"/>
    <ItemCard/>
    <div className='relative'>
    <img
      loading="lazy"
      src="/imagePreviewOne.svg"
      className="w-full aspect-[2] object-cover"
      
    />
      <div className="absolute inset-0 bg-black opacity-50"></div>

    </div>
    <Footer/>
    </>
  )
}
  