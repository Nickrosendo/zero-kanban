import React from "react";
import styled from "styled-components";

import { BoardType } from "@root/types";
import { Column } from "./column.component";

const StyledBoard = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board = {} }) => {
  return (
    <StyledBoard data-testid="board">
      <h1> {board?.name} </h1>

      {board?.columns?.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </StyledBoard>
  );
};
