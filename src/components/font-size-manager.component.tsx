import React from "react";
import styled from "styled-components";

const StyledFontSizeManager = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const FontSizeManager = () => {
  return (
    <StyledFontSizeManager data-testid="font-size-manager">
      {" "}
      FontSizeManager{" "}
    </StyledFontSizeManager>
  );
};
