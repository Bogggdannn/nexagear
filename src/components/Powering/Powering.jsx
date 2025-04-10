import './Powering.scss'
import { Button } from "../Button/Button"

export function Powering() {
    return (
        <section className="powering">
            <div className="powering-socials">
                <img src="/images/mouse.jpg" alt="" className='socials-img' />
                <img src="/icons/googleIcon.svg" alt="" className='socials-icons' />
                <img src="/icons/facebookIcon.svg" alt="" className='socials-icons' />
                <img src="/icons/twitterIcon.svg" alt="" className='socials-icons' />
                <img src="/icons/instagramIcon.svg" alt="" className='socials-icons' />
            </div>
            <div className="powering-content">
                <h1 className='powering-content-title'>Powering Gamers, One Click at a Time</h1>
                <p className='powering-content-paragraph'>At NexaGear, we believe gaming is more than just a hobby—it’s a lifestyle.
                    That’s why we craft high-performance gaming peripherals with superior quality, advanced technology, and ergonomic designs.</p>
                <hr className='powering-content-line'/>
                <div className='powering-content-advantages'>
                    <p>
                        <span>100+</span><br/>
                        <span>Gaming Gear</span>
                    </p>
                    <p>
                        <span>244+</span><br/>
                        <span>Review Customer</span>
                    </p>
                    <p>
                        <span>100k+</span><br/>
                        <span>Customer Happy</span>
                    </p>
                </div>
                    <Button mod='primary' className='powering-content-button'> Read More</Button>
            </div>
        </section>
        
    )
}