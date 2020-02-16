import React from 'react';

import {
    TextField,
} from '@material-ui/core';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';


class InputAddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this._handleKeyPressed, false);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this._handleKeyPressed);
    }

    render() {
        let state = this.state;
        let errors = TodoStore.getErrors();
        errors = (Object.keys(errors).length === 0) ? null : JSON.stringify(errors);

        return (
            <TextField
                ref="input"
                label="Add todo..."
                variant="outlined"
                value={state.value}
                onChange={this._handleChange}
                helperText={errors}
            />
        );
    }

    _handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    _onCreateClick = () => {
        TodoActions.create(this.state.value);
        this.setState({
            value: ''
        });
    };

    _handleKeyPressed = event => {
        if (event.keyCode === 13) {
            this._onCreateClick();
        }
    }
}

export default InputAddTodo;