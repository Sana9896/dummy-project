import React, { useState } from 'react';
import '../component/TodoList.css';

let randomIDs = [
  234, 56467, 7583523, 345236567, 4683612345, 34687457834, 51245234562367,
  3678357246, 23451, 2452346, 573467356572451, 245, 3456345, 6245, 2345, 256,
  231, 45, 1345, 135, 546724,
];
// {
//   id: "",
//   task: "",
// },
function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const addNewTask = () => {
    setTodoList([
      ...todoList,
      {
        id: randomIDs[0],
        task: '',
        isEditable: true,
        isCompleted: false,
      },
    ]);
    randomIDs.splice(0, 1);
  };
  const handleInput = (value, index) => {
    const tempList = [...todoList];
    const objList = { ...tempList[index] };
    objList.task = value;
    tempList[index] = objList;
    setTodoList(tempList);
  };
  const handleDelete = (id, index) => {
    const tempTodo = [...todoList];
    const objTodo = { ...tempTodo[index] };
    const removeTodo = tempTodo.filter((filterItem) => {
      return objTodo.id !== filterItem.id;
    });
    setTodoList(removeTodo);
  };
  const handleSave = (item, index) => {
    const save = [...todoList];
    const objSave = { ...save[index] };
    if (objSave.task) {
      objSave.isEditable = false;
      save[index] = objSave;
    }
    setTodoList(save);
  };
  const handleEdit = (item, index) => {
    const edit = [...todoList];
    const objEdit = { ...edit[index] };
    objEdit.isEditable = true;
    edit[index] = objEdit;
    setTodoList(edit);
  };
  const handleClear = (index) => {
    const clear = [...todoList];
    const objClear = { ...clear[index] };
    objClear.task = '';
    clear[index] = objClear;
    setTodoList(clear);
  };
  const handleCompleted = (index) => {
    const comp = [...todoList];
    const objComp = { ...comp[index] };
    objComp.isCompleted = true;
    comp[index] = objComp;
    setTodoList(comp);
  };
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList using array of objects</h1>
        <table>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {todoList.map((item, index) => {
              let { id, task, isEditable, isCompleted } = item;
              return (
                <tr key={id}>
                  {isEditable ? (
                    <td>
                      <input
                        type="text"
                        value={task}
                        onChange={(e) => {
                          handleInput(e.target.value, index);
                        }}
                      ></input>
                    </td>
                  ) : (
                    <td>
                      <span
                        className={isCompleted ? 'taskDone' : ''}
                        onClick={() => {
                          handleCompleted(index);
                        }}
                      >
                        {task}
                      </span>
                    </td>
                  )}
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(id, index);
                      }}
                    >
                      Delete
                    </button>
                    {!task || !!isEditable ? (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          handleSave(item, index);
                        }}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          handleEdit(item, index);
                        }}
                      >
                        Edit
                      </button>
                    )}
                    {task && isEditable && (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          handleClear(index);
                        }}
                      >
                        Clear
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-warning btn-edit" onClick={addNewTask}>
          Add todo
        </button>
      </div>
    </div>
    <div class="main-card card">
        <div class="content">
          <div class="front">
            Front
          </div>
          <div class="back">
            Welcome!
          </div>
        </div>
      </div>
    
</>
  );
}
export default TodoList;
