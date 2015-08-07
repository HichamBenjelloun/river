import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;
        let todos = [for ([key, todo] of props.todos.entries()) <TodoItem key={key} todo={todo} />];

        return <ul>{todos}</ul>
    }

}

export default TodoList;