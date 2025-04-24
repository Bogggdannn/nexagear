import { useState, useEffect } from 'react';
import './Gear.scss'
import cn from 'classnames';
import { Button } from '../Button/Button';


export function Gear() {
    const [cards, setCards] = useState([
    {
        title: 'NexaGear TitanX Pro',
        price: '$69.99',
        colors: ['#1F1F1F', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gamepads'
    },
    {
        title: 'NexaGear PhantomEdge',
        price: '$59.99',
        colors: ['#ADC6D9', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gamepads'
    },
    {
        title: 'NexaGear HyperStrike X',
        price: '$79.99',
        colors: ['#F4F0E7', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'keyboards'
    },
    {
        title: 'NexaGear ShadowGrip E..',
        price: '$54.99',
        colors: ['#0EDCF9', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'keyboards'
    },
    {
        title: 'NexaGear ApexVortex',
        price: '$89.99',
        colors: ['#ECEFF6', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gaming mouse'
    },
    {
        title: 'NexaGear ThunderPulse',
        price: '$64.99',
        colors: ['#EFF0F2', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gaming mouse'
    },
    {
        title: 'NexaGear VelocityCore',
        price: '$79.99',
        colors: ['#272727', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'headphones'
    },
    {
        title: 'NexaGear AlphaFusion',
        price: '$99.99',
        colors: ['#FD583A', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'headphones'
    },
    {
        title: 'NexaGear TitanX Pro',
        price: '$69.99',
        colors: ['#1F1F1F', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gamepads'
    },
    {
        title: 'NexaGear PhantomEdge',
        price: '$59.99',
        colors: ['#ADC6D9', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gamepads'
    },
    {
        title: 'NexaGear HyperStrike X',
        price: '$79.99',
        colors: ['#F4F0E7', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'keyboards'
    },
    {
        title: 'NexaGear ShadowGrip E..',
        price: '$54.99',
        colors: ['#0EDCF9', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'keyboards'
    },
    {
        title: 'NexaGear ApexVortex',
        price: '$89.99',
        colors: ['#ECEFF6', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gaming mouse'
    },
    {
        title: 'NexaGear ThunderPulse',
        price: '$64.99',
        colors: ['#EFF0F2', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'gaming mouse'
    },
    {
        title: 'NexaGear VelocityCore',
        price: '$79.99',
        colors: ['#272727', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'headphones'
    },
    {
        title: 'NexaGear AlphaFusion',
        price: '$99.99',
        colors: ['#FD583A', '#A2A7AF', '#635C41'],
        activeColor: '',
        category:'headphones'
    }
])

    const [sortedCards, setSortedCards] = useState([])
    const [sortedType, setSortedType] = useState('Gamepads')
    useEffect(()=>{
        setSortedCards(cards.filter((item) => item.category === sortedType.toLowerCase()))
    }, [sortedType])

    function setActiveColor(index,value){

        setCards(prevArray => {
            prevArray[index].activeColor = value
            return [...prevArray]
        })
    }
    return (
        <section className="gear container">
            <h1 className='gear-title'>Gear Up for Victory</h1>
            <p className='gear-paragraph'> Looking for more? NexaGear has a full lineup of gaming accessories,
                from mousepads to <br /> headsets, that bring comfort, precision, and style to your setup.</p>
            <div>
                <Button mod='high' onClick={()=>   setSortedType('Gamepads')}>Gamepads</Button>
                <Button mod='high' onClick={()=>   setSortedType('Keyboards')}>Keyboards</Button>
                <Button mod='high' onClick={()=>   setSortedType('Gaming Mouse')}>Gaming Mouse</Button>
                <Button mod='high' onClick={()=>   setSortedType('Headphones')}>Headphones</Button>
            </div>
            <div className='gear-images'>
                {sortedCards.map((item,index) => {
                    return <div  key={index}>
                        <div className='gear-images-sign'>
                            <div className='gamepad-image gear-image-box'><img src="/images/mouse.jpg" alt="" /></div>
                            <p className='gear-title-sign'>{item.title}</p>
                            <p className='gear-paragraph-sign'>{item.price}</p>
                            <div className='gear-images-sign-icon-parent'>
                                <div className='gear-circles'>
                                    {item.colors.map((color, colorIndex)=>{
                                        return <div
                                        className={cn("gear-circle", {[	'gear-circle-active']: item.activeColor === color})}
                                        style={{backgroundColor:`${color}`}}
                                        key={colorIndex}
                                        onClick={()=>{setActiveColor(index,color)}}
                                        >

                                        </div>  
                                    })}

                                </div>
                                <img src="/icons/gearArrow.svg" alt="" className='gear-images-sign-icon' />
                            </div>
                        </div>
                    </div>
                })}
                
            </div>
            <div className='gear-btn'><Button mod='primary' className='gear-btn-more'>Show More</Button></div>
        </section>
    )
}