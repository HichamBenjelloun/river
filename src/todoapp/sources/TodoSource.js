
import Source from '../../core/sources/Source';
import TodoActions from '../actions/TodoActions';

class TodoSource extends Source {

    data() {
        return [
            {
                id: Date.now(),
                text: 'Sample todo',
                done: true
            },
            {
                id: Date.now() + 1,
                text: 'Another sample',
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