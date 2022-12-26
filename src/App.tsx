import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
    const onDragEnd = () => {
        //
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId={"one"}>
                    {magic => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId={"first"} index={0}>
                                {() => <li>One</li>}
                            </Draggable>
                            <Draggable draggableId={"second"} index={1}>
                                {() => <li>Second</li>}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
