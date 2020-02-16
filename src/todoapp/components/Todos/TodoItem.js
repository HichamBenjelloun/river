import React from 'react';

import TodoActions from '../../actions/TodoActions';

import {
    Checkbox,
    ListItem,
} from '@material-ui/core';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Delete} from "@material-ui/icons";

class TodoItem extends React.Component {

    render() {
        let props = this.props;

        const done = props.todo.getValue('done');
        const text = props.todo.getValue('text');

        let textStyle = {};

        if (done) {
            textStyle = {
                color: 'grey',
            }
        }

        return (
            <ListItem dense>
                <ListItemIcon>
                    <Delete
                        style={{
                            cursor: 'pointer',
                        }}
                        edge="start"
                        onClick={this._onDestroyClick}
                    />
                </ListItemIcon>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={done}
                        onChange={this._onToggleClick}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    primary={<span style={textStyle}>{text}</span>}
                />
            </ListItem>
        );
    }

    _onToggleClick = () => {
        TodoActions.toggle(this.props.todo.getValue('id'));
    };

    _onDestroyClick = () => {
        TodoActions.destroy(this.props.todo.getValue('id'));
    }
}

export default TodoItem;