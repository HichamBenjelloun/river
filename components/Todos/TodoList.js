import React from 'react';

import TodoItem from './TodoItem';
import mui from 'material-ui';
let List = mui.List;

class TodoList extends React.Component {

    static contextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;
        let todos = [for ([key, todo] of props.todos.entries()) <TodoItem key={key} todo={todo} />];

        return <List subheader="Todos">{todos}</List>
    }

}

export default TodoList;