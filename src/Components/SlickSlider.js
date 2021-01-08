import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickSlider extends Component {

render() {
var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 4,
initialSlide: 2,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
initialSlide: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
};

return (
<div className="container mb-5">
  <Slider {...settings}>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Soul</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/hTAIqYYXDHqe8xPFV5cH4ElxCqb.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Tenet</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/z4qgLq57TKN7TLWHsNZZmCZOY4d.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Lupin</h5>
          <p class="card-text">In this contemporary version of Arsene Lupin (Once a Thief in US), Omar Sy embodies the
            famous gentleman burgla...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/qkCh6cFSHikSIFTWUQyJ2qJzqsy.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Vikings</h5>
          <p class="card-text">The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the
            sagas of Ragnar's...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/dzAwoFc87V2zku5FqYoijKfCOvh.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Coyote</h5>
          <p class="card-text">The story of Ben Clemens, who after 32 years as a border patrol agent is forced to work
            for the very people...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="card mr-1">
        <img src={`https://www.themoviedb.org/t/p/w500/mtDYMa2inpJjxq2DjELPXbtf02v.jpg`} className="card-img-top"
          alt="Search Top İmg" />
        <div class="card-body">
          <h5 class="card-title">Run</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
  </Slider>
</div>
);
}
}