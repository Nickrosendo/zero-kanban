import type { NextPage } from "next";
import styled from "styled-components";

import { BoardsList, Logo, Container } from "@root/components";
import { BoardType } from "@root/types";
import { defaultBoards } from "@root/data";

export interface HomeProps {
  cookies?: string;
}

const Board: NextPage<HomeProps> = () => {
  const myBoards: BoardType[] = defaultBoards;

  return (
    <StyledMain>
      <Container>
        <Logo />
        <BoardsList boards={myBoards} />
      </Container>
    </StyledMain>
  );
};

export default Board;

const StyledMain = styled.div`
  background: ${(props) => props.theme.bg};
  padding: 1rem;
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
