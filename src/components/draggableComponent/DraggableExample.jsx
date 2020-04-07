import React from "react";
import Draggablecolumns from "./DraggableLists";
import { uuidv4 } from "../../utils/helpers";
import { GlobalContext } from "../../context-providers/GlobalContextProvider";

const DraggableExample = () => {
  const { tasksFromBackend } = React.useContext(GlobalContext);

  debugger;
  console.log(tasksFromBackend);

  const columnsFromBackend = {
    [uuidv4()]: {
      name: "Requested",
      items: tasksFromBackend, //TODO...look component structura and figure where to insert this DragList comp
    },
    [uuidv4()]: {
      name: "Done",
      items: [],
    },
    //uncomment to add more columns
    // [uuidv4()]: {
    //   name: "To do",
    //   items: []
    // },
    // [uuidv4()]: {
    //   name: "In Progress",
    //   items: []
    // }
  };
  debugger;

  return (
    <div>
      <Draggablecolumns {...columnsFromBackend} />
    </div>
  );
};

export default DraggableExample;

// console.log(tasksFromBackend); conclusion ... need to addchildren to Draglisr comp...DragListItems and render each
