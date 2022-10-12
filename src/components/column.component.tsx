import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const Column = () => {
  return <StyledColumn data-testid="column"> Column </StyledColumn>;
};
