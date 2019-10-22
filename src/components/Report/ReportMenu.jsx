import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';


class ReportMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:'diagnostic', title: 'Issue Diagnostic', url:'/report/10/diagnostic'},
        {id:'inspection',title: 'Inspection', url:'/report/10/inspection'},
        {id:'history',title: 'History', url:'/report/10/history'},
        {id:'about',title: 'About', url:'/report/10/about'},
      ]
    }
  }

  render() {
    const {data} = this.state;
    const {activePage} = this.props;
    return (
          <ul className="nav nav-tabs">
            {
              data.map(menu=>{
                const className = activePage === menu.id ? 'nav-link active' : 'nav-link';
                return (
                  <li className="nav-item">
                    <Link className={className} to={menu.url}>{menu.title}</Link>
                  </li>
                )
              })
            }
          </ul>
    );
  }
}

export default ReportMenu;
