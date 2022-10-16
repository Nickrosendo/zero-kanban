import type { NextPage } from "next";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export interface HomeProps {
  cookies?: string;
}

const Home: NextPage<HomeProps> = () => {
  const [items, setItems] = useState([
    { id: "1", title: "foo 1" },
    { id: "2", title: "foo 2" },
  ]);
  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result;

    console.log("destination: ", destination);
    console.log("source: ", source);

    const item = items[source.index];
    const virtualItems = [...items];
    virtualItems.splice(source.index, 1);
    virtualItems.splice(destination.index, 0, item);
    setItems(virtualItems);
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div style={{ height: "300px", width: "300px" }}>
        <Droppable droppableId={"foo"}>
          {(provider, snapshot) => (
            <div
              ref={provider.innerRef}
              {...provider.droppableProps}
              sytle={{ height: "100%", width: "100px" }}
            >
              {items.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      ref={draggableProvided.innerRef}
                      style={{
                        marginTop: "1rem",
                        height: "100px",
                        width: "100%",
                        background: "red",
                      }}
                    >
                      {" "}
                      {item.title}
                    </div>
                  )}
                </Draggable>
              ))}

              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Home;
