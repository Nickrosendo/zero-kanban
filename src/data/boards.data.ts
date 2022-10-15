import { BoardType } from "@root/types";

import { objectId } from "@root/helpers";

export const defaultBoards: BoardType[] = [
  {
    id: objectId(),
    name: "My first board",
    columns: [
      {
        id: objectId(),
        name: "Backlog",
        cards: [
          {
            id: objectId(),
            name: "first card",
            status: 1,
            description: "first descriptions",
          },
        ],
      },
      {
        id: objectId(),
        name: "To do",
        cards: [],
      },
      {
        id: objectId(),
        name: "Doing",
        cards: [],
      },
      {
        id: objectId(),
        name: "Testing",
        cards: [],
      },
      {
        id: objectId(),
        name: "Done",
        cards: [],
      },
    ],
  },
];
