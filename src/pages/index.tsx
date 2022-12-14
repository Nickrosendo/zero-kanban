import styled from "styled-components";
import type { NextPage } from "next";

import { Board, Logo } from "@root/components";

const Home: NextPage = () => {
  return (
    <StyledMain>
      <Logo />
      <Board />
    </StyledMain>
  );
};

export default Home;

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
  overflow: auto;
`;
