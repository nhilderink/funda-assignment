// Libs
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

// Styles
import './AreaMap.css';


const AreaMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={18}
    defaultCenter={{ lat: props.centerOn.lat, lng: props.centerOn.lng }}
    onClick={props.onMapClick}
    defaultOptions={{disableDefaultUI: true}}
  >
    <Marker
      position={props.centerOn}
    />
  </GoogleMap>
));

export default AreaMap;