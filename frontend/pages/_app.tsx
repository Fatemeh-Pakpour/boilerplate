import { Global } from "@app/atom/styles/global";
import React from "react";
const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
