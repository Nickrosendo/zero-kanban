import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { BoardType } from "@root/types";
import { Column } from "./column.component";

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board = {} }) => {
  const [columns, setColumns] = useState<ColumnType[]>(board.columns ?? []);

  const reorder = useCallback((list: ColumnType[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }, []);
  const onDragEnd = useCallback((result: any) => {
    // dropped outside the list
    if (!result.destination) return;
    const items = reorder(columns, result.source.index, result.destination.index)
    setColumns(items);
  }, []);

  return (
    <StyledBoard data-testid="board">
      <h1> {board?.name} </h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"droppable"}>
          {(provided) =>
          (<ColumnsContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {columns?.map((column, index) => (
              <Draggable key={column.id} draggableId={column.id} index={index}>
                {(provided) => (<Column dragRef={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} column={column} />)}
              </Draggable>
            ))}
          </ColumnsContainer>)}
        </Droppable>


      </DragDropContext>
    </StyledBoard>
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
