import { rem } from "@app/atom/styles/mixins";
import React, { memo } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: ${rem(100)};
`;

export const Layout = memo(({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
});
