import { BoardType } from "@root/types";

export const boardData: BoardType = {
  id: "1",
  name: "My first board",
  columns: [
    {
      id: "backlog",
      name: "Backlog",
      cards: [],
    },
    {
      id: "todo",
      name: "To do",
      cards: [],
    },
    {
      id: "doing",
      name: "Doing",
      cards: [],
    },
    {
      id: "testing",
      name: "Testing",
      cards: [],
    },
    {
      id: "done",
      name: "Done",
      cards: [],
    },
  ],
};
