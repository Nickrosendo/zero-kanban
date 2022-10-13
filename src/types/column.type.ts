import { CardType } from "./card.type";

export interface ColumnType {
  id: string;
  name: string;
  cards: CardType[];
}
