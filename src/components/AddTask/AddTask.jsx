import React, { useState } from "react";
import styles from "./addTask.module.css";
import Tasks from "../Tasks/Tasks"

const AddTask = () => {
  
  // NOTE: do not delete `data-cy` key value pair
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

 const listofItems = ()=>{
   setItems((oldItems)=>{
       return [...oldItems, inputList];
   });
   setInputList("")
 };

const deleteItems = (id)=>{
  console.log("deleted")
  setItems((oldItems)=>{
    return oldItems.filter((arrEl, index)=>{
      return index!== id;
   })
  })
}
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={itemEvent} value={inputList} />
      <button data-cy="add-task-button" onClick={listofItems} >Add</button>
      <ul>
        {Items.map((itemvalue, index)=>{
          return<>
           <Tasks key={index} id={index} text={itemvalue} onSelect={deleteItems} />
           
          </>
        })}
      </ul>
    </div>
  );
};

export default AddTask;
