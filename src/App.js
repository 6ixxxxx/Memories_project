import React, { useEffect, useState } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './assets/memories.png' 
import {Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post_actions'
import './index.css'


function App() {
  const [currentId, setCurrentId] = useState(null)

  console.log(currentId)

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
        <AppBar className ={classes.appBar} position='static' color='inherit'>

          <Typography className={classes.heading} variant='h2' align='center'>
            Memories
          </Typography>

          <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>

        <Grow in>
          <Container>

            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>

          </Container>
        </Grow>

    </Container>
  );
}

export default App;
