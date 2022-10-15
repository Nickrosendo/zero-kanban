import type { Identifier, XYCoord } from "dnd-core";
import type { FC } from "react";

import { useRef } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";

import { ColumnType } from "@root/types";
import { Card } from "./card.component";

export interface ColumnProps {
  column: ColumnType;
  index: number;
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Column: FC<ColumnProps> = ({
  column = {},
  index = 0,
  moveColumn = () => null,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "Column",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;

      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "Column",
    item: () => {
      return { id: column.id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <StyledColumn
      data-testid="column"
      opacity={opacity}
      ref={ref}
      data-handler-id={handlerId}
    >
      <p> {column?.name} </p>
      <CardsContainer>
        {column?.cards?.map((card) => (
          <Card key={card?.id} card={card} />
        ))}
      </CardsContainer>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  color: ${(props) => props.theme.fg};
  min-width: 15rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => props.opacity};
`;

const CardsContainer = styled.div`
  background: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.fg};
  border-radius: 0.5rem;
  flex: 1;
`;
