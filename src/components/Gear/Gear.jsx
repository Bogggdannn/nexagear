import './Gear.scss'

export function Gear(){
    return(
        <section className="gear container">
            <h1 className='gear-title'>Gear Up for Victory</h1>
            <p className='gear-paragraph'> Looking for more? NexaGear has a full lineup of gaming accessories,
                 from mousepads to <br/> headsets, that bring comfort, precision, and style to your setup.</p>
            <div className='gear-images'>
                <div className='gear-images-gamepads'>
                    <div className='gamepad-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='gamepad-title'>Gamepads</p>
                    <p className='gamepad-paragraph'>22 product available</p>
                </div>
                <div className='gear-images-keyboards'>
                    <div className='keyboards-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='keyboard-title'>Keyboards</p>
                    <p className='keyboard-paragraph'>18 product available</p>
                </div>
                <div className='gear-images-mouse'>
                    <div className='mouse-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='mouse-title'>Gaming Mouse</p>
                    <p className='mouse-paragraph'>38 product available</p>
                </div>
                <div className='gear-images-headphone'>
                    <div className='headphone-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='headphones-title'>Headphones</p>
                    <p className='headphones-paragraph'>38 product available</p>
                </div>
            </div>
        </section>
    )
}