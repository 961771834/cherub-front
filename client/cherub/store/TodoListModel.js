import { observable, computed, action } from "mobx";

import TodoModel from './TodoModel';

export default class TodoListModel {
    @observable todos = [];

    constructor(){
        console.log(this.todos)
    }
    @computed get unfinishedTodoCount(){
        console.log(this);
        return this.todos.filter(todo => !todo.finished).length
    }

    @action
    addTodo=(title)=>{
        // console.log(this.todos);
        this.todos.push(new TodoModel(title));
    }
}