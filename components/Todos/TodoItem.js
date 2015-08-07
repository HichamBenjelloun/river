import React from 'react';

import TodoActions from '../../actions/TodoActions';

import mui from 'material-ui';

let Checkbox = mui.Checkbox;
let IconButton = mui.IconButton;
let ListItem = mui.ListItem;

class TodoItem extends React.Component {

    static contextTypes = {
        muiTheme: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;

        let checkbox = <Checkbox defaultChecked={props.todo.getValue('done')}
                                 onCheck={this._onToggleClick.bind(this)}/>;

        let details =  <p>{props.todo.getValue('id')}</p>;

        let trash = <IconButton iconClassName="material-icons"
                                onClick={this._onDestroyClick.bind(this)}>delete</IconButton>;

        return (
            <ListItem primaryText={props.todo.getValue('text')}
                      secondaryText={details}
                      leftCheckbox={checkbox}
                      rightIconButton={trash}>
            </ListItem>
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