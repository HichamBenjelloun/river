
import React from 'react';
import mui from 'material-ui';

import TodoActions from '../../actions/TodoActions';

let FlatButton = mui.FlatButton;
let TextField = mui.TextField;

class InputAddTodo extends React.Component {

    static contextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this._handleKeyPressed.bind(this), false);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this._handleKeyPressed.bind(this));
    }

    render() {
        let state = this.state;

        return (
            <div>
                <TextField ref="input"
                           hintText="Add todo..."
                           value={state.value}
                           onChange={this._handleChange.bind(this)} />
                <FlatButton label={"Create"}
                            onClick={this._onCreateClick.bind(this)} />
            </div>
        );
    }

    _handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    _onCreateClick() {
        TodoActions.create(this.state.value);
        this.setState({
            value: ''
        });
    }

    _handleKeyPressed(event) {
        if(event.keyCode == 13) {
            this._onCreateClick();
        }
    }
}

export default InputAddTodo;