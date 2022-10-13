import { ColumnType } from "./column.type";

export interface BoardType {
  id: string;
  name: string;
  columns: ColumnType[];
}
