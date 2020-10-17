import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Teams from './components/Teams';
import TeamInfo from './components/TeamInfo';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const App: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Router>
        <Switch>
          <Route exact path={'/teams'} component={Teams} />
          <Route exact path={'/teams/:id'} component={TeamInfo} />
          <Redirect to={'/teams'} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
