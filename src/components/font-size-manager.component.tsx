import React from "react";
import styled from "styled-components";

export const FontSizeManager = () => {
  return (
    <StyledFontSizeManager data-testid="font-size-manager">
      {" "}
      FontSizeManager{" "}
    </StyledFontSizeManager>
  );
};

const StyledFontSizeManager = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;
