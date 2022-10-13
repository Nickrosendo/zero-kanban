import { BoardType } from "@root/types";

import { objectId } from "@root/helpers";

export const defaultBoards: BoardType[] = [
  {
    id: objectId(),
    name: "My first board",
    columns: [
      {
        id: objectId(),
        name: "first column",
        cards: [
          {
            id: objectId(),
            name: "first card",
            status: 1,
            description: "first descriptions",
          },
        ],
      },
    ],
  },
  {
    id: objectId(),
    name: "My second board",
    columns: [
      {
        id: objectId(),
        name: "second column",
        cards: [
          {
            id: objectId(),
            name: "second card",
            status: 1,
            description: "second descriptions",
          },
        ],
      },
    ],
  },
  {
    id: objectId(),
    name: "My third board",
    columns: [
      {
        id: objectId(),
        name: "third column",
        cards: [
          {
            id: objectId(),
            name: "third card",
            status: 1,
            description: "third descriptions",
          },
        ],
      },
    ],
  },
];
