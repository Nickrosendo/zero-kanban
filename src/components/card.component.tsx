import React from "react";
import styled from "styled-components";

import { CardType } from "@root/types";

export interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card = {} }) => {
  return (
    <StyledCard data-testid="card">
      <p> {card.name} </p>
      <CardContent>
        <span> {card.description} </span>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: 1px solid #fff;
  border-radius: 0.5rem;
  height: auto;
  padding: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  background: #eee;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
