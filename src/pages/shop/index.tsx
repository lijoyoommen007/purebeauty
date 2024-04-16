import React from 'react';
import NavBar from '../../components/navBar';
import ShopItemCard from '../../components/shopItemCard';
import Footer from '../../components/footer';

function Index() {
  

  return (
    <>
    <NavBar subNavData="Shop"/>
    <ShopItemCard/>
    <Footer/>
    </>
  );
}

export default Index;
