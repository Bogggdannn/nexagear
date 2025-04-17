import './Gear.scss'

export function Gear() {
    let cards = [
        {
            title: 'NexaGear TitanX Pro',
            price: '$69.99',
            colors: ['#1F1F1F', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear PhantomEdge',
            price: '$59.99',
            colors: ['#ADC6D9', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear HyperStrike X',
            price: '$79.99',
            colors: ['#F4F0E7', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear ShadowGrip E..',
            price: '$54.99',
            colors: ['#0EDCF9', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear ApexVortex',
            price: '$89.99',
            colors: ['#ECEFF6', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear ThunderPulse',
            price: '$64.99',
            colors: ['#EFF0F2', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear VelocityCore',
            price: '$79.99',
            colors: ['#272727', '#A2A7AF', '#635C41'],
            activeColor: ''
        },
        {
            title: 'NexaGear AlphaFusion',
            price: '$99.99',
            colors: ['#FD583A', '#A2A7AF', '#635C41'],
            activeColor: ''
        }
    ]
    return (
        <section className="gear container">
            <h1 className='gear-title'>Gear Up for Victory</h1>
            <p className='gear-paragraph'> Looking for more? NexaGear has a full lineup of gaming accessories,
                from mousepads to <br /> headsets, that bring comfort, precision, and style to your setup.</p>
            <div className='gear-images'>
                {cards.map(item => {
                    return <>
                        <div className='gear-images-sign'>
                            <div className='gamepad-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                            <p className='gear-title-sign'>NexaGear TitanX Pro</p>
                            <p className='gear-paragraph-sign'>$69.99</p>
                            <div className='gear-images-sign-icon-parent'>
                                <div className='gear-circles'>
                                    <div className='gear-circle gear-circle-active'></div>
                                    <div className='gear-circle'></div>
                                    <div className='gear-circle'></div>
                                </div>
                                <img src="/icons/gearArrow.svg" alt="" className='gear-images-sign-icon' />
                            </div>
                        </div>
                    </>
                })}
            </div>

        </section>
    )
}