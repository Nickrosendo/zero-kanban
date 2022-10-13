import type { NextPage } from "next";
import styled from "styled-components";

import { BoardsList } from "@root/components";
import { BoardType } from "@root/types";
import { defaultBoards } from "@root/data";

export interface HomeProps {
  cookies?: string;
}

const Main = styled.main`
  background: ${(props) => props.theme.bg};
  padding: 4em;
  overflow: hidden;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Home: NextPage<HomeProps> = () => {
  const myBoards: BoardType[] = defaultBoards;

  return (
    <Main>
      <BoardsList boards={myBoards} />
    </Main>
  );
};

export default Home;
