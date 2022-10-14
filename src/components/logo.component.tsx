import React from "react";
import styled from "styled-components";
import { BsClipboardData } from "react-icons/bs";

export const Logo = () => {
  return (
    <StyledLogo>
      <BsClipboardData data-testid="logo" size={"5rem"} />
      <StyledTitle> ZeroKanban </StyledTitle>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem;
  color: ${(props) => props.theme.fg};
`;
const StyledTitle = styled.p`
  font-size: 2rem;
  font-family: "Lato";
  padding: 0;
  margin: 0;
`;
