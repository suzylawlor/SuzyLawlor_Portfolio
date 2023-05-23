import React from "react";

// Defining a functional component named Todo that receives props as an object
const Todo = ({ text, todo, todos, setTodos }) => {
  // Declaring a deleteHandler function
  const deleteHandler = () => {
    // Updates the todos state by filtering out the todo with a different id
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Declaring a completeHandler function
  const completeHandler = () => {
    // Updates the todos state by mapping over the todos array
    setTodos(
      todos.map((item) => {
        // Checks if the current item's id matches the todo's id
        if (item.id === todo.id) {
          // Returns a new object with the same properties as the item
          // but with the completed property toggled
          return {
            ...item,
            completed: !item.completed,
          };
        }
        // Returns the item unchanged if the id doesn't match
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* Rendering an li element with dynamic class name based on todo's completed status */}
      <li className={`todo-item ${todo && todo.completed ? "completed" : ""}`}>
        {/* Rendering the text prop */}
        {text}
      </li>
      {/* Rendering a button with onClick event handler set to completeHandler */}
      <button onClick={completeHandler} className="complete-btn">
        {/* Rendering an icon for check */}
        <i className="fas fa-check"></i>
      </button>
      {/* Rendering a button with onClick event handler set to deleteHandler */}
      <button onClick={deleteHandler} className="trash-btn">
        {/* Rendering an icon for trash */}
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
