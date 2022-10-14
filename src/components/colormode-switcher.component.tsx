import React from "react";
import styled from "styled-components";

export const ColormodeSwitcher = () => {
  return (
    <StyledColormodeSwitcher data-testid="color-mode-switcher">
      {" "}
      ColormodeSwitcher{" "}
    </StyledColormodeSwitcher>
  );
};

const StyledColormodeSwitcher = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;
