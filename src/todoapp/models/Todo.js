import Model from '../../core/models/Model';
import CharField from '../../core/models/fields/CharField';
import BooleanField from '../../core/models/fields/BooleanField';

class Todo extends Model {

    fields() {
        return {
            'text': new CharField(this.values['text'], {required: true, max_length: 50}),
            'done': new BooleanField(this.values['done'], {required: true})
        }
    }

}

export default Todo;