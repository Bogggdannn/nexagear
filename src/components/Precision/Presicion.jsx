import './Precision.scss'

export function Precision() {
    return (
        <section className='precision container'>
            <h1 className='precision-title'>Precision at<br /> Your Fingertips</h1>
            <p className='precision-paragraph'>Experience ultra-responsive keystrokes, competitive edge with our<br /> high-DPI,
                feel the power of immersive gaming with our responsive and<br /> highly durable joysticks, and many more.</p>
            <div className='precision-images'>
                <div className='precision-images-gamepads'>
                    <div className='gamepad-image precision-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='gamepad-title'>Gamepads</p>
                    <p className='gamepad-paragraph'>22 product available</p>
                </div>
                <div className='precision-images-keyboards'>
                    <div className='keyboards-image precision-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='keyboard-title'>Keyboards</p>
                    <p className='keyboard-paragraph'>18 product available</p>
                </div>
                <div className='precision-images-mouse'>
                    <div className='mouse-image precision-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='mouse-title'>Gaming Mouse</p>
                    <p className='mouse-paragraph'>38 product available</p>
                </div>
                <div className='precision-images-headphone'>
                    <div className='headphone-image precision-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                    <p className='headphones-title'>Headphones</p>
                    <p className='headphones-paragraph'>38 product available</p>
                </div>
            </div>
        </section>
    )
}