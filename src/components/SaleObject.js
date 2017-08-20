// Libs
import React, {Component} from 'react';

// Components
import PhotoSlider from './PhotoSlider';

// Styles
import './SaleObject.css';

// Images
import ajaxLoader from '../img/ajax-loader.gif';

export default class SaleObject extends Component {

  render() {
    let {data, loading} = this.props;
    return (
      <div className="sale-object">

        {loading &&
        <img src={ajaxLoader} alt="" className="loader"/>
        }

        {!loading &&
          <div>
            <h1>Huis te koop</h1>
            <PhotoSlider media={data.Media}/>
            <h3>&euro; {data.EersteKoopPrijs}</h3>
            <ul className="house-details">
              <li><i className="fa fa-map-o"></i> {data.Adres}, {data.Plaats}</li>
              <li><i className="fa fa-calendar-o"></i> Sinds {data.AangebodenSindsTekst}</li>
            </ul>
          </div>
        }
      </div>
    )
  }

}