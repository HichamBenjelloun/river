import React from 'react';

import TodoStore from '../../stores/TodoStore';

import TodoList from './TodoList';
import InputAddTodo from './InputAddTodo';
import {
    createMuiTheme,
    ThemeProvider,
    AppBar,
} from "@material-ui/core";

import {blueGrey} from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from '@material-ui/icons/GitHub';
import Link from "@material-ui/core/Link";

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: blueGrey,
    }
});

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange.bind(this));
        TodoStore.requestData();
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        const classes = {};

        let state = this.state;

        let containerStyle = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        };

        let contentStyle = {
            position: 'relative',
            top: '100px',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        };

        return (
            <ThemeProvider theme={theme}>
                <div style={containerStyle}>
                    <AppBar position="static">
                        <Toolbar>
                            <Link
                                color='inherit'
                                href="https://github.com/HichamBenjelloun/river"
                            >
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="github"
                                >
                                    <GitHubIcon/>
                                </IconButton>
                            </Link>

                            <Typography variant="h6" className={classes.title}>
                                Todo list demo
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={contentStyle}>
                        <InputAddTodo/>
                        <TodoList todos={state.todos}/>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    _onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

}

export default Todos;