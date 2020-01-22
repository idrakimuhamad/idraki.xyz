import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/style.scss';

class RootApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Idraki Muhamad: JavaScript Developer</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default RootApp;
