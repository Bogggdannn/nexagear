import {useRef, useState} from "react"
import "./Questions.scss"

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
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
            header: "Where does it come from?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
        {
            id: 3,
            header: "Why do we use it?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        },
        {
            id: 4,
            header: "Where can I get some?",
            text: `Yes! Our keyboards, mice, and joysticks are designed to work with PC, Mac, and major gaming consoles.`
        }
    ]


    return (
        <section className="container questions">
            <h1 className="questions-title">Got Questions? We’ve Got Answers!</h1>
            <p className="questions-paragraph">We know gamers need quick and reliable support. Here are some of the most frequently asked questions about NexaGear products.</p>
            <div>
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                    )
                })
                }
            </div>
        </section>
    )
}