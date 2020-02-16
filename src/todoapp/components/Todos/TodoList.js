import React, {Fragment} from 'react';

import TodoItem from './TodoItem';

import {List} from '@material-ui/core';
import Divider from "@material-ui/core/Divider";


const TodoList = ({todos}) => {
    const todoItems =
        Array
            .from(todos.keys())
            .map(key => {
                    console.log(key);
                    return (
                        <Fragment>
                            <TodoItem key={key} todo={todos.get(key)}/>
                            <Divider/>
                        </Fragment>
                    );
                }
            );

    return <List>{todoItems}</List>
};

export default TodoList;