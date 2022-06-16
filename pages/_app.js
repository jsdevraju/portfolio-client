import "../styles/globals.css";
import StoreProvider from "../src/store/store";
import Layout from "../src/layout/Layout";
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Toaster />
      <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
