import styled from "styled-components";
import { MainColors } from "./color";
import { rem } from "./styles/mixins";

type mainKey = keyof typeof MainColors;
type numberKey = keyof typeof MainColors[mainKey];
type colorType = `${mainKey}_${numberKey}`;

interface ParagraphProps {
  size?: number;
  color?: colorType;
  bold?: boolean;
  textAlign?: "center" | "right" | "justify";
}

const getColor = (color: colorType) => {
  const [firstKey, secondKey] = color.split("_");
  return MainColors[firstKey as mainKey][secondKey as numberKey];
};

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ color }) => color && getColor(color)};
  size: ${({ size }) => (size ? rem(size) : rem(14))};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-align: ${({ textAlign }) => textAlign};
`;
