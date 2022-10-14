import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

export interface BackButtonProps {
  to: string;
}
export const BackButton: React.FC<BackButtonProps> = ({ to = "/" }) => {
  return (
    <Link href={to}>
      <IconButton>
        <AiOutlineLeft size={"1.5rem"} />
      </IconButton>
    </Link>
  );
};

const IconButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: auto;
  height: auto;
  border: none;
  padding: 0.5rem;
  border-radius: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fg} !important;
  cursor: pointer;

  &:hover {
    background: #ccc;
    opacity: 0.8;
  }
`;
