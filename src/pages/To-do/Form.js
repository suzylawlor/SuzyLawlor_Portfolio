import React from "react";

// Define a functional component named "Form" that accepts props: setInputText, todos, setTodos, inputText, and setStatus
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Define a function named "inputTextHandler" that takes an event object as a parameter
  const inputTextHandler = (e) => {
    // Update the value of "inputText" using the "setInputText" function with the value from the input element
    setInputText(e.target.value);
  };

  // Define a function named "submitTodoHandler" that takes an event object as a parameter
  const submitTodoHandler = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Add a new todo object to the "todos" array using the "setTodos" function
    // The new todo has a text property with the value of "inputText",
    // a completed property set to false,
    // and an id property assigned a random number between 0 and 1000

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    // Reset the "inputText" value to an empty string
    setInputText("");
  };

  // Define a function named "statusHandler" that takes an event object as a parameter
  const statusHandler = (e) => {
    // Update the value of "status" using the "setStatus" function with the selected value from the select element
    setStatus(e.target.value);
  };
  return (
    <form>
      {/* Render an input element */}
      <input
        // Set the value of the input element to the value of "inputText" variable
        value={inputText}
        // Attach an event listener to the input element to handle text changes and call "inputTextHandler" function
        onChange={inputTextHandler}
        // Set the type of the input element to "text"
        type="text"
        
      />
      {/* Render a button element */}
      <button
        // Attach an event listener to the button element to handle click events and call "submitTodoHandler" function
        onClick={submitTodoHandler}
        // Set the background color of the button element to "white"
        style={{ backgroundColor: "white" }}
       
        // Set the type of the button element to "submit"
        type="submit"
      >
        {/* Render an icon element */}
        <i className="fas fa-plus-square"></i>
      </button>
      {/* Render a div element */}
      <div className="select">
        {/* Render a select element */}
        <select
          // Attach an event listener to the select element to handle changes and call "statusHandler" function
          onChange={statusHandler}
          // Set the name attribute of the select element to "todos"
          name="todos"
          
        >
          {/* Render multiple option elements */}
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
