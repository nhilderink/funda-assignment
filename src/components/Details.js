// Libs
import React, {Component} from 'react';
import {TweenMax, Bounce} from 'gsap';

// Styles
import './Details.css';


const Detail = (props) => {
  return (
    <li>{props.name}:  <br/> {props.value}</li>
  );
};

export default class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {collapsed: true};
    this.showDetails = [
      {title: "Aangeboden sinds", key: "AangebodenSindsTekst" },
      {title: "Aantal badkamers", key: "AantalBadkamers" },
      {title: "Aantal kamers", key: "AantalKamers" },
      {title: "Aantal woonlagen", key: "AantalWoonlagen" },
      {title: "Adres", key: "Adres" },
      {title: "Woonplaats", key: "Plaats" },
      {title: "Bouwjaar", key: "Bouwjaar" },
      {title: "Id", key: "Id" },
    ]
  }

  toggleSidebar() {
    let {collapsed} = this.state;
    if (collapsed) {
      TweenMax.to(this.refs.sidebar, 1, {x: -270, ease: Bounce.easeOut, onComplete: ()=>this.setState({collapsed: false})});
      TweenMax.to(this.refs.toggleIcon, .5, {rotation: 360});
    } else {
      TweenMax.to(this.refs.sidebar, 1, {x: 0, onComplete: ()=>this.setState({collapsed: true})});
      TweenMax.to(this.refs.toggleIcon, .5, {rotation: -360});
    }
  }

  render() {
    let {data} = this.props;
    return (
      <div className="details-sidebar" ref="sidebar">
        <div className="sidebar-toggle" onClick={this.toggleSidebar.bind(this)}>
          <i className="fa fa-info-circle" aria-hidden="true" ref="toggleIcon"></i>
        </div>
        <ul className="details-list">
          {this.showDetails.map((i)=> {
            return (
              <Detail key={i.title} name={i.title} value={data[i.key]} />
            )
          })}
        </ul>
      </div>
    )
  }
};

