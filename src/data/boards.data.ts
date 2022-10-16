import { BoardType } from "@root/types";

export const defaultBoards: BoardType[] = [
  {
    id: "1",
    name: "My first board",
    columns: [
      {
        id: "column-1",
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
        id: "column-2",
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
        id: "column-3",
        name: "Doing",
        cards: [],
      },
      {
        id: "column-4",
        name: "Testing",
        cards: [],
      },
      {
        id: "column-5",
        name: "Done",
        cards: [],
      },
    ],
  },
];
