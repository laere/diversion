import React from 'react';
import { Link } from 'react-router';

const DashboardLink = (props) => {
  return (
    <Link to={props.link}>
      <div className={props.className}>
        <i className={props.icon}></i>
        <div className="dashboardName">{props.link}</div>
      </div>
    </Link>
  );
};

export default DashboardLink;
