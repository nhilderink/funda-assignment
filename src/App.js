// Libs
import React, {Component} from 'react';
import _ from 'lodash';
import axios from 'axios';

// Styles
import './App.css';

// Components
import Details from './components/Details';
import SaleObject from './components/SaleObject';
import AreaMap from './components/AreaMap';


class App extends Component {

  constructor() {
    super();

    const objectId = "6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6";
    const apiKey = "005e7c1d6f6c4f9bacac16760286e3cd";
    const apiUrl = "/test_data/data.json";

    this.state = {loading: true};

    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      this.setState({data: res.data, loading: false});
    });
  }

  render() {
    let {data, loading} = this.state;

    return (
      <div className="App">

        <SaleObject data={data} loading={loading}/>

        {/*TODO (niels): loading check happens twice now, refactor to make it once*/}
        {/*AreaMap and Details can't be wrapped together right now*/}

        {!loading &&
        <AreaMap
          containerElement={<div className="containerElement"/>}
          mapElement={<div className="mapElement"/>}
          onMapLoad={_.noop}
          onMapClick={_.noop}
          centerOn={{lat: data.WGS84_Y, lng: data.WGS84_X}}
          onMarkerRightClick={_.noop}
        />
        }

        {!loading &&
        <Details data={data}/>
        }

      </div>
    );
  }
}

export default App;
