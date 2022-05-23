import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {props.text}
        <Task />
        {<i onClick={()=>{
           props.onSelect(props.id)
         }}>❌</i>}
      </ul>
      
      {/* <div data-cy="tasks-empty" className={styles.empty}> */}
        {/* Show when No Tasks are present */}
      {/* </div> */}
    </>
  );
};

export default Tasks;
