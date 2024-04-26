// components/Loader.js
import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector((state:any) => state.loading.isLoading);

  return( 
    <>
  {isLoading?<div className='bg-customRed'  style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <span className="loader"></span>
  </div>:null}
  </>
  )
};

export default Loader;
