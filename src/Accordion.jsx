import React, { useState } from 'react';
import './accordion.css';
import iconStar from './assets/icon-star.svg';
import iconPlus from './assets/icon-plus.svg';
import iconMinus from './assets/icon-minus.svg';
function Accordion() {
    const faq = [
        {
            question: 'What is Frontend and how will it help me?',
            answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
        },
        {
            question: 'Is Frontend Mentor free?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi explicabo magnam sint debitis maxime, vitae minima mollitia maiores beatae omnis magni ea aspernatur? Quod?'
        },
        {
            question: 'Can I use Frontend Mentor project inmy portfolio?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi explicabo magnam sint debitis maxime, vitae minima mollitia maiores beatae omnis magni ea aspernatur? Quod?'
        },
        {
            question: 'How can I get help if I\'m stuck on a challenge?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi explicabo magnam sint debitis maxime, vitae minima mollitia maiores beatae omnis magni ea aspernatur? Quod?'
        }
    ]

    const [activeIndex, setIndex] = useState(null);

    const toggleAccordion = (index) => {
        setIndex((preValue) => {
            return preValue === index ? null : index;

        })
    }


    return (
        <>
            <div className='accordion'>
                <section className='accordion-heading'>
                    <img src={iconStar} alt="" />
                    <h1>FAQs</h1>
                </section>

                <ul >
                    {faq.map((item, index) => (
                        <li className='accordion-list'>
                            <div className='accordion-question' onClick={() => { toggleAccordion(index) }}>
                                <h2>{item.question}</h2>
                                <img src={activeIndex === index ? iconMinus : iconPlus} alt="" />
                            </div>
                            <div className={`accordion-answer ${activeIndex === index ? 'visible' : ''}`}>
                                <div >
                                    {item.answer}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div >
        </>
    )
}

export default Accordion
