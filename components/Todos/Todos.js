import React from 'react';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

import TodoList from './TodoList';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll(),
            newItemValue: ''
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange.bind(this));
        window.addEventListener("keydown", this._handleKeyPressed.bind(this), false);

        // Request data
        TodoStore.requestData();
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange.bind(this));
        window.removeEventListener("keydown", this._handleKeyPressed.bind(this));
    }

    render() {
        let state = this.state;

        let errorStyle = {
            color: 'red'
        };

        return (
            <div className="Todos">
                <h2> My Todo List </h2>
                <TodoList todos={state.todos} />
                <input value={state.newItemValue}
                       onChange={this._handleNewItemChange.bind(this)} />
                <a href="#!" onClick={this._onCreateClick.bind(this)}>
                    - Create &nbsp;
                </a>
                <span style={errorStyle}>{TodoStore.getErrors()}</span>
            </div>
        );
    }

    _handleNewItemChange(event) {
        this.setState({
            newItemValue: event.target.value
        });
    }

    _onCreateClick() {
        TodoActions.create(this.state.newItemValue);
        this.setState({
            newItemValue: ''
        });
    }

    _handleKeyPressed(event) {
        if(event.keyCode == 13) {
            this._onCreateClick();
        }
    }


    _onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

}

export default Todos;