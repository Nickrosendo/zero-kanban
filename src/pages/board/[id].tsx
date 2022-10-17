import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Logo, Board, BackButton } from "@root/components";
import {
  openBoard,
  closeBoard,
  selectBoardState,
} from "@root/store/board-slice";
import { useEffect } from "react";

export interface HomeProps {
  cookies?: string;
}

const BoardPage: NextPage<HomeProps> = () => {
  const { currentBoard, boards } = useSelector(selectBoardState);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setupBoard();
  }, []);

  const setupBoard = () => {
    if (!currentBoard) {
      const { id } = router.query;
      const board = boards.find((b) => b.id === id || boards[0]);
      dispatch(openBoard(board));
    }
  };

  const handleCloseBoard = () => {
    dispatch(closeBoard({}));
  };

  if (!currentBoard) {
    return <p> ...loading </p>;
  }

  return (
    <StyledMain>
      <BackButton to={"/board"} onClick={handleCloseBoard} />
      <Logo />
      <Board board={currentBoard} />
    </StyledMain>
  );
};

export default BoardPage;

const StyledMain = styled.main`
  background: ${(props) => props.theme.bg};
  overflow: hidden;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
