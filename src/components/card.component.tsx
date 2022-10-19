import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

import { CardType, EditCardData } from "@root/types";

export interface CardProps {
  card: CardType;
  edit: (data: EditCardData) => void;
  remove: (columnIndex: number, cardIndex: number) => void;
  cardIndex: number;
  columnIndex: number;
}

export const Card: React.FC<CardProps> = ({
  card = {},
  edit = () => null,
  remove = () => null,
  columnIndex,
  cardIndex,
}) => {
  const [name, setName] = React.useState<string>(card?.name ?? "");
  const [description, setDescription] = React.useState<string>(
    card?.description ?? ""
  );
  const [editing, setEditing] = React.useState<boolean>(false);

  useEffect(() => {
    handleCommitEdition();
  }, [name, description, editing]);

  const handleCommitEdition = useCallback(() => {
    edit({
      cardIndex,
      columnIndex,
      card: { id: card?.id ?? "", name, description },
    });
  }, [name, description, editing]);

  const toggleEditing = useCallback(() => setEditing(!editing), [editing]);

  const handleKeyPress = useCallback(
    (evt: any) => {
      if (evt.key === "Enter") {
        toggleEditing();
        handleCommitEdition();
      }
    },
    [name, description, editing]
  );

  return (
    <StyledCard data-testid="card">
      {editing ? (
        <>
          <CardInput
            type="text"
            onChange={(evt) => setName(evt?.target?.value)}
            onKeyPress={handleKeyPress}
            value={name}
          />
          <CardContent>
            <CardInput
              type="text"
              onChange={(evt) => setDescription(evt?.target?.value)}
              onKeyPress={handleKeyPress}
              value={description}
            />
          </CardContent>
        </>
      ) : (
        <>
          <p> {name} </p>
          <CardContent>
            <span> {description} </span>
          </CardContent>
        </>
      )}

      <CardActions>
        <IconButton onClick={toggleEditing}>
          {editing ? <AiOutlineCheck /> : <AiFillEdit />}
        </IconButton>
        <IconButton onClick={() => remove(columnIndex, cardIndex)}>
          <AiFillDelete />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

const CardActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconButton = styled.button`
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

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: 1px solid #fff;
  border-radius: 0.5rem;
  height: auto;
  padding: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  background: #ddd;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const CardInput = styled.input`
  border-radius: 8px;
  color: ${(props) => props.theme.fg};
  border: 1px solid ${(props) => props.theme.fg};
  background: transparent;
  outline: 0;
  padding: 0.5rem;
  width: 100%;
`;
