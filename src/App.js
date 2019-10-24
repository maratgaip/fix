import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import RepairCar from './components/Repair';
import Report from './components/Report';
import ReportForm from './components/ReportForm';
import Chat from './components/Chat';
import withTracker from './withTracker';

const App = props => {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        /* Car Fixing URLs */
        <Route path="/report/:reportId/:reportPage" component={withTracker(Report)} />
        <Route path="/diagnose" component={withTracker(RepairCar)} />
        <Route path="/chat" component={withTracker(Chat)} />
        <Route path="/report-input" component={withTracker(ReportForm)} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
