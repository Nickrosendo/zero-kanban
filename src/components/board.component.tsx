import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import produce from "immer";

import { BoardType, ColumnType } from "@root/types";
import { Column } from "./column.component";

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board }) => {
  const [columns, setColumns] = useState<ColumnType[]>(board?.columns ?? []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      )
        return;

      setColumns(
        produce((draft) => {
          const sourceColumn = draft.find(
            (column) => column.id === source.droppableId
          );
          const destinationColumn = draft.find(
            (column) => column.id === destination.droppableId
          );
          const item = sourceColumn?.cards?.[source.index];

          sourceColumn?.cards?.splice?.(source.index, 1);
          if (item)
            destinationColumn?.cards?.splice(destination.index, 0, item);
        })
      );
    },
    [columns]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoard data-testid="board">
        <h1> {board?.name} </h1>

        <ColumnsContainer>
          {columns?.map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <ColumnContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Column column={column} />
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
