import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Logo, Board, BackButton } from "@root/components";
import { BoardType } from "@root/types";
import { defaultBoards } from "@root/data";

export interface HomeProps {
  cookies?: string;
}

const BoardPage: NextPage<HomeProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const myBoard: BoardType =
    defaultBoards.find((board) => board.id === id) || defaultBoards[0];

  return (
    <StyledMain>
      <BackButton to={"/board"} />
      <Logo />
      <Board board={myBoard} />
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
