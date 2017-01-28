import tpl from './todo_item.component.html';

class TodoItemController {
    constructor() {
    }
}

const todoItemComponent = {
    controller: TodoItemController,
    controllerAs: 'vm',
    template: tpl
};

export default todoItemComponent;
