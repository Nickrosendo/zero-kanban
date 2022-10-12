import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const Card = () => {
  return <StyledCard data-testid="card"> Card </StyledCard>;
};
