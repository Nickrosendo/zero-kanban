import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
//import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from "react-dnd-touch-backend";
import update from "immutability-helper";

import { BoardType, ColumnType } from "@root/types";
import { Column } from "./column.component";

export interface BoardProps {
  board: BoardType;
}

export const Board: React.FC<BoardProps> = ({ board = {} }) => {
  const [columns, setColumns] = useState<ColumnType[]>(board.columns ?? []);
  const moveColumn = useCallback((dragIndex: number, hoverIndex: number) => {
    setColumns((previousColumns: ColumnType[]) =>
      update(previousColumns, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, previousColumns[dragIndex] as ColumnType],
        ],
      })
    );
  }, []);

  const renderColumn = useCallback((column: ColumnType, index: number) => {
    return (
      <Column
        key={column.id}
        column={column}
        index={index}
        moveColumn={moveColumn}
      />
    );
  }, []);

  return (
    <StyledBoard data-testid="board">
      <h1> {board?.name} </h1>

      <DndProvider backend={TouchBackend}>
        <ColumnsContainer>
          {columns.map((column, i) => renderColumn(column, i))}
        </ColumnsContainer>
      </DndProvider>
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
  overflow: auto;
`;

const ColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
`;
