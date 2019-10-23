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
            <h3>Dash</h3>
            <ul>
                <li>warning lights: none</li>
            </ul>
            <h3>Tires</h3>
            <ul>
                <li className={this.state.level}>pressure driver-front: {this.state.pressuredriverfront }psi</li>
                <li>pressure passenger-front: 32psi</li>
                <li>pressure driver-rear: 32psi</li>
                <li>pressure passenger-rear: 32psi</li>
            </ul>
            <ul>
                <li>treading driver-front: 3/32 - 6/32"</li>
                <li>treading passenger-front: 3/32 - 6/32"</li>
                <li className="good">treading driver-rear: 2/32 - 4/32"</li>
                <li className="good">treading passenger-rear: 2/32 - 4/32"</li>
            </ul>
            <h3>Fluids</h3>  
            <ul>
                <li>engine oil: good</li>
                <li>break fluid: good</li>
                <li>coolant: good</li>
                <li>power steering-fluid: good</li>
                <li>washer fluid: good</li>
            </ul>
            <h3>Breaking System</h3>
            <ul>
                <li>rotor driver-front: no issues</li>
                <li className={this.state.level}>rotor passenger-front: warped</li>
                <li>rotor driver-rear: no issues</li>
                <li>rotor passenger-rear: no issues</li>
            </ul>
            <ul>
                <li>pads driver-front: 80%(>6mm)</li>
                <li>pads passenger-front: 80%(>6mm)</li>
                <li>pads driver-rear: 80%(>6mm)</li>
                <li>pads passenger-rear: 80%(>6mm)</li>
            </ul>
          </div>
    );
  }
}

export default ReportInspection;
