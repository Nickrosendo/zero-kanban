import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { BoardType } from "@root/types";

export interface BoardsListItemProps {
  board: BoardType;
}

export const BoardsListItem: React.FC<BoardsListItemProps> = ({
  board = {},
}) => {
  return (
    <Link href={`/board/${board?.id}`}>
      <StyledBoardsListItem data-testid="boards-list-item">
        <ItemTitle> {board?.name} </ItemTitle>
        <ActionsContainer>
          <IconButton>
            <AiFillEdit />
          </IconButton>

          <IconButton>
            <AiFillDelete />
          </IconButton>
        </ActionsContainer>
      </StyledBoardsListItem>
    </Link>
  );
};

const StyledBoardsListItem = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.fg};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #eee;
    opacity: 0.8;
  }
`;
const ItemTitle = styled.p`
  font-family: "Lato";
  font-size: 1rem;
`;
const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

const IconButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  padding: 0.5rem;
  border-radius: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fg} !important;
  cursor: pointer;

  &:hover {
    background: #ccc;
    opacity: 0.8;
  }
`;
