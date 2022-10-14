import React from "react";
import styled from "styled-components";

import { ColumnType } from "@root/types";
import { Card } from "./card.component";

export interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column = {} }) => {
  return (
    <StyledColumn data-testid="column">
      <p> {column?.name} </p>
      {column?.cards?.map((card) => (
        <Card key={card?.id} card={card} />
      ))}
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;
