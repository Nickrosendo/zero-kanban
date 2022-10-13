import React from "react";
import styled from "styled-components";

import { CardType } from "@root/types";

const StyledCard = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card = {} }) => {
  return (
    <StyledCard data-testid="card">
      <p> {card.name} </p>
      <span> {card.description} </span>
      <span> {card.status} </span>
    </StyledCard>
  );
};
