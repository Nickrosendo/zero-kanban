import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

export const Textarea = () => {
  return <StyledTextarea data-testid="textarea" />;
};