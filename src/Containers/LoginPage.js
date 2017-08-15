import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Grid, Card, TextField, Button } from 'material-ui'
import { FormLabel, FormControlLabel, FormControl, FormGroup } from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Paper from 'material-ui/Paper'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        height: 240,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
})

class LoginPage extends Component {
    state = {
        direction: 'row',
        justify: 'center',
        align: 'center',
        gutter: '16',
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        })
    }

    render() {
        const classes = this.props.classes
        const { align, direction, justify } = this.state
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12} >
                    <Grid
                        container
                        className={classes.demo}
                        align='center'
                        direction='row'
                        justify='center'>

                        <Grid item sm={4} md={3}>
                            <Card className={classes.paper}>
                                <FormControl
                                    fullWidth={true}>
                                    <FormGroup>

                                        <TextField
                                            id="username"
                                            label="username"
                                            className={classes.textField}
                                        />
                                        <TextField
                                            id="password"
                                            label="password"
                                            type="password"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button raised color="primary" className={classes.button}>
                                            Login
                                        </Button>
                                    </FormGroup>
                                </FormControl>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid >

            </Grid >
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginPage)