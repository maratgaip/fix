import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import RepairCar from './components/Repair';
import Report from './components/Report';
import ReportForm from './components/ReportForm';
import Chat from './components/Chat';

const App = props => {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        /* Car Fixing URLs */
        <Route path="/report/:reportId/:reportPage" component={Report} />
        <Route path="/diagnose" component={RepairCar} />
        <Route path="/chat" component={Chat} />
        <Route path="/report-input" component={ReportForm} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
