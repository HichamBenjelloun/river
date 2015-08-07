import React from 'react';
import River from '../../core/River';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

import TodoList from './TodoList';
import InputAddTodo from './InputAddTodo';

import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let FlatButton = mui.FlatButton;
let AppBar = mui.AppBar;
let Paper = mui.Paper;

class Todos extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }

    componentWillMount() {
        ThemeManager.setPalette({
            primary1Color: Colors.lightBlue900
        });
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

        let containerStyle = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%'
        };

        let contentStyle = {
            position: 'relative',
            top: '100px',
            left: '30%',
            width: '40%'
        };

        let paperStyle = {
            position: 'relative',
            top: '50px'
        };

        return (
            <div style={containerStyle}>
                <AppBar title="Todo App" />
                <div style={contentStyle}>
                    <InputAddTodo />
                    <Paper zDepth={1} style={paperStyle}>
                        <TodoList todos={state.todos} />
                    </Paper>
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