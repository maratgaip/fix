import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Common/Header';
import './style.css';

class RepairPhone extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
        <div className="content-repair">
          <Link to="/repair/iphone" className="box">iPhone</Link>
          <Link to="/repair/ipad" className="box">iPad</Link>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default RepairPhone;