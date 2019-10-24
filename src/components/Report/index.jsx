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
class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
          loaded: false,
          report:{
            info:{},
            advisor:{}
          }
        }
    }

    componentDidMount() {
      const {reportId} = this.props.match.params;
      const reportUrl = `${reportApiUrl}${reportId}`;
      fetch(reportUrl)
        .then(response=>{
          return response.json()
        })
        .then(report=>{
          this.setState({report,loaded:true})
        })
        .catch(err=>{
          this.setState({loaded:true})
        })
    }

  render() {
      const {reportId, reportPage} = this.props.match.params;
      const { report: {info, diagnostic, inspection, history, advisor},loaded} = this.state;
      let content = <ReportDiagnostic data={diagnostic}/>;
      if(reportPage === 'inspection'){
        content = <ReportInspection data={inspection}/>
      } else if (reportPage === 'history') {
        content = <ReportHistory data={history} />
      }else if (reportPage === 'about') {
        content = <ReportAdvisor data={advisor} />
      }
      if(!loaded){
        content = <div>Loading...</div>
      } else if (!diagnostic){
        content = <div>Report not Found</div>
      }

    return (
      <Fragment>
        <Header />
        <div className="container report">
          <div className="report-header">
            <h4>Inspection Report for {info.year} {info.make} {info.model}</h4>
            <div><strong>Odometer</strong> {info.odometer}</div>
            <div><strong>VIN</strong> {info.vin}</div>
            <div><strong>Date</strong> {info.date}</div>
            <div className="advisor">
              <h5>Advisor:</h5>
              <img src={AdvisorImg} />
              <div>{advisor.fName} {advisor.lName}</div>
            </div>
          </div>
          <ReportMenu activePage={reportPage} reportId={reportId}/>
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
