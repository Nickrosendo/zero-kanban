import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { BoardType } from "@root/types";
import { Column } from "./column.component";

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board }) => {
  const [columns, setColumns] = useState<ColumnType[]>(board.columns ?? []);

  const reorder = useCallback(
    (list: ColumnType[], startIndex: number, endIndex: number) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      console.log("removed: ", removed);
      result.splice(endIndex, 0, removed);

      return result;
    },
    []
  );

  const onDragEnd = useCallback((result: any) => {
    console.log("result: ", result);
    // dropped outside the list
    if (!result.destination) return;
    const items = reorder(
      columns,
      result.source.index,
      result.destination.index
    );
    console.log("items: ", items);
    setColumns(items);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoard data-testid="board">
        <h1> {board?.name} </h1>

        <ColumnsContainer>
          {columns?.map((column, index) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided, snapshot) => (
                <ColumnContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Draggable
                    draggableId={column.id}
                    index={index}
                    key={column.id}
                  >
                    {(draggableProvider, draggableSnapshot) => (
                      <DraggableColumn
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                        ref={draggableProvider.innerRef}
                      >
                        <Column column={column} />
                      </DraggableColumn>
                    )}
                  </Draggable>
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
