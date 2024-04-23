import React from 'react';
import '../css/cards.css';

const Card = ({ borderColor, title, value, change, iconClass, iconColor }) => {
  return (
    <div className={`card radius-10 border-start border-0 border-3 border-${borderColor}`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div>
            <p className="mb-0 text-secondary">{title}</p>
            <h4 className="my-1 text-info">{value}</h4>
            <p className="mb-0 font-13">{change}</p>
          </div>
          <div className={`widgets-icons-2 rounded-circle bg-gradient-${iconColor} text-white ms-auto`}>
            <i className={`fa ${iconClass}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <Card borderColor="info" title="Total Orders" value="4805" change="+2.5% from last week" iconClass="fa-shopping-cart" iconColor="scooter" />
        </div>
        <div className="col-md-6 col-xl-3">
          <Card borderColor="danger" title="Total Revenue" value="$84,245" change="+5.4% from last week" iconClass="fa-dollar" iconColor="bloody" />
        </div>
        <div className="col-md-6 col-xl-3">
          <Card borderColor="success" title="Bounce Rate" value="34.6%" change="-4.5% from last week" iconClass="fa-bar-chart" iconColor="ohhappiness" />
        </div>
        <div className="col-md-6 col-xl-3">
          <Card borderColor="warning" title="Total Customers" value="8.4K" change="+8.4% from last week" iconClass="fa-users" iconColor="blooker" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
