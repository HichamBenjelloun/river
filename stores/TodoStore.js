
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

    /**
     * Modifie son état interne en fonction d'une action donnée,
     * et émet éventuellement un événement notifiant un changement de son état interne.
     * @param payload
     */
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
            // Rien à faire ici.
        }
    }

    /**
     * Renvoie l'ensemble des erreurs associées à la création d'un item.
     *
     * @returns {*}
     */
    getErrors() {
        return this._errors;
    }

    /**
     * Met à jour les erreurs associées à une entrée invalide.
     *
     * @param errors
     */
    setErrors(errors) {
        this._errors = errors;
    }

    /**
     * Crée un nouvel item à partir du texte `text`
     * @param text
     *
     */
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

    /**
     * Supprime l'item d'identifiant `id`
     * @param id
     */
    destroy(id) {
        this.removeItem(id);
    }

    /**
     * Inverse l'état `done` de l'item d'identifiant `id`
     * @param id
     */
    toggle(id) {
        let todo = this.getItem(id);
        todo.setValue('done', !todo.getValue('done'));
    }
}

export default new TodoStore(TodoSource);