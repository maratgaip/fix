import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';


class ReportHistory extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const {data} = this.props;
    return (
          <div>
            {
              data.map(({event,time})=>{
                return (
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text"><strong>{event}:</strong> {time}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
    );
  }
}

export default ReportHistory;
