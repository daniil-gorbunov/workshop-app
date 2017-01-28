import tpl from './todo_list.component.html';

class TodoListController {
    constructor() {
    }
}

const todoListComponent = {
    controller: TodoListController,
    controllerAs: 'vm',
    template: tpl
};

export default todoListComponent;
