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
            <Slider className="slider"{...settings}>
                <div className="slide">
                    <img src="/images/mouse.jpg" alt="" className="slide-head-img" />
                    <div className="slide-content">
                        <div className="slider-get-now">Get<br/> Now</div>
                        <div className="slider-information">               
                            <p className="slider-price">$89,00</p>
                            <p className="slider-text-content">GForce Gen 3 Consoles</p></div>
                    </div>
                </div>
                <div className="slide">
                    <h3>1</h3>
                </div>
            </Slider>
        </div>
    )
}