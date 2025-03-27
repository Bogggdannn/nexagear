import { Button } from "../Button/Button"
import { SliderDefault } from "../Slider/Slider"
import "./Head.scss"

export function Head() {
    return (
        <section className="container">
            <div className="head-parent">
                <div className="head-content">
                    <h1 className="head-title">Unleash Your Ultimate Gaming Potential</h1>
                    <h2 className="head-text">Dominate every battle, master every move, and elevate your gameplay with NexaGear.
                        Our cutting-edge gaming accessories are designed to give you the precision, speed, and comfort you need to stay ahead of the competition.
                        Level up now!
                    </h2>
                    <div className="head-actions">
                        <Button mod='primary'>Shop Now</Button>
                        <Button mod='secondary'>Learn More</Button>
                    </div>
                </div>
                <div className="head-slider">
                    <SliderDefault/>
                </div>
            </div>
        </section>
    )
}