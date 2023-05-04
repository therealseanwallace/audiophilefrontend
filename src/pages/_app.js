import PropTypes from 'prop-types';
import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};