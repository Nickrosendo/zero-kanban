import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  return <StyledButton data-testid="button"> {children} </StyledButton>;
};

const StyledButton = styled.button`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;
