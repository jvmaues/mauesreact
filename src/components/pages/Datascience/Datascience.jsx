import React from 'react';

import Main from '../../templates/Main/Main';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


function Datascience() {
    const useStyles = makeStyles((theme) => ({
        mainGrid: {
            marginTop: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={12} className={classes.mainGrid}>
                <Main title="Data Science" />
            </Grid>
            <Divider />
        </React.Fragment>
    )
}

export default Datascience;