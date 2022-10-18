import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { MdOutlineFilterList } from "react-icons/md";

import { ColumnType } from "@root/types";
import { Column } from "./column.component";
import { objectId } from "@root/helpers";
import { defaultBoards } from "@root/data";

export interface BoardProps {}

export interface ColumnFilter {
  id: string;
  name: string;
  value: boolean;
}

export const Board: React.FC<BoardProps> = () => {
  const board = defaultBoards[0];
  const [columns, setColumns] = useState<ColumnType[]>(board?.columns ?? []);

  const [filteredColumns, setFilteredColumns] = useState<ColumnType[]>(columns);
  const [isFilterDropdownOpen, setFilterDropdownOpen] =
    useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [filters, setFilters] = useState<any>({
    backlog: { id: "backlog", name: "Backlog", value: true },
    todo: { id: "todo", name: "To do", value: true },
    doing: { id: "doing", name: "Doing", value: true },
    testing: { id: "testing", name: "Testing", value: true },
    done: { id: "done", name: "Done", value: true },
  });

  useEffect(() => {
    console.log("useEffect: ", filters);
    const enabledFilters = Object.values(filters)
      .filter((f) => f.value)
      .map((f) => f.id);
    console.log("enabledFilters: ", enabledFilters);
    const selectedColumns = columns.filter((c) =>
      enabledFilters.includes(c.id)
    );
    setFilteredColumns(selectedColumns);
    setSearchText("");
  }, [filters]);

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

  const toggleFilterDropdown = useCallback(() => {
    setFilterDropdownOpen(!isFilterDropdownOpen);
  }, [isFilterDropdownOpen]);

  const handleSearchCards = useCallback(
    (evt: any) => {
      const { value } = evt.target;
      if (value) {
        setSearchText(value);
        const updatedColumns = [...columns].map((c) => ({
          ...c,
          cards: c.cards.filter((cd) => cd.name.indexOf(value) > -1),
        }));
        setFilteredColumns(updatedColumns);
      } else {
        setSearchText("");
        setFilteredColumns(columns);
      }
    },
    [searchText, columns]
  );

  const handleChangeFilter = useCallback(
    (evt: any) => {
      const { checked, id } = evt.target;
      const updatedFilters = { ...filters };
      updatedFilters[id] = { ...updatedFilters[id], value: checked };
      setFilters(updatedFilters);
    },
    [columns, filteredColumns]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoard data-testid="board">
        <h1> {board?.name} </h1>

        <BoardActionContainer>
          <IconButton onClick={toggleFilterDropdown}>
            <MdOutlineFilterList size={"1.5rem"} />
          </IconButton>
          {isFilterDropdownOpen && (
            <FilterDropdownContainer>
              <p> Filter which columns will show </p>
              <FilterListContainer>
                {Object.values(filters)?.map((f) => (
                  <FilterItemContainer key={f.id}>
                    <CheckboxInput
                      type="checkbox"
                      checked={f.value}
                      name={f.name}
                      id={f.id}
                      onChange={handleChangeFilter}
                    />
                    <Label htmlFor="column">{f.name}</Label>
                  </FilterItemContainer>
                ))}
              </FilterListContainer>
            </FilterDropdownContainer>
          )}

          <SearchCardsInput
            type="text"
            placeholder="Search cards by name"
            onChange={handleSearchCards}
            value={searchText}
          />
        </BoardActionContainer>

        <ColumnsContainer>
          {filteredColumns?.map((column, index) => (
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

export const BoardActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
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

export const SearchCardsInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.fg};
  color: ${(props) => props.theme.fg};
  background: transparent;
  outline: 0;
  padding: 0.5rem;
  width: 100%;
`;

export const FilterDropdownContainer = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 0;
  width: 20rem;
  height: 20rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.bg};
  padding: 1rem;
`;

export const CheckboxInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.fg};
  color: ${(props) => props.theme.fg};
  background: transparent;
  outline: 0;
  padding: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

export const FilterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FilterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 1rem;
`;
