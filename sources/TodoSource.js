
import Source from '../core/sources/Source';
import TodoActions from '../actions/TodoActions';

class TodoSource extends Source {

    constructor() {
        super();
    }

    data() {
        return [
            {
                id: 1,
                text: 'A',
                done: false
            },
            {
                id: 2,
                text: 'B',
                done: false
            },
            {
                id: 3,
                text: 'C',
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