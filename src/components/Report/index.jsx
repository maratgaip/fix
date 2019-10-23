import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Common/Header';
import ReportMenu from './ReportMenu';
import ReportDiagnostic from './ReportDiagnostic';
import ReportInspection from './ReportInspection';
import AdvisorImg from './assets/baha.png';
import './style.css';
import {connect} from "react-redux";
import {actions} from "../../redux/reducer";

class Report extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

  render() {
      const {reportId, reportPage} = this.props.match.params;
      let content = <ReportDiagnostic/>;
      if(reportPage === 'inspection'){
        content = <ReportInspection/>
      } else if (reportPage === 'history') {
        content = <div>History Content</div>
      }else if (reportPage === 'about') {
        content = <div>About Content</div>
      }

    return (
      <Fragment>
        <Header />
        <div className="container report">
          <div className="report-header">
            <h2>Inspection Report for 2011 Toyota Camry</h2>
            <div><strong>Odometer</strong> 105123</div>
            <div><strong>VIN</strong> 105123</div>
            <div><strong>Date</strong> 105123</div>
            <div className="advisor">
              <h4>Advisor: Baha B.</h4>
              <img src={AdvisorImg} />
            </div>
          </div>
          <ReportMenu activePage={reportPage}/>
          { content }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    const { carMake, carModel, carYear, carJson } = state.root;
    return { carMake, carModel, carYear, carJson };
};
const mapDispatchToProps = (dispatch) => ({
    fetchCarJson: (payload) => dispatch(actions.fetchCarJson(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
