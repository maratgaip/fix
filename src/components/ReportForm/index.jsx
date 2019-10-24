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

    onInputChange = (input, e) => {
      const { value } = e.target;
    }

  render() {


    return (
      <Fragment>
        <Header />
        <div className="container report create">
          <h3>Inspection Report for</h3>
          <form>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Info</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Make</span></div>
                  <input type="text" onChange={e=>this.onInputChange('make',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Make"/>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Model</span></div>
                  <input onChange={e=>this.onInputChange('model',e)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Model"/>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Year</span></div>
                  <input type="text" onChange={e=>this.onInputChange('year',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Year"/>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tires</h5>
                <h6 className="card-subtitle mb-2 text-muted">Pressure</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverFrontPressure',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPressure1" name="driverFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPressure1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPressure2" name="driverFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPressure2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPressure3" name="driverFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPressure3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverRearPressure',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPressure1" name="driverRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPressure1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPressure2" name="driverRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPressure2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPressure3" name="driverRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPressure3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerFrontPressure',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPressure1" name="passengerFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontPressure1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPressure2" name="passengerFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontPressure2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPressure3" name="passengerFrontPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPressure3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerRearPressure',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPressure1" name="passengerRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPressure1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPressure2" name="passengerRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPressure2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPressure3" name="passengerRearPressure"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPressure3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Treading</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverFrontTreading',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontTreading1" name="driverFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontTreading1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontTreading2" name="driverFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontTreading2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontTreading3" name="driverFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontTreading3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverRearTreading',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearTreading1" name="driverRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearTreading1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearTreading2" name="driverRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearTreading2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearTreading3" name="driverRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearTreading3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerFrontTreading',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontTreading1" name="passengerFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontTreading1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontTreading2" name="passengerFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontTreading2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontTreading3" name="passengerFrontTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontTreading3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerRearTreading',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearTreading1" name="passengerRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearTreading1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearTreading2" name="passengerRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearTreading2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearTreading3" name="passengerRearTreading"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearTreading3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Braking System</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rotor</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverFrontRotor',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontRotor1" name="driverFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontRotor1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontRotor2" name="driverFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontRotor2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontRotor3" name="driverFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontRotor3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverRearRotor',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearRotor1" name="driverRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearRotor1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearRotor2" name="driverRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearRotor2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearRotor3" name="driverRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearRotor3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerFrontRotor',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontRotor1" name="passengerFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontRotor1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontRotor2" name="passengerFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontRotor2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontRotor3" name="passengerFrontRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontRotor3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerRearRotor',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearRotor1" name="passengerRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearRotor1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearRotor2" name="passengerRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearRotor2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearRotor3" name="passengerRearRotor"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearRotor3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Pads</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverFrontPads',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPads1" name="driverFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPads1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPads2" name="driverFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPads2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverFrontPads3" name="driverFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverFrontPads3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('driverRearPads',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPads1" name="driverRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPads1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPads2" name="driverRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPads2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="driverRearPads3" name="driverRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="driverRearPads3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerFrontPads',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPads1" name="passengerFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontPads1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPads2" name="passengerFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontPads2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerFrontPads3" name="passengerFrontPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerFrontPads3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('passengerRearPads',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPads1" name="passengerRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPads1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPads2" name="passengerRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPads2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="passengerRearPads3" name="passengerRearPads"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="passengerRearPads3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Engine</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Cooling System</span></div>
                  <input type="text" onChange={e=>this.onInputChange('coolingSystem',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolingSystem1" name="coolingSystem"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingSystem1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolingSystem2" name="coolingSystem"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingSystem2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolingSystem3" name="coolingSystem"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingSystem3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Belts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('belts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="belts1" name="belts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="belts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="belts2" name="belts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="belts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="belts3" name="belts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="belts3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Engine Oil Leak</span></div>
                  <input type="text" onChange={e=>this.onInputChange('engineOilLeak',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOilLeak1" name="engineOilLeak"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilLeak1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOilLeak2" name="engineOilLeak"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilLeak2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOilLeak3" name="engineOilLeak"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilLeak3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Mounts</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Left Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('leftMounts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="leftMounts1" name="leftMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="leftMounts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="leftMounts2" name="leftMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="leftMounts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="leftMounts3" name="leftMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="leftMounts3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Right Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('rightMounts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rightMounts1" name="rightMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rightMounts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rightMounts2" name="rightMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rightMounts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rightMounts3" name="rightMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rightMounts3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Front Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('frontMounts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="frontMounts1" name="frontMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="frontMounts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="frontMounts2" name="frontMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="frontMounts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="frontMounts3" name="frontMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="frontMounts3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Rear Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('rearMounts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rearMounts1" name="rearMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rearMounts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rearMounts2" name="rearMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rearMounts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="rearMounts3" name="rearMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rearMounts3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Torque Rod Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('torqueRodMounts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="torqueRodMounts1" name="torqueRodMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="torqueRodMounts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="torqueRodMounts2" name="torqueRodMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="torqueRodMounts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="torqueRodMounts3" name="torqueRodMounts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="torqueRodMounts3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fluids</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Engine Oil</span></div>
                  <input type="text" onChange={e=>this.onInputChange('engineOil',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOil1" name="engineOil"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOil1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOil2" name="engineOil"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOil2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="engineOil3" name="engineOil"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOil3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Brake Fluid</span></div>
                  <input type="text" onChange={e=>this.onInputChange('brakeFluid',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="brakeFluid1" name="brakeFluid"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluid1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="brakeFluid2" name="brakeFluid"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluid2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="brakeFluid3" name="brakeFluid"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluid3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Coolant</span></div>
                  <input type="text" onChange={e=>this.onInputChange('coolant',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolant1" name="coolant"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolant1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolant2" name="coolant"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolant2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="coolant3" name="coolant"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolant3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Power Stealing Fluids</span></div>
                  <input type="text" onChange={e=>this.onInputChange('powerStealingFluids',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="powerStealingFluids1" name="powerStealingFluids"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="powerStealingFluids1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="powerStealingFluids2" name="powerStealingFluids"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="powerStealingFluids2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="powerStealingFluids3" name="powerStealingFluids"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="powerStealingFluids3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Seat Belt</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Seat Belts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('seatBelts',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="seatBelts1" name="seatBelts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBelts1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="seatBelts2" name="seatBelts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBelts2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="seatBelts3" name="seatBelts"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBelts3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div><div className="card">
              <div className="card-body">
                <h5 className="card-title">Battery</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Corrosion</span></div>
                  <input type="text" onChange={e=>this.onInputChange('corrosion',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="corrosion1" name="corrosion"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosion1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="corrosion2" name="corrosion"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosion2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="corrosion3" name="corrosion"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosion3">Bad</label>
                    </div></span>
                  </div>
                </div><div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Case Leaking</span></div>
                  <input type="text" onChange={e=>this.onInputChange('caseLeaking',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="caseLeaking1" name="caseLeaking"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeaking1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="caseLeaking2" name="caseLeaking"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeaking2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="caseLeaking3" name="caseLeaking"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeaking3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div><div className="card">
              <div className="card-body">
                <h5 className="card-title">Dash</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Warning Lights</span></div>
                  <input type="text" onChange={e=>this.onInputChange('warningLights',e)} className="form-control" aria-describedby="emailHelp" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="warningLights1" name="warningLights"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLights1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="warningLights2" name="warningLights"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLights2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="warningLights3" name="warningLights"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLights3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Create a Report</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default ReportForm;
