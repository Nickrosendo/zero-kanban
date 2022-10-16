import React from "react";
import styled from "styled-components";

import { ColumnType } from "@root/types";
import { Card } from "./card.component";

export interface ColumnProps {
  column: ColumnType;
  dragRef?: React.ForwardedRef<HTMLDivElement>
}

export const Column: React.FC<ColumnProps> = ({ column = {}, dragRef }) => {
  return (
    <StyledColumn data-testid="column" ref={dragRef}>
      <p> {column?.name} </p>
      <CardsContainer>
        {column?.cards?.map((card) => (
          <Card key={card?.id} card={card} />
        ))}
      </CardsContainer>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  color: ${(props) => props.theme.fg};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  background: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.fg};
  border-radius: 0.5rem;
  flex: 1;
`;
