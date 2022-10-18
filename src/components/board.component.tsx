import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { ColumnType } from "@root/types";
import { Column } from "./column.component";
import { objectId } from "@root/helpers";
import { defaultBoards } from "@root/data";

export interface BoardProps {}

export const Board: React.FC<BoardProps> = () => {
  const board = defaultBoards[0];
  const [columns, setColumns] = useState<ColumnType[]>(board?.columns ?? []);
  const handleAddCard = useCallback(
    (columnIndex: number) => {
      const updatedColumns = [...columns];
      updatedColumns[columnIndex].cards.push({
        id: objectId(),
        name: "empty card",
        description: "empty",
        status: 1,
      });
      setColumns(updatedColumns);
    },
    [columns]
  );

  const handleRemoveCard = useCallback(
    (columnIndex: number, cardIndex: number) => {
      const updatedColumns = [...columns];
      updatedColumns[columnIndex].cards.splice(cardIndex, 1);
      setColumns(updatedColumns);
    },
    [columns]
  );

  const handleEditCard = useCallback(
    (data: any) => {
      const { cardIndex, columnIndex, card } = data;
      const updatedColumns = [...columns];
      updatedColumns[columnIndex].cards[cardIndex] = { ...card };
      setColumns(updatedColumns);
    },
    [columns]
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      )
        return;

      const updatedColumns = [...columns];

      const sourceColumnIndex = updatedColumns.findIndex(
        (column) => column.id === source.droppableId
      );
      const destinationColumnIndex = updatedColumns.findIndex(
        (column) => column.id === destination.droppableId
      );
      if (sourceColumnIndex > -1 && destinationColumnIndex > -1) {
        const item = updatedColumns[sourceColumnIndex].cards[source.index];
        updatedColumns[sourceColumnIndex].cards.splice(source.index, 1);
        updatedColumns[destinationColumnIndex].cards.splice(
          destination.index,
          0,
          item
        );
        setColumns(updatedColumns);
      }
    },
    [columns]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoard data-testid="board">
        <h1> {board?.name} </h1>

        <ColumnsContainer>
          {columns?.map((column, index) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <ColumnContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Column
                    column={column}
                    addCard={handleAddCard}
                    removeCard={handleRemoveCard}
                    columnIndex={index}
                    editCard={handleEditCard}
                  />
                  {provided.placeholder}
                </ColumnContainer>
              )}
            </Droppable>
          ))}
        </ColumnsContainer>
      </StyledBoard>
    </DragDropContext>
  );
};

const StyledBoard = styled.div`
  padding: 1rem 2rem;
  color: ${(props) => props.theme.fg};
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  flex: 1;
  overflow: auto;
`;

const ColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
`;

const ColumnContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const DraggableColumn = styled.div`
  height: 100%;
  flex: 1;
`;
