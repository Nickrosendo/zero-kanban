import React from "react";
import styled from "styled-components";

import { BoardType } from "@root/types";
import { Column } from "./column.component";

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board = {} }) => {
  return (
    <StyledBoard data-testid="board">
      <h1> {board?.name} </h1>

      <ColumnsContainer>
        {board?.columns?.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </ColumnsContainer>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  padding: 1rem 2rem;
  color: ${(props) => props.theme.fg};
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  flex: 1;
`;

const ColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
`;
