
import Dispatcher from '../core/dispatcher/Dispatcher'
import TodoConstants from '../constants/TodoConstants';

export default {

    receiveData(data) {
        Dispatcher.handleServerAction({
            actionType: TodoConstants.TODO_RECEIVE_DATA,
            data: data
        })
    },

    create(text) {
        Dispatcher.handleViewAction({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    destroy(id) {
        Dispatcher.handleViewAction({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },

    toggle(id) {
        Dispatcher.handleViewAction({
            actionType: TodoConstants.TODO_TOGGLE,
            id: id
        });
    }

};