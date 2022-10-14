import React from "react";
import styled from "styled-components";

import { BoardsListItem } from "./boards-list-item.component";

import { BoardType } from "@root/types";

export interface BoardsListProps {
  boards: BoardType[];
}

export const BoardsList: React.FC<BoardsListProps> = ({ boards = [] }) => {
  return (
    <StyledBoardsList data-testid="boards-list">
      {boards?.map((board: BoardType) => (
        <BoardsListItem key={board.id} board={board} />
      ))}
    </StyledBoardsList>
  );
};

const StyledBoardsList = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.bg};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
