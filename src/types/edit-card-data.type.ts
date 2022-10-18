import { CardType } from "./card.type";

export interface EditCardData {
  cardIndex: number;
  columnIndex: number;
  card: CardType;
}
