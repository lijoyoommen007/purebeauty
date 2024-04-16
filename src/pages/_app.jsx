import "@/styles/globals.css";

// _app.js

import { Provider, useSelector } from 'react-redux';
import { store } from '../store';
import { Component, useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <AppWrapper Component={Component} pageProps={pageProps} />
    </Provider> 
  );
}

const AppWrapper=({Component,pageProps})=>{
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated && router.query.id) {
      router.push("/login");
    } else if (isAuthenticated && router.pathname === "/login") {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return(
    <>
          <Component {...pageProps} />
    </> 
  )
}
