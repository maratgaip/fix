import React, { Component, Fragment } from 'react';
import Header from '../Common/Header';
import ReportMenu from './ReportMenu';
import ReportDiagnostic from './ReportDiagnostic';
import AdvisorImg from './assets/baha.png';
import './style.css';
import {connect} from "react-redux";
import {actions} from "../../redux/reducer";

class ReportForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

  render() {


    return (
      <Fragment>
        <Header />
        <div className="container report">
          <h3>Inspection Report for</h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Make</label>
              <input type="email" className="form-control" aria-describedby="emailHelp"
                     placeholder="Enter Make"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Model</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Model"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Year</label>
              <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Year"/>
            </div>
            <button type="submit" className="btn btn-primary">Create a Report</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default ReportForm;
