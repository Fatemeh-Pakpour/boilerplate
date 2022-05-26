import { Paragraph } from "@app/atom/paragraph";
import React, { memo } from "react";

export const Child = memo(() => {
  // interface Target {
  //   secret: string;
  //   message2: string;
  // }
  // const target = {
  //   secret: "hello",
  //   message2: "everyone",
  // };

  // const handler = {
  //   set(target: Target, prop: keyof Target, value: string) {
  //     target[prop] = value;
  //     return true;
  //   },
  //   get(target: Target, prop: keyof Target) {
  //     return target[prop];
  //   },
  // };
  // const proxy2 = new Proxy(target, handler);
  // proxy2.message2 = "kitty";

  // console.log(proxy2, "this is proxy");

  return (
    <>
      <Paragraph color="main_500">khjadhfgjfjghjfdhgj</Paragraph>
      <Paragraph color="error_200">Fatemeh Jan</Paragraph>
    </>
  );
});
