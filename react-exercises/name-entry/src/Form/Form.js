import React, { Component } from 'react';
import NamesList from './NamesList/NamesList';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const styles = theme => ({
    root: {
        width: '250px',
        margin: 'auto',
        padding: '1em',
        fontFamily: 'Roboto',
    },
    rounded: {
        borderRadius: '10px',
    },
    button: {
        margin: '1em',
        alignSelf: 'center',
        borderRadius: '100px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
});

class Form extends Component {
    constructor(props) {
        super(props);
        this.classes = this.props.classes
        this.state = {
            name: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState(prevState => ({
            names: [...prevState.names, this.state.name],
            name: ''
        }))
        e.target.name.value = ''
    }

    render() {
        return (
            <Paper 
                classes={{
                    root: this.classes.root,
                    rounded: this.classes.rounded,
                }} elevation={2}
            >
                <form onSubmit={this.handleSubmit} className={this.classes.form}>
                    <Typography variant="display1" gutterBottom>→ {this.state.name}</Typography>
                    <Typography variant="title">Names</Typography>
                    <NamesList names={this.state.names} />
                    <TextField
                        margin="dense"
                        name="name"
                        type="text"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus="true"
                    />
                    <Button className={this.classes.button} variant="raised" color="primary">
                        SUBMIT
                    </Button>
                </form>
            </Paper>
        )
    }
}

export default withStyles(styles)(Form);