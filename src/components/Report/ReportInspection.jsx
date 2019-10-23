import React, { Component } from 'react';

class ReportInspection extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: [
            {
                category: 'Dash',
                info: [
                    {part: 'Warning lights', value: 'none', status: 1}
                ]
            },
            {
                category: 'Tires',
                info: [
                    {part: 'Pressure driver-front:', value: '34psi', status: 1},
                    {part: 'Pressure passenger-front:', value: '32psi', status: 2},
                    {part: 'Pressure driver-rear:', value: '34psi', status: 1},
                    {part: 'Pressure passenger-rear:', value: '30psi', status: 3}
                ]
            },
            {
                category: 'Fluids',
                info: [
                    {part: 'Pressure driver-front:', value: '32psi', status: 2}
                ]
            },
            {
                category: 'Breaking System',
                info: [
                    {part: 'Pressure driver-front:', value: '34psi', status: 1}
                ]
            },
        ]
    }
  }

  render() {
    const { data } = this.state
    return (
          <div className="evaluation">
            {
                data.map((item)=>{
                    return (
                        <div>
                        <h3>{item.category}</h3>
                        <ul>
                            {
                                item.info.map(item=>{
                                    let className="excellent";
                                    if(item.status === 2) {
                                        className="good"
                                    } else if(item.status === 3) {
                                        className="bad"
                                    }
                                    return <li key={item.part} className={className}>{item.part}: {item.value} </li>
                                })
                            }
                        </ul>
                        </div>
                    )
                })
            }
          </div>
    );
  }
}

export default ReportInspection;
