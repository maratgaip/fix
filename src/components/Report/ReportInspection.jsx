import React, { Component } from 'react';

const mapData = [
  {category: 'Tires', info: [[
      {key:'pressureDF',value:'Pressure Driver-Front'},
      {key:'pressureDR',value:'Pressure Driver-Rear'},
      {key:'pressurePF',value:'Pressure Passenger-Front'},
      {key:'pressurePR',value:'Pressure Passenger-Rear'},
    ],[
      {key:'treadingDF',value:'Treading Driver-Front'},
      {key:'treadingDR',value:'Treading Driver-Rear'},
      {key:'treadingPF',value:'Treading Passenger-Front'},
      {key:'treadingPR',value:'Treading Passenger-Rear'},
    ]]},
  {category: 'Braking System', info: [[
      {key:'rotorDF',value:'Rotor Driver-Front'},
      {key:'rotorDR',value:'Rotor Driver-Rear'},
      {key:'rotorPF',value:'Rotor Passenger-Front'},
      {key:'rotorPR',value:'Rotor Passenger-Rear'},
    ],[
      {key:'padsDF',value:'Pads Driver-Front'},
      {key:'padsDR',value:'Pads Driver-Rear'},
      {key:'padsPF',value:'Pads Passenger-Front'},
      {key:'padsPR',value:'Pads Passenger-Rear'},
    ]]},
  {category: 'Engine', info: [[
      {key:'cooling',value:'Cooling System'},
      {key:'belts',value:'Belts'},
      {key:'oilLeaks',value:'Engine Oil Leaks'},
    ],[
      {key:'mountsLeft',value:'Left Mounts'},
      {key:'mountsRight',value:'Right Mounts'},
      {key:'mountsFront',value:'Front Mounts'},
      {key:'mountsRear',value:'Rear Mounts'},
      {key:'mountsTorqueRod',value:'Torque Rod Mounts'},
    ]]},
  {category: 'Fluids', info: [[
      {key:'engineOil',value:'Engine Oil'},
      {key:'brakeFluid',value:'Brake Fluid'},
      {key:'coolant',value:'Coolant'},
      {key:'steeringFluid',value:'Power Stealing Fluids'},
    ]]},
  {category: 'Seat Belt', info: [[{key:'seatBelt',value:'Seat Belts'}]]},
  {category: 'Dash', info: [[{key:'warningLight',value:'Warning lights'}]]},
  {category: 'Battery', info: [[
      {key:'corrosion',value:'Corrosion'},
      {key:'caseLeaking',value:'Case Leaking'},
    ]]},
]
class ReportInspection extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const { data } = this.props;
    return (
          <div className="inspection">
            <ul className="inspection-guide">
              <li className='excellent'>Checked and OK</li>
              <li className='good'>May Require Attention</li>
              <li className='bad'>Requires Immediate Attention</li>
            </ul>
            <hr/>
              {
                mapData.map(item=> {
                  const classData = `${item.category.toLowerCase()} inspection-cat`;
                  return (
                    <div className={classData}>
                      <h3>{item.category}</h3>
                      <ul>
                        {
                          item.info.map((item,index,list)=>{
                            return item.map((sub, ind, subList)=>{
                              const status = data[`${sub.key}Status`];
                              const value = data[`${sub.key}Value`];
                              let className= status === 3 ? "bad" : status === 2 ? "good" : 'excellent';
                              // get divider between sub category
                              className = list.length>1 && index < list.length-1 && subList.length-ind===1 ? className + ' div' : className;
                              return <li key={String(ind)} className={className}>{sub.value}: {value} </li>
                            })
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
