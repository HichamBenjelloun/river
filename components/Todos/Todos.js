import React from 'react';
import River from '../../core/River';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

import TodoList from './TodoList';
import InputAddTodo from './InputAddTodo';

import mui from 'material-ui';
let FlatButton = mui.FlatButton;
let AppBar = mui.AppBar;

class Todos extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll(),
            newItemValue: ''
        };
    }

    getChildContext() {
        return {
            muiTheme: River.ThemeManager.getCurrentTheme()
        }
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange.bind(this));
        TodoStore.requestData();
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        let state = this.state;

        let contentStyle = {
            position: 'relative',
            top: '100px',
            left: '100px',
            width: '50%'
        };

        return (
            <div>
                <AppBar
                    title="Todo App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <div style={contentStyle}>
                    <InputAddTodo />
                    <TodoList todos={state.todos} />
                </div>
            </div>
        );
    }

    _onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

}

export default Todos;