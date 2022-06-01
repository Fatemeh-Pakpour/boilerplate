import React, { FC, memo } from "react";
import { InputElement } from "./input-element";

interface InputProps {
  _value: any;
}

export const Input: FC<InputProps> = memo(({ _value }) => {
  console.log(_value);

  return <InputElement />;
});
