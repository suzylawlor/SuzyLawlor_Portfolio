//The TodoList component is responsible for rendering the list of to-do items. 
//It receives the filteredTodos, setTodos, and todos props. 
//It maps over the filteredTodos array and renders the Todo component for each to-do item, passing the necessary props.


import Todo from "../To-do/Todo";

// Define a functional component named TodoList that takes in props: todos, setTodos, and filteredTodos
const TodoList = ({ todos, setTodos, filteredTodos }) => {

  // Render a div element with the class name "todo-container"
  return (
    <div className="todo-container">
      {/* Render an unordered list element with the class name "todo-list" */}
      <ul className="todo-list">
        {/* Check if filteredTodos exists and map over each todo object */}
        {filteredTodos &&
          filteredTodos.map((todo) => (
            // Render the Todo component for each todo object
            <Todo
              // Pass the setTodos prop to the Todo component to allow modifying the todos array
              setTodos={setTodos}
              // Pass the todos prop to the Todo component to provide access to the current todos array
              todos={todos}
              // Set a unique key for the Todo component based on the todo's id
              key={todo.id}
              // Pass the todo object as a prop to the Todo component to provide access to individual todo properties
              todo={todo}
              // Pass the todo's text as a prop to the Todo component to display the todo text
              text={todo.text}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
