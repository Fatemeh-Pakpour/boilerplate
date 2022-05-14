import React from "react";
const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};
export default MyApp;
