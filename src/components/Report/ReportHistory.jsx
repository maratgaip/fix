import React, { Component } from 'react';

import './style.css';


class ReportHistory extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const {data} = this.props;
    return (
          <div className="history-content">
            {
              data.map(({event,time})=>{
                return (
                  <div>
                    <div className="card-title"><strong>{event}:</strong></div>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> {time}</p>
                      </div>
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
