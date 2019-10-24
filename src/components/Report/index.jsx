import React, { Component, Fragment } from 'react';
import Header from '../Common/Header';
import ReportMenu from './ReportMenu';
import ReportDiagnostic from './ReportDiagnostic';
import ReportInspection from './ReportInspection';
import ReportHistory from './ReportHistory';
import ReportAdvisor from './ReportAdvisor';
import AdvisorImg from './assets/baha.png';
import './style.css';
import {connect} from "react-redux";
import {actions} from "../../redux/reducer";

const reportApiUrl = 'https://fixinity-api-staging.herokuapp.com/api/v1/report?shortUrlCode=';
const reportSampleData = {
  info: {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
    odometer: 'odometer',
    vin: '123123',
    date: 1312313123
  },
  diagnostic: {
    reportedIssue: 'reportedIssue',
    rootCause: 'rootCause',
    recommendation: 'recommendation',
    pricePartsDescription: 'new rotors for Toyota Camry',
    pricePartsAmountFrom: 200,
    pricePartsAmountTo: 300,
    priceLaborDescription: 'Labor and Installation',
    priceLaborAmountFrom: 100,
    priceLaborAmountTo: 150,
    //    prices: [
    //      {price:300, description:'new rotors for Toyota Camry'},
    //      {price:100, description:'Labor and Installation'}
    //    ],
    photos: [
      {
        url: 'url',
        name: 'tire'
      }
    ],
    quotes: [
      {
        id: 1,
        name: 'Mechanic A',
        address: '81 Pioneer Way, Mountain View, CA 94040',
        price: 300,
        availability: 'Today(October 30) at 1pm',
        photo: 'url'
      },
      {
        id: 2,
        name: 'Mechanic B',
        address: '345 San Marino, North Hollywood, CA 94040',
        price: 300,
        availability: 'Today(October 30) at 5pm',
        photo: 'url'
      },
      {
        id: 3,
        name: 'Mechanic C',
        address: '123 Sey street, Los Angeles, CA 94040',
        price: 300,
        availability: 'Today(October 30) at 3pm',
        photo: 'url'
      }
    ]
  },
  inspection: {
    // dash
    warningLightValue: '...',
    warningLightStatus: 1,
    // fluids
    engineOilValue: '...',
    engineOilStatus: 1,
    brakeFluidValue: '...',
    brakeFluidStatus: 1,
    coolantValue: '...',
    coolantStatus: 1,
    steeringFluidValue: '...',
    steeringFluidStatus: 1,
    washerFluidValue: '...',
    washerFluidStatus: 1,
    // tires - pressure
    pressureDFValue: '...',
    pressureDFStatus: 1,
    pressurePFValue: '...',
    pressurePFStatus: 1,
    pressureDRValue: '...',
    pressureDRStatus: 1,
    pressurePRValue: '...',
    pressurePRStatus: 1,
    // tires - treading
    treadingDFValue: '...',
    treadingDFStatus: 1,
    treadingPFValue: '...',
    treadingPFStatus: 1,
    treadingDRValue: '...',
    treadingDRStatus: 1,
    treadingPRValue: '...',
    treadingPRStatus: 1,
    // braking system - rotor
    rotorDFValue: '...',
    rotorDFStatus: 1,
    rotorPFValue: '...',
    rotorPFStatus: 1,
    rotorDRValue: '...',
    rotorDRStatus: 1,
    rotorPRValue: '...',
    rotorPRStatus: 1,
    // braking system - pads
    padsDFValue: '...',

    padsDFStatus: 1,
    padsPFValue: '...',

    padsPFStatus: 1,
    padsDRValue: '...',

    padsDRStatus: 1,
    padsPRValue: '...',

    padsPRStatus: 1,
    // engine
    coolingValue: '...',

    coolingStatus: 1,
    beltsValue: '...',

    beltsStatus: 1,
    oilLeaksValue: '...',

    oilLeaksStatus: 1,
    // engine mounts
    mountsLeftValue: '...',

    mountsLeftStatus: 1,
    mountsRightValue: '...',

    mountsRightStatus: 1,
    mountsFrontValue: '...',

    mountsFrontStatus: 1,
    mountsRearValue: '...',

    mountsRearStatus: 1,
    mountsTorqueRodValue: '...',

    mountsTorqueRodStatus: 1,
    // battery
    corrosionValue: '...',

    corrosionStatus: 1,
    caseLeakingValue: '...',

    caseLeakingStatus: 1,
    // seat belt
    seatBeltValue: '...',
    seatBeltStatus: 1
  },
  history: [
    {
      "event": "client requested a job",
      "time": "...",
    },
    {
      "event": "car picked up",
      "time": "...",
    },
    {
      "event": "inspection complete",
      "time": "...",
    },
    {
      "event": "delivered to mechanic",
      "time": "...",
    },
    {
      "event": "repair complete",
      "time": "...",
    },
    {
      "event": "quality control passed",
      "time": "...",
    },
    {
      "event": "delivered to a client",
      "time": "...",
    }
  ],
  advisor: {
    name: 'Bakyt',
    lastName: 'Bugubaev',
    bio: 'blablabal'
  }
};

class Report extends Component {
    constructor(props){
        super(props)
        this.state = {
          loaded: false,
          report:{}
        }
    }

    componentDidMount() {
      const {reportId} = this.props.match.params;
      const reportUrl = `${reportApiUrl}${reportId}`;
      console.log('reportUrl',reportUrl)
      fetch(reportUrl,{
        method: 'get',
        //mode: 'no-cors',
      })
        .then(response=>{

          return response.text()
          return response.json()


          console.log(JSON.parse(response.body))
          return response.text().then(function(text) {
            debugger
            return text ? JSON.parse(text) : {}
          })
        })
        .then(report=>{
          debugger
          this.setState({report,loaded:true})
        })
        .catch(err=>{
          debugger
          this.setState({loaded:true,report:reportSampleData})
        })
    }

  render() {
      const {reportId, reportPage} = this.props.match.params;
      const { report: {info, diagnostic, inspection, history, advisor, loaded}} = this.state;
      let content = <ReportDiagnostic data={diagnostic}/>;
      if(reportPage === 'inspection'){
        content = <ReportInspection data={inspection}/>
      } else if (reportPage === 'history') {
        content = <ReportHistory data={history} />
      }else if (reportPage === 'about') {
        content = <ReportAdvisor data={advisor} />
      }

      if(!loaded){
        return null
      }

    return (
      <Fragment>
        <Header />
        <div className="container report">
          <div className="report-header">
            <h2>Inspection Report for {info.year} {info.make} {info.model}</h2>
            <div><strong>Odometer</strong> {info.odometer}</div>
            <div><strong>VIN</strong> {info.vin}</div>
            <div><strong>Date</strong> {info.date}</div>
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
