import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { ColumnType, EditCardData } from "@root/types";
import { Card } from "./card.component";

export interface ColumnProps {
  column: ColumnType;
  addCard: (columnIndex: number) => void;
  editCard: (data: EditCardData) => void;
  removeCard: (columnIndex: number, cardIndex: number) => void;
  columnIndex: number;
}

export const Column: React.FC<ColumnProps> = ({
  column = {},
  addCard = () => null,
  columnIndex = 0,
  removeCard = () => null,
  editCard = () => null,
}) => {
  const handleAddCard = () => {
    addCard(columnIndex);
  };

  return (
    <StyledColumn>
      <ColumnHeader>
        <ColumnName> {column?.name} </ColumnName>
        <AddCardButton onClick={handleAddCard} data-testid="add-card">
          <AiOutlinePlusCircle size={"1.5rem"} />
        </AddCardButton>
      </ColumnHeader>
      <CardsContainer data-testid={`column-${column.id}`}>
        {column?.cards?.map?.((card, cardIndex) => (
          <Draggable draggableId={card.id} index={cardIndex} key={card.id}>
            {(draggableProvider) => (
              <DraggableCard
                {...draggableProvider.draggableProps}
                {...draggableProvider.dragHandleProps}
                ref={draggableProvider.innerRef}
                data-testid="drag-card"
              >
                <Card
                  card={card}
                  remove={removeCard}
                  columnIndex={columnIndex}
                  cardIndex={cardIndex}
                  edit={editCard}
                />
              </DraggableCard>
            )}
          </Draggable>
        ))}
      </CardsContainer>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  color: ${(props) => props.theme.fg};
  height: 100%;
  min-width: 15rem;
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  background: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.fg};
  border-radius: 0.5rem;
  flex: 1;
`;

const DraggableCard = styled.div``;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AddCardButton = styled.button`
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

const ColumnName = styled.p`
  font-family: "Lato";
  font-size: 1.5rem;
`;
