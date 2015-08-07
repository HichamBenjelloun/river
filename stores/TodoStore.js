
import GroupStore from '../core/stores/GroupStore';
import TodoConstants from '../constants/TodoConstants';
import Todo from '../models/Todo';

import TodoSource from '../sources/TodoSource';

let Actions = TodoConstants;

class TodoStore extends GroupStore {

    constructor(source) {
        super(source, Todo);
        this._errors = {};
    }

    handle(payload) {
        let action = payload.action;

        switch(action.actionType) {
            case Actions.TODO_RECEIVE_DATA:
                this.fetch(action.data);
                this.setIsLoading(false);
                this.emitChange();
                break;
            case Actions.TODO_CREATE:
                this.create(action.text);
                this.emitChange();
                break;
            case Actions.TODO_DESTROY:
                this.destroy(action.id);
                this.emitChange();
                break;
            case Actions.TODO_TOGGLE:
                this.toggle(action.id);
                this.emitChange();
                break;
            default:
            // No-op.
        }
    }

    getErrors() {
        return this._errors;
    }

    setErrors(errors) {
        this._errors = errors;
    }

    create(text) {
        let id = Date.now();
        let todo = new Todo({
            id: id,
            text: text,
            done: false
        });

        if(!todo.hasErrors()) {
            this.addItem(todo);
            this.setErrors({});
        } else {
            this.setErrors(todo.getErrors());
        }
    }

    destroy(id) {
        this.removeItem(id);
    }

    toggle(id) {
        let todo = this.getItem(id);
        todo.setValue('done', !todo.getValue('done'));
    }
}

export default new TodoStore(TodoSource);