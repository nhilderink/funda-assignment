// Libs
import React, {Component} from 'react';
import Slider from 'react-slick';


export default class PhotoSlider extends Component {

  constructor(props) {
    super(props);
    this.settings = {
      arrows: true,
      dots: false,
      className: "cornered-border"
    };
  }

  render() {
    let {media} = this.props;
    let images = media
      .filter((i) => (i.ContentType === 1))
      .map((i) => i.MediaItems[2].Url);

    return (
      <Slider {...this.settings} >
        {images.map(src => <div key={src}><img src={src} width={300} alt="" /></div>)}
      </Slider>
    )
  }
}