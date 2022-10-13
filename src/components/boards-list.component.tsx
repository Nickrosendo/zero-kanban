import React from "react";
import styled from "styled-components";

import { BoardType } from "@root/types";
import { Board } from "./board.component";

const StyledBoardsList = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export interface BoardsListProps {
  boards: BoardType[];
}

export const BoardsList: React.FC<BoardsListProps> = ({ boards = [] }) => {
  return (
    <StyledBoardsList data-testid="boards-list">
      {boards?.map((board: BoardType) => (
        <Board key={board.id} board={board} />
      ))}
    </StyledBoardsList>
  );
};
