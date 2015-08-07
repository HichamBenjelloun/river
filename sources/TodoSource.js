
import Source from '../core/sources/Source';
import TodoActions from '../actions/TodoActions';

class TodoSource extends Source {

    constructor() {
        super();
    }

    data() {
        return [
            {
                id: Date.now(),
                text: 'Sample todo',
                done: false
            }
        ];
    }

    action(data) {
        TodoActions.receiveData(data);
    }

    fetch() {
        this.action(this.data());
    }

}

export default new TodoSource();