import "./Slider.scss"
import Slider from "react-slick";

export function SliderDefault() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
    return (
        <div className="head-slider">
            <Slider {...settings}>
                <div className="slide">
                    <img src="/images/mouse.jpg" alt="" />
                    <div className="slide-content"></div>
                </div>
                <div className="slide">
                    <h3>1</h3>
                </div>
            </Slider>
        </div>
    )
}