import { MainColors } from "./color";
import { rem } from "./styles/mixins";
import styled from "styled-components";

export const InputElement = styled.input`
  padding: 0 ${rem(12)};
  height: ${rem(36)};
  border-radius: 4px;
  font-size: ${rem(14)};
  font-family: inherit;
  border: 1px solid ${MainColors.grey[300]};
  background-color: white;
  color: ${MainColors.grey[500]};
`;
