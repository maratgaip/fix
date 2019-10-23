import React, { Component } from 'react';
import Photo1 from './assets/car1.png'
class ReportDiagnostic extends Component {

  constructor(props){
    super(props);
    this.state = {
      quotes: [
        {
          name: 'Omurbek', address:'81 Pioneer Way, Mountain View, CA 94040',
          price: 300, availability: 'Today(October 30) at 1pm'
        },
        {
          name: 'Kuttubek', address:'345 San Marino, North Hollywood, CA 94040',
          price: 300, availability: 'Today(October 30) at 5pm'
        },
        {
          name: 'Seytech', address:'123 Sey street, Los Angeles, CA 94040',
          price: 300, availability: 'Today(October 30) at 3pm'
        }
      ]
    }
  }

  render() {
    const { quotes } = this.state
    return (
          <div>
            <h3>Issue Diagnostic:</h3>
            <p>
              <strong>Reported Issue:</strong> when i hit brakes on my car (especially down the hill or on high speeds), my steering wheel starts shaking as well as my car.
            </p>
            <p>
              <strong>Root Cause Analysis:</strong>  we have disassembled right wheel and identified that your rotor is warped. This usually happens due to long rides in hills when your brake pads overheat the rotors.
            </p>
            <p>
              <strong>Recommendation:</strong>  either resurface the existing rotor, or buy a new one. Labor cost of resurfacing a rotor will be the same as buying a new one. Recommendation is to buy a new rotor.
            </p>
            <p>
              <strong>Price Range:</strong>
              <ul>
                <li>$300 new rotors for Toyota Camry 2011</li>
                <li>$100 labor and installation </li>
              </ul>
            </p>
            <p>
              <strong>Photos:</strong><br/>
              <img className="car-pictures" src={Photo1} />
              <img className="car-pictures" src={Photo1} />
              <img className="car-pictures" src={Photo1} />
            </p>
            <p>
              <strong>Quote from mechanics nearby:</strong><br/>
              {
                quotes.map(item=>{
                  const { address, name, price, availability } =  item;
                  return (
                    <div className="card">
                      <div className="card-body">
                        <div className="card-content img">
                          <img src={Photo1} className="card-img-top"/>
                        </div>
                        <div className="card-content">
                          <h5 className="card-title">{name}</h5>
                          <ul className="quotes">
                            <li> {address} </li>
                            <li>
                              <div className="quote-title">Quoted Price</div>
                              <div className="price">${price}</div>
                            </li>
                            <li>
                              <div className="quote-title">Soonest Availability</div>
                              <div className="date">{availability}</div>
                            </li>
                            <li>
                              <button type="button" className="btn btn-primary">Book</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </p>
          </div>
    );
  }
}

export default ReportDiagnostic;
