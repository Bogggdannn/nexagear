import {useRef, useState} from "react"
import "./Questions.scss"
import { Button } from '../Button/Button';

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <div className="rc-accordion-icon"></div>
                    <img src="/images/line.png" alt="" className=""/>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}
export function Questions() {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }



    const faqs = [
        {
            id: 1,
            header: "Are NexaGear products compatible with all gaming platforms?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
        {
            id: 2,
            header: "Do your products come with a warranty?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
        {
            id: 3,
            header: "Can I customize the RGB lighting on your keyboards and mice?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
        {
            id: 4,
            header: "How can I track my order?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
                {
            id: 5,
            header: "Do you offer international shipping?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        }
    ]


    return (
        <section className="container questions">
            <h1 className="questions-title">Got Questions?<br/> We’ve Got Answers!</h1>
            <p className="questions-paragraph">We know gamers need quick and reliable support. Here are some of<br/> the most frequently asked questions about NexaGear products.</p>
            <div>
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                    )
                })
                }
                <Button mod='primary' className='questions-button'>View All</Button>
            </div>
        </section>
    )
}