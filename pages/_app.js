import "../styles.css";
import App, { Container } from "next/app";
import Head from "next/head";
import { StaticKitProvider } from "@statickit/react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="eecb0c102f1a">
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <title>Sweezy Cooking</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </StaticKitProvider>
  );
}
