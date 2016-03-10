import React from 'react';
import { Link } from 'react-router';

const DashboardLink = (props) => {
  return (
    <div className="dashboardLink">
      <Link to={props.link}>
        <i className={props.icon}></i>
        <div className="dashboardName">{props.link}</div>
      </Link>
    </div>
  );
};

export default DashboardLink;
