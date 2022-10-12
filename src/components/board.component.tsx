import React from "react";
import styled from "styled-components";

const StyledBoard = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const Board = () => {
  return <StyledBoard data-testid="board"> Board </StyledBoard>;
};
