import type { NextPage } from "next";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { BoardsList, Logo, Container } from "@root/components";
import { selectBoardState } from "@root/store/board-slice";

const Board: NextPage = () => {
  const boardsState = useSelector(selectBoardState);
  const { boards } = boardsState;

  return (
    <StyledMain>
      <Container>
        <Logo />
        <BoardsList boards={boards} />
      </Container>
    </StyledMain>
  );
};

export default Board;

const StyledMain = styled.main`
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
