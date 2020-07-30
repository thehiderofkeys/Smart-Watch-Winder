import React from 'react';
import { connect } from 'react-redux';
import {Button, CircularProgress} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { loginThunk } from '../redux/actions';

class LoginButton extends React.Component {

    render() {
        const {buttonText, login, classes, dispatchLoginRequest} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={login.loadingLogin}
                        onClick={dispatchLoginRequest}
                    >
                        {buttonText}
                    </Button>
                    {login.loadingLogin && <CircularProgress size={24} className={classes.buttonProgress}/>}
                </div>
            </div>
        )
    }
}
const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});
const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = {
    dispatchLoginRequest: loginThunk.thunk
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginButton));
