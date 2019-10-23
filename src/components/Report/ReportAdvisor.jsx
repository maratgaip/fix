import React, { Component } from 'react';
import AdvisorImg from './assets/baha.png';

class ReportAdvisor extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const {name,lastName, bio} = this.props.data;
    return (
        <div className="card advisor-content" >
          <img className="card-img-top" src={AdvisorImg} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{name} {lastName}</h5>
              <p className="card-text">{bio}</p>
            </div>
        </div>
    );
  }
}

export default ReportAdvisor;
