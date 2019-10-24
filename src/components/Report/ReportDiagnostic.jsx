import React, { Component } from 'react';
import Photo1 from './assets/car1.png'
class ReportDiagnostic extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    let {
      reportedIssue, rootCause, recommendation, pricePartsDescription, pricePartsAmountFrom, pricePartsAmountTo,
      priceLaborDescription, priceLaborAmountFrom, priceLaborAmountTo, photos, quotes
    } = this.props.data;
    photos = photos || [];
    quotes = quotes || [];
    return (
          <div className="diagnostic-content">
            <div className="card-title"><strong>Reported Issue:</strong></div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{reportedIssue}</p>
              </div>
            </div>
            <div className="card-title"><strong>Root Cause:</strong></div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{rootCause}</p>
              </div>
            </div>
            <div className="card-title"><strong>Recommendation:</strong></div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{recommendation}</p>
              </div>
            </div>
            <div className="card-title"><strong>Price Range:</strong></div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <ul>
                    <li>{pricePartsDescription}: ${pricePartsAmountFrom} - ${pricePartsAmountTo}</li>
                    <li>{priceLaborDescription}: ${priceLaborAmountFrom} - ${priceLaborAmountTo}</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card-title"><strong>Photos:</strong></div>
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  {
                    photos.map(photo=>{
                      <img className="car-pictures" src={photo.url} alt={photo.name} title={photo.name} />
                    })
                  }
                </p>
              </div>
            </div>
            <p>
              <div className="card-title"><strong>Quote from mechanics nearby:</strong></div>
              {
                quotes.map(item=>{
                  const { address, name, price, availability, photo } =  item;
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
