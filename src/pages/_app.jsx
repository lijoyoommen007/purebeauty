import "@/styles/globals.css";

// _app.js

import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { Component, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader"
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <AppWrapper Component={Component} pageProps={pageProps} />
    </Provider> 
  );
}

const AppWrapper = ({ Component, pageProps }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && router.query.id || !isAuthenticated&&router.pathname == "/") {
      router.push("/login");
    } else if (isAuthenticated && router.pathname === "/login") {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  // Accessing loading state from Redux store
  const isLoading = useSelector(state => state.loading.isLoading);


  return (
    <>
      {/* Display loading indicator if isLoading is true */}
      {isLoading ? <Loader/>:

      <Component {...pageProps} />}
    </>
  );
};
