import React from "react";
import styled from "styled-components";

export const Input = () => {
  return <StyledInput data-testid="input" type="text" />;
};

const StyledInput = styled.input`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;
