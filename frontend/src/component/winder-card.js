import React from 'react';

import {Grid, Typography, makeStyles, Card, CardHeader, CardContent, Divider, Button, Switch, CardActions, IconButton} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

function WinderCard(){
  const classes = useStyles();
    return (
        <Card className={classes.container}>
            <CardHeader
                title='Rolex Submariner'
                subheader='Winder #3'
                className={classes.cardHeader}
                action={<><IconButton><EditIcon/></IconButton><IconButton><DeleteIcon/></IconButton><Switch></Switch></>}
            />
            <CardContent>
                <Divider></Divider>
                <Grid container spacing={3}>
                    {boldListItem('Active:','8am - 8pm')}
                    {boldListItem('Beats/hour:','28800')}
                    {boldListItem('Turns/day:','600')}
                    {boldListItem('Direction:','Random')}
                    {boldListItem('Total:','1,000 turns','Today:','100 turns')}
                </Grid>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" disableElevation>Spin</Button>
            </CardActions>
        </Card>
    )
}
function boldListItem(heading,content,secondHeading,secondContent) {
    return (
      [
        <Grid item xs={4} md={2}>
          <Typography> <strong>{heading}</strong> </Typography>          
        </Grid>,
        <Grid item xs={8} md={secondContent?4:10}>
          <Typography> {content} </Typography>
        </Grid>,
        secondContent && [
          <Grid item xs={4} md={2}>
            <Typography> <strong>{secondHeading}</strong> </Typography>
          </Grid>,
          <Grid item xs={8} md={4}>
            <Typography> {secondContent} </Typography>
          </Grid>
        ]
      ]
    )
}
const useStyles = makeStyles((theme) => ({
    container:{
        marginBottom: theme.spacing(3)
    },
    cardHeader:{
        paddingBottom: 0
    },
}));
export default WinderCard;