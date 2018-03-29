import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./component/TodoList";
import TodoListModel from "./store/TodoListModel";
import TodoModel from "./store/TodoModel";

const store = new TodoListModel();

console.log(store);
// store.addTodo("Get Coffee");

// store.addTodo("Write simpler code");

// store.todos[0].finished = true;

render(
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  document.getElementById("app")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// pl   aying around in the console
window.store = store;


