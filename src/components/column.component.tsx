import React, { useCallback } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { ColumnType } from "@root/types";
import { Card } from "./card.component";

import { addCard, selectBoardState } from "@root/store/board-slice";

export interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const { currentBoard } = useSelector(selectBoardState);
  const dispatch = useDispatch();

  const handleAddCard = useCallback(() => {
    dispatch(addCard({ boardId: currentBoard?.id, columnId: column.id }));
  }, []);

  return (
    <StyledColumn data-testid="column">
      <ColumnHeader>
        <ColumnName> {column?.name} </ColumnName>
        <AddCardButton onClick={handleAddCard}>
          <AiOutlinePlusCircle size={"1.5rem"} />
        </AddCardButton>
      </ColumnHeader>
      <CardsContainer>
        {column?.cards.map((card, index) => (
          <Draggable draggableId={card.id} index={index} key={card.id}>
            {(draggableProvider) => (
              <DraggableCard
                {...draggableProvider.draggableProps}
                {...draggableProvider.dragHandleProps}
                ref={draggableProvider.innerRef}
              >
                <Card card={card} />
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
