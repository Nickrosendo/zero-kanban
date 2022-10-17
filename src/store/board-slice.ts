import { createSlice } from "@reduxjs/toolkit";
import { BoardType } from "@root/types";

import { defaultBoards } from "@root/data";

import { HYDRATE } from "next-redux-wrapper";
import { objectId } from "@root/helpers";
import { AppState } from "@root/store";

export interface BoardState {
  boards: BoardType[];
  currentBoard?: BoardType;
}

const initialState: BoardState = {
  boards: defaultBoards,
  currentBoard: undefined,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    deleteBoard(state, action) {
      state.boards = state.boards.filter((b) => b.id != action.payload.id);
    },
    openBoard(state, action) {
      state.currentBoard = action.payload;
    },
    closeBoard(state) {
      state.currentBoard = undefined;
    },
    addCard(state, action) {
      const boardIndex = state.boards.findIndex(
        (b) => b.id === action.payload.boardId
      );
      if (boardIndex > -1) {
        const columIndex = state.boards[boardIndex].columns.findIndex(
          (c) => c.id === action.payload.columnId
        );
        if (columIndex > -1) {
          const updatedBoards = [...state.boards];

          const updatedColumns = [...updatedBoards[boardIndex].columns];
          updatedColumns[columIndex].cards.push({
            id: objectId(),
            name: "my empty card",
            description: "my empty description",
          });
          updatedBoards[boardIndex].columns = updatedColumns;
          state.boards = updatedBoards;
          state.currentBoard = { ...updatedBoards[boardIndex] };
        }
      }
    },
    deleteCard(state, action) {
      const boardIndex = state.boards.findIndex(
        (b) => b.id === action.payload.boardId
      );
      if (boardIndex > -1) {
        const columIndex = state.boards[boardIndex].columns.findIndex(
          (c) => c.id === action.payload.columnId
        );
        if (columIndex > -1) {
          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex].columns[columIndex].cards = updatedBoards[
            boardIndex
          ].columns[columIndex].cards.filter(
            (c) => c.id != action.payload.cardId
          );
          state.boards = updatedBoards;
          state.currentBoard = updatedBoards[boardIndex];
        }
      }
    },
    addColumn(state, action) {
      const boardIndex = state.boards.findIndex(
        (b) => b.id === action.payload.boardId
      );
      if (boardIndex > -1) {
        const updatedBoards = [...state.boards];

        updatedBoards[boardIndex].columns.push({
          id: objectId(),
          name: "my empty empty",
          cards: [],
        });
        state.boards = updatedBoards;
        state.currentBoard = updatedBoards[boardIndex];
      }
    },
    deleteColumn(state, action) {
      const boardIndex = state.boards.findIndex(
        (b) => b.id === action.payload.boardId
      );
      if (boardIndex > -1) {
        const updatedBoards = [...state.boards];

        updatedBoards[boardIndex].columns = updatedBoards[
          boardIndex
        ].columns.filter((c) => c.id != action.payload.columnId);
        state.boards = updatedBoards;
        state.currentBoard = updatedBoards[boardIndex];
      }
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.board,
        };
      },
    },
  },
});

export const {
  addBoard,
  deleteBoard,
  openBoard,
  closeBoard,
  addCard,
  deleteCard,
  addColumn,
  deleteColumn,
} = boardSlice.actions;

export const selectBoardState = (state: AppState) => state.board;

export default boardSlice.reducer;
