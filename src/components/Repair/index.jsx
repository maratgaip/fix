import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import Month from '../Common/Calendar/month';
import Time from '../Common/Calendar/time';

import Header from '../Common/Header';
import './style.css';
import {connect} from "react-redux";
import {actions} from "../../redux/reducer";

const newPostJobURL = 'https://fixinity-api-staging.herokuapp.com/api/v1/jobRequest/new';
// const newPostJobURL = 'http://localhost:1337/api/v1/jobRequest/new';
const dateFormat = "MM/DD/YYYY";

class RepairCar extends Component {
    constructor(props){
        super(props);
      this.refProceed = React.createRef();
        this.state = {
          selectedMake: '',
          selectedModel: '',
          selectedYear: '',
          activeTab: 0,
          tabOptions: ['carMake', 'carYear', 'carModel'],
          selectedOptions: ['selectedMake', 'selectedYear', 'selectedModel'],
          makeOptions: ['make', 'year', 'model'],
          name: '',
          phone: '',
          zip: '',
          address: '',
          description: '',
          isJobPosted: '',
          err: '',
          submitEnabled: true,
          info: {
            date: '',
            time: '',
          },
          showErrors: false,
        }
    }



  onSubmit = (e) => {
      const { name, description, phone, zip, address, info, selectedMake, selectedYear, selectedModel } = this.state;
    const { time,date } = info;
      if (name && phone && description && zip && address){
        e.preventDefault();
        if (!this.isPhoneValid() || !this.isZipValid()){
          return
        }
        if (!date.length || !time.length) {
          this.setState({showErrors: true})
          return
        } else {
          this.setState({showErrors: false})
        }
        this.setState({submitEnabled: false})
        const data = {
          name,
          phone,
          description,
          make: selectedMake,
          model: selectedModel,
          year: selectedYear,
          zip,
          time,
          date,
          address,
        };
        fetch(newPostJobURL,{
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(data),
          headers:{ 'Content-Type': 'application/json'}
        })
          .then(() => {
            this.setState({isJobPosted: true})
          })
          .catch((err) => {
            console.log('eee', err)
            this.setState({isJobPosted: true, err: err})
          });
      }
  }

  onInputChange = (type,e) => {
    this.setState({[type]: e.target.value});
  }
  isZipValid = () => {
      const {zip} = this.state;
    return !(zip.length && Number(zip) == zip && zip.length !== 5)
  }
  isPhoneValid = () => {
      const {phone} = this.state;
    return !(phone.length && phone.length !== 12)
  }

  onKeyDown = (e) => {
    if (e.keyCode !== 8){
      this.phoneMask(e.target.value)
    }
  }

  phoneMask = val => {
    const num = val.replace(/\D/g,'');
    //const phone = num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11);
    const phone =num.substring(0,3) + '-' + num.substring(3,6) + '-' + num.substring(6,9);
    this.setState({phone});
  }

  onClickTitle = (title) => {
      this.setState({
          activeTab: this.state.makeOptions.indexOf(title),
      })
  }
  onSelect = data => {
      const {activeTab: oldActiveTab, selectedOptions} = this.state;
      const selected  = selectedOptions[oldActiveTab];
      const activeTab  = oldActiveTab + 1;
      this.setState({
          [selected]: data,
          activeTab,
      })
  }

  handleChangeMonth = date => this.setState({ info: {...this.state.info, date: date.format(dateFormat), time: ''} });

  handleChangeTime = (time) => {
    this.setState({ info: {...this.state.info, time }});
    ReactDOM.findDOMNode(this.refProceed.current).scrollIntoView();
  }

  render() {

        const { make, activeTab, selectedMake, selectedModel, tabOptions, selectedYear, address, zip } = this.state;
        const makeClassname = make ? 'box-select selected' : 'box-select';
        let data = this.props[tabOptions[activeTab]];
        if (activeTab === 2) {
            data = this.props.carJson[selectedYear][selectedMake]
        }
        if (activeTab === 1) {
            //Filter to get only cars if they have model for seleced year
            data = data.filter(item=>!!this.props.carJson[item][selectedMake])
        }
      let titleContent = null;
      if (activeTab === 0) {
          titleContent = (
              <div className="box-row">
                  <div className={makeClassname} onClick={() => this.onClickTitle('make')}>{selectedMake || 'Make'}</div>
              </div>
          )
      } else if (activeTab === 1){
          titleContent = (
              <div className="box-row">
                  <div className={makeClassname} onClick={() => this.onClickTitle('make')}>{selectedMake || 'Make'}</div>
                  <div className={makeClassname} onClick={() => this.onClickTitle('year')}>{selectedYear || 'Year'}</div>
              </div>
          )
      } else if (activeTab === 2){
          titleContent = (
              <div className="box-row">
                  <div className={makeClassname} onClick={() => this.onClickTitle('make')}>{selectedMake || 'Make'}</div>
                  <div className={makeClassname} onClick={() => this.onClickTitle('year')}>{selectedYear || 'Year'}</div>
                  <div className={makeClassname} onClick={() => this.onClickTitle('model')}>{selectedModel || 'Model'}</div>
              </div>
          )
      } else if (activeTab === 3){
          titleContent = (
              <div className="box-row">
                  <div className={makeClassname} onClick={() => this.onClickTitle('make')}>{selectedMake || 'Make'}</div>
                  <div className={makeClassname} onClick={() => this.onClickTitle('year')}>{selectedYear || 'Year'}</div>
                  <div className={makeClassname} onClick={() => this.onClickTitle('model')}>{selectedModel || 'Model'}</div>
              </div>
          )
      }

    //Sort
    if (activeTab === 1) {
      data.sort((a,b) => b-a)
    } else if (activeTab === 0) {
      data.sort()
    }

      let contentData = data && data.length ? (
          data.map(item => {
              return <div key={item} onClick={() => this.onSelect(item)} className="value">{item}</div>
          })
      ) : 'No Data Found';

    const phoneClassName = this.isPhoneValid() ? 'form-control' : 'form-control is-invalid';
    const zipClassName = this.isZipValid() ? 'form-control' : 'form-control is-invalid';


    const { showErrors, info: {date, time} } = this.state;
    let errors = [];
    if (showErrors) {
      if (!date.length) {
        errors.push('Please select a date')
      }
      if (!time.length) {
        errors.push('Please select a time')
      }
    }
    const timeClass = cx({
      'schedule-content': true,
      'hidden': this.state.info.date === '',
    });

      if (activeTab === 3) {
          contentData = (
              <div className="col-md-12">
                <form ref={form => this.form = form}>
                  <div className="form-group row col-md-6">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input value={this.state.name} onChange={e=>this.onInputChange('name',e)} type="text" className="form-control" placeholder="Your name" required/>
                    </div>
                  </div>
                  <div className="form-group row col-md-6">
                    <label className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                      <input onKeyDown={this.onKeyDown} value={this.state.phone} onChange={e=>this.onInputChange('phone',e)} required className={phoneClassName}  placeholder="111-111-1111"/>
                    </div>
                  </div>
                  <div className="form-group row col-md-6">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                      <input value={this.state.address} onChange={e=>this.onInputChange('address',e)} required className="form-control"  placeholder="Address"/>
                    </div>
                  </div>
                  <div className="form-group row col-md-6">
                    <label className="col-sm-2 col-form-label">Zip</label>
                    <div className="col-sm-10">
                      <input value={this.state.zip} onChange={e=>this.onInputChange('zip',e)} required className={zipClassName}  placeholder="Zip Code"/>
                    </div>
                  </div>
                  <div className="form-group row col-md-6">
                    <label className="col-sm-12 col-form-label">Describe your issue</label>
                    <textarea value={this.state.description} onChange={e=>this.onInputChange('description',e)} className="form-control" id="validationTextarea"
                              placeholder="Describe your problem" required></textarea>
                  </div>
                  <div className="schedule-content">
                    <h3>1. Pick a Day</h3>
                    <Month onChange={this.handleChangeMonth} />
                  </div>
                  <div className={timeClass}>
                    <h3 ref={this.refProceed}>2. Pick a Time</h3>
                    <Time onChange={this.handleChangeTime} selectedDate={this.state.info.date} selectedTime={this.state.info.time}/>
                  </div>
                  {
                    errors.map(error=><div key={error} className="error">{error}</div>)
                  }
                  <button onClick={this.onSubmit} type="submit" className="btn btn-primary" disabled={!this.state.submitEnabled} >Submit</button>
                </form>
              </div>
          )
        if (this.state.isJobPosted){
          contentData = this.state.err ? <p>{this.state.err}</p> : <p>We have received your request. Your independent advisor will contact with you soon.</p>
        }
      }

      let currentSelectionName = 'Quote';
      if (activeTab === 0) {
        currentSelectionName = 'Make'
      } else if (activeTab === 1) {
        currentSelectionName = 'Year'
      } else if (activeTab === 2) {
        currentSelectionName = 'Model'
      }

    return (
      <Fragment>
        <Header />
        <div className="container">
        <div className="content-repair">
            <h3>Select Your Car</h3>
            {titleContent}
            <div className="content">
                <div className='content-title'>{currentSelectionName}</div>
                <hr/>
                <div className="content-body">
                    { contentData }
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RepairCar);
