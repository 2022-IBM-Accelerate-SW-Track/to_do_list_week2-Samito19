import React from "react";
import "../component/todos.css";
import { Card, CardContent, Checkbox, Grid } from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI

const Todos = (props) => {
  const handleDelete = (id) => {
    props.deleteTodo(id);
  };
  const todoList = props.todos.length ? (
    props.todos.map((todo) => {
      return todo.checked ? null : (
        <Grid key={todo.id}>
          <Card style={{ margin: "3vh" }}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
            <CardContent className="task-card-content">
              <Checkbox
                style={{ marginLeft: "-1.5vh", marginRight: "2vh" }}
                color="success"
                checked={todo.checked}
                onClick={() => {
                  handleDelete(todo.id);
                }}
              />
              <span
                style={{
                  fontWeight: "500",
                  marginRight: "auto",
                  fontSize: "20",
                  whiteSpace: "nowrap",
                }}
              >
                {todo.content}
              </span>
              <span style={{ fontSize: "20" }}>{todo.date}</span>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
