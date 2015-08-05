import React from 'react';

import TodoActions from '../../actions/TodoActions';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;

        return (
            <li>
                <p>
                    <span onClick={this._onToggleClick.bind(this)}>
                        <input type="checkbox" checked={props.todo.getValue('done')} />
                        <label>{props.todo.getValue('text')}</label>
                    </span>
                    <a href="#!" onClick={this._onDestroyClick.bind(this)}>- Delete</a>
                </p>
            </li>
        );
    }

    _onToggleClick() {
        TodoActions.toggle(this.props.todo.getValue('id'));
    }

    _onDestroyClick() {
        TodoActions.destroy(this.props.todo.getValue('id'));
    }

}

export default TodoItem;