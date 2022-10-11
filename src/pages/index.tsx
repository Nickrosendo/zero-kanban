import type { NextPage } from "next";
import styled from "styled-components";

export interface HomeProps {
  cookies?: string;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.fg};
`;

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
  return (
    <Main>
      <Title> Hello World </Title>
    </Main>
  );
};

export default Home;
