import React, { Component, Fragment } from 'react';
import serialize from 'form-serialize'

import Header from '../Common/Header';
import './style.css';

class ReportForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          info:{},
          inspection:{}
        }
    }

    onInputChange = (input, e) => {}

    onSubmit = e => {
        const data = serialize(this.form,{hash: true, empty: true});
        console.log(data)
      e.preventDefault();
          const url = 'https://fixinity-api-staging.herokuapp.com/api/v1/report/new';
      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers:{ 'Content-Type': 'application/json'}
      })
        .then(() => {
          this.setState({isJobPosted: true})
          console.log('done')
        })
        .catch((err) => {
          console.log('eee', err)
          this.setState({isJobPosted: true, err: err})
          console.log('err')
        });
      }

  render() {


    return (
      <Fragment>
        <Header />
        <div className="container report create">
          <h3>Inspection Report for</h3>
          <form ref={form => this.form = form}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Info</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Job Request ID</span></div>
                  <input type="text" onChange={e=>this.onInputChange('jobRequestId',e)} className="form-control" name="jobRequestId" placeholder="Enter Job Request ID"/>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tires</h5>
                <h6 className="card-subtitle mb-2 text-muted">Pressure</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('pressureDFStatus',e)} className="form-control" name="pressureDFStatus" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="pressureDFValue1" name="pressureDFValue" value="1"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDFValue1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="pressureDFValue2" name="pressureDFValue" value="2"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDFValue2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="pressureDFValue3" name="pressureDFValue" value="3"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDFValue3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('pressureDRValue',e)} className="form-control" name="pressureDRValue" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="pressureDRStatus1" name="pressureDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="pressureDRStatus2" name="pressureDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="pressureDRStatus3" name="pressureDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressureDRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('pressurePFValue',e)} className="form-control" name="pressurePFValue" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="pressurePFStatus1" name="pressurePFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="pressurePFStatus2" name="pressurePFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="pressurePFStatus3" name="pressurePFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('pressurePRValue',e)} className="form-control" name="pressurePRValue" placeholder="Enter Pressure"/>
                  <div className="input-group-append"><span className="input-group-text">psi</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="pressurePRStatus1" name="pressurePRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="pressurePRStatus2" name="pressurePRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="pressurePRStatus3" name="pressurePRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="pressurePRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Treading</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('treadingDFValue',e)} className="form-control" name="treadingDFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="treadingDFStatus1" name="treadingDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="treadingDFStatus2" name="treadingDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="treadingDFStatus3" name="treadingDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('treadingDRValue',e)} className="form-control" name="treadingDRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="treadingDRStatus1" name="treadingDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="treadingDRStatus2" name="treadingDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="treadingDRStatus3" name="treadingDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingDRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('treadingPFValue',e)} className="form-control" name="treadingPFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="treadingPFStatus1" name="treadingPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="treadingPFStatus2" name="treadingPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="treadingPFStatus3" name="treadingPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('treadingPRValue',e)} className="form-control" name="treadingPRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">"</span></div>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="treadingPRStatus1" name="treadingPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="treadingPRStatus2" name="treadingPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="treadingPRStatus3" name="treadingPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="treadingPRStatus3">Bad</label>
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
                  <input type="text" onChange={e=>this.onInputChange('rotorDFValue',e)} className="form-control" name="rotorDFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="rotorDFStatus1" name="rotorDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="rotorDFStatus2" name="rotorDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="rotorDFStatus3" name="rotorDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('rotorDRValue',e)} className="form-control" name="rotorDRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="rotorDRStatus1" name="rotorDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="rotorDRStatus2" name="rotorDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="rotorDRStatus3" name="rotorDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorDRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('rotorPFValue',e)} className="form-control" name="rotorPFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="rotorPFStatus1" name="rotorPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="rotorPFStatus2" name="rotorPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="rotorPFStatus3" name="rotorPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('rotorPRValue',e)} className="form-control" name="rotorPRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="rotorPRStatus1" name="rotorPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="rotorPRStatus2" name="rotorPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="rotorPRStatus3" name="rotorPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="rotorPRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Pads</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('padsDFValue',e)} className="form-control" name="padsDFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="padsDFStatus1" name="padsDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="padsDFStatus2" name="padsDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="padsDFStatus3" name="padsDFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Driver Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('padsDRValue',e)} className="form-control" name="padsDRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="padsDRStatus1" name="padsDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="padsDRStatus2" name="padsDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="padsDRStatus3" name="padsDRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsDRStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Front</span></div>
                  <input type="text" onChange={e=>this.onInputChange('padsPFValue',e)} className="form-control" name="padsPFValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="padsPFStatus1" name="padsPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPFStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="padsPFStatus2" name="padsPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPFStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="padsPFStatus3" name="padsPFStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPFStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Passenger Rear</span></div>
                  <input type="text" onChange={e=>this.onInputChange('padsPRValue',e)} className="form-control" name="padsPRValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="padsPRStatus1" name="padsPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPRStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="padsPRStatus2" name="padsPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPRStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="padsPRStatus3" name="padsPRStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="padsPRStatus3">Bad</label>
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
                  <input type="text" onChange={e=>this.onInputChange('coolingValue',e)} className="form-control" name="coolingValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="coolingStatus1" name="coolingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="coolingStatus2" name="coolingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="coolingStatus3" name="coolingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolingStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Belts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('beltsValue',e)} className="form-control" name="beltsValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="beltsStatus1" name="beltsStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="beltsStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="beltsStatus2" name="beltsStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="beltsStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="beltsStatus3" name="beltsStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="beltsStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Engine Oil Leak</span></div>
                  <input type="text" onChange={e=>this.onInputChange('oilLeaksValue',e)} className="form-control" name="oilLeaksValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="oilLeaksStatus1" name="oilLeaksStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="oilLeaksStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="oilLeaksStatus2" name="oilLeaksStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="oilLeaksStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="oilLeaksStatus3" name="oilLeaksStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="oilLeaksStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Mounts</h6>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Left Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('mountsLeftValue',e)} className="form-control" name="mountsLeftValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="mountsLeftStatus1" name="mountsLeftStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsLeftStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="mountsLeftStatus2" name="mountsLeftStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsLeftStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="mountsLeftStatus3" name="mountsLeftStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsLeftStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Right Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('mountsRightValue',e)} className="form-control" name="mountsRightValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="mountsRightStatus1" name="mountsRightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRightStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="mountsRightStatus2" name="mountsRightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRightStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="mountsRightStatus3" name="mountsRightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRightStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Front Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('mountsFrontValue',e)} className="form-control" name="mountsFrontValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="mountsFrontStatus1" name="mountsFrontStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsFrontStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="mountsFrontStatus2" name="mountsFrontStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsFrontStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="mountsFrontStatus3" name="mountsFrontStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsFrontStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Rear Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('mountsRearValue',e)} className="form-control" name="mountsRearValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="mountsRearStatus1" name="mountsRearStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRearStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="mountsRearStatus2" name="mountsRearStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRearStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="mountsRearStatus3" name="mountsRearStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsRearStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Torque Rod Mounts</span></div>
                  <input type="text" onChange={e=>this.onInputChange('mountsTorqueRodValue',e)} className="form-control" name="mountsTorqueRodValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="mountsTorqueRodStatus1" name="mountsTorqueRodStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsTorqueRodStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="mountsTorqueRodStatus2" name="mountsTorqueRodStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsTorqueRodStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="mountsTorqueRodStatus3" name="mountsTorqueRodStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="mountsTorqueRodStatus3">Bad</label>
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
                  <input type="text" onChange={e=>this.onInputChange('engineOilValue',e)} className="form-control" name="engineOilValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="engineOilStatus1" name="engineOilStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="engineOilStatus2" name="engineOilStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="engineOilStatus3" name="engineOilStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="engineOilStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Brake Fluid</span></div>
                  <input type="text" onChange={e=>this.onInputChange('brakeFluidValue',e)} className="form-control" name="brakeFluidValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="brakeFluidStatus1" name="brakeFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluidStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="brakeFluidStatus2" name="brakeFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluidStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="brakeFluidStatus3" name="brakeFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="brakeFluidStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Coolant</span></div>
                  <input type="text" onChange={e=>this.onInputChange('coolantValue',e)} className="form-control" name="coolantValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="coolantStatus1" name="coolantStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolantStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="coolantStatus2" name="coolantStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolantStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="coolantStatus3" name="coolantStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="coolantStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Power Stealing Fluids</span></div>
                  <input type="text" onChange={e=>this.onInputChange('steeringFluidValue',e)} className="form-control" name="steeringFluidValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="steeringFluidStatus1" name="steeringFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="steeringFluidStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="steeringFluidStatus2" name="steeringFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="steeringFluidStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="steeringFluidStatus3" name="steeringFluidStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="steeringFluidStatus3">Bad</label>
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
                  <input type="text" onChange={e=>this.onInputChange('seatBeltValue',e)} className="form-control" name="seatBeltValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="seatBeltStatus1" name="seatBeltStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBeltStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="seatBeltStatus2" name="seatBeltStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBeltStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="seatBeltStatus3" name="seatBeltStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="seatBeltStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div><div className="card">
              <div className="card-body">
                <h5 className="card-title">Battery</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Corrosion</span></div>
                  <input type="text" onChange={e=>this.onInputChange('corrosionValue',e)} className="form-control" name="corrosionValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="corrosionStatus1" name="corrosionStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosionStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="corrosionStatus2" name="corrosionStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosionStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="corrosionStatus3" name="corrosionStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="corrosionStatus3">Bad</label>
                    </div></span>
                  </div>
                </div><div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Case Leaking</span></div>
                  <input type="text" onChange={e=>this.onInputChange('caseLeakingValue',e)} className="form-control" name="caseLeakingValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="caseLeakingStatus1" name="caseLeakingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeakingStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="caseLeakingStatus2" name="caseLeakingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeakingStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="caseLeakingStatus3" name="caseLeakingStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="caseLeakingStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div><div className="card">
              <div className="card-body">
                <h5 className="card-title">Dash</h5>
                <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">Warning Lights</span></div>
                  <input type="text" onChange={e=>this.onInputChange('warningLightValue',e)} className="form-control" name="warningLightValue" placeholder="Enter Data"/>
                  <div className="input-group-append"><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="1" id="warningLightStatus1" name="warningLightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLightStatus1">Excellent</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="2" id="warningLightStatus2" name="warningLightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLightStatus2">Good</label>
                    </div></span><span className="input-group-text">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="3" id="warningLightStatus3" name="warningLightStatus"
                             className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="warningLightStatus3">Bad</label>
                    </div></span>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Create a Report</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default ReportForm;
