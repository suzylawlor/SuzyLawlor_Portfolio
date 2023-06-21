//The TodoPage component serves as the main entry point for the to-do list application. 
//It initialises the state variables (inputText, todos, status, and filteredTodos) using the useState hook. 
//It has functions for handling the input text, submitting new to-do items, changing the filter status, and saving/retrieving to-do list data from local storage using the useEffect hook.



// import the necessary dependencies and components for the TodoApp component
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Form from "../To-do/Form";
import TodoList from "../To-do/TodoList";

// define the todoApp component function and set up the initial state using the useState hook
function TodoApp() {
  // Declare and initialise state variable 'inputText' as an empty string
  // inputText will hold the current value of the input text in the to-do list app
  // setInputText is a function that allows the update the value of inputText
  const [inputText, setInputText] = useState("");

  // Declare and initialize state variable 'todos' as an array of two todo objects
  // setTodos is a function that allows the update the value of inputText
  // First to-do object has the properties text, completed set to true, and id value of 1
  // Second to-do object has the properties text, completed set to false, and id of value of 2
  const [todos, setTodos] = useState([
    { text: "Take your protein pills", completed: true, id: 1 },
    { text: "Put your helmet on", completed: false, id: 2 },
  ]);

  // Declare and initialize state variable 'status' as the string "all"
  // The status variable will hold the current filter status of the to-do list
  // setStatus function allows update of the value of status
  // initialise status state variable with the initial value of "all"
  // By default, to-do list will display all the to-do items without any filtering applied
  const [status, setStatus] = useState("all");

  // Declare and initialize state variable 'filteredTodos' as an empty array
  // initially the filteredTodos array is empty, no filtering has been applied yet
  // setFilteredTodos function allows update of the value of filteredTodos
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect hook takes two arguments: a callback function and a dependency array
  // useEffect hook to execute the getLocalTodos function when the component is mounted
  // Empty dependency array to ensure getLocalTodos function is called only once after component is mounted
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect hook used to execute two functions: filterHandler() and saveLocalTodos(), when dependencies (todos and status) change
  // When there is a change in to-do list (todos) or filter status (status), filterHandler and saveLocalTodos functions will be called
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // filterHandler function filters the to-do items based on the current status value
  // switch statement checks value of status
  // uses setFilteredTodos function to update the filteredTodos state variable
  // filters the todos array using the filter method, keeping to-do items where todo.completed is true/false
  // If not completed/uncompleted the status is "all", set filteredTodos to the original todos array without any filtering
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // saveLocalTodos function is defined and is responsible for saving the todos array to the browser's local storage
  // The key is set as "todos", and the value is the stringified version of the todos array
  // todos array saved to the local storage with the key "todos", ensuring to-do list data persists even if the page is refreshed or closed
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Check if "todos" key in local storage is null
  // If it is null, initialise local storage with an empty array as the default value for todos
  // If it is not null, retrieve the JSON string representation of todos from local storage
  // Update the todos state variable with the retrieved array of to-do items
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo-body">
      <Head>
        <title>Major Tom's Todo List</title>
      </Head>
      <div className="background-container">
        <img
          className="todo-img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        ></img>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <header>
        <h1>Major Tom's To-Do List</h1>
      </header>

      {/* Passes the inputText state variable as a prop to the Form component */}
      {/* Passes the todos state variable as a prop to the Form component */}
      {/* Passes the setTodos function as a prop to the Form component */}
      {/* Passes the setInputText function as a prop to the Form component */}
      {/* Passes the setStatus function as a prop to the Form component */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      {/* Passes the filteredTodos state variable as a prop to the TodoList component */}
      {/* Passes the setTodos function as a prop to the TodoList component */}
      {/* Passes the todos state variable as a prop to the TodoList component */}
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default TodoApp;
