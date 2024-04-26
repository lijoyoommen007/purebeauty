import React from 'react';
import NavBar from '../../components/navBar';
import ShopItemCard from '../../components/shopItemCard';
import Footer from '../../components/footer';
import Head from 'next/head';

function Index() {
  return (
    <>
      <Head>
        <title>Pure Beauty Shop - Buy the Best Skin Care Products</title>
        <meta name="description" content="Explore our collection of high-quality skin care products at Pure Beauty Shop. Find the perfect solution for your skincare needs." />
        <meta name="keywords" content="pure beauty, skin care, beauty products, skincare, buy skincare online" />
        <meta name="author" content="Lijoy Oommen" />
        <link rel="icon" href="/Vector.svg" type="image/svg+xml" />
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Pure Beauty Shop",
            "url": "https://purebeauth.vercel.app/",
            "logo": "/Vector.svg"
          }
        `}</script>
      </Head>
      <NavBar subNavData="Shop" />
      <ShopItemCard />
      <Footer />
    </>
  );
}

export default Index;
