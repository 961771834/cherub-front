import { observable, computed } from 'mobx';


export default class TodoList  {
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}