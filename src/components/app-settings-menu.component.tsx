import React from "react";
import styled from "styled-components";

const StyledAppSettingsMenu = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const AppSettingsMenu = () => {
  return (
    <StyledAppSettingsMenu data-testid="app-settings-menu">
      {" "}
      AppSettingsMenu{" "}
    </StyledAppSettingsMenu>
  );
};
