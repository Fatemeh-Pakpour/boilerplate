import { Global } from "@app/atom/styles/global";
import React from "react";
const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Global />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
