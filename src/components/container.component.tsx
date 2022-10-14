import React, { ReactChild } from "react";
import styled from "styled-components";

export interface ContainerProps {
  children?: ReactChild | ReactChild[];
}
export const Container: React.FC<ContainerProps> = ({ children = <> </> }) => {
  return (
    <StyledContainer data-testid="container"> {children} </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
