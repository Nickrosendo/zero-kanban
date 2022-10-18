import { BoardType } from "@root/types";

export const defaultBoards: BoardType[] = [
  {
    id: "1",
    name: "My first board",
    columns: [
      {
        id: "backlog",
        name: "Backlog",
        cards: [
          {
            id: "card-1",
            name: "first card",
            status: 1,
            description: "first descriptions",
          },
          {
            id: "card-2",
            name: "second card",
            status: 1,
            description: "second descriptions",
          },
        ],
      },
      {
        id: "todo",
        name: "To do",
        cards: [
          {
            id: "column-2-card-1",
            name: "first card",
            status: 1,
            description: "first descriptions",
          },
        ],
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
  },
];
