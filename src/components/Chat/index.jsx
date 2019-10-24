import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Common/Header';
import './style.css';

class Chat extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    //console.log(this.props.zipCodes)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">

          Chat Application
          <ul>
          {
            this.props.zipCodes.map(zip=>{
              return (
                <li>{zip}</li>
              )
            })
          }
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state => {
  return {zipCodes: state.root.zipCodes}
})


export default connect(mapStateToProps)(Chat);
