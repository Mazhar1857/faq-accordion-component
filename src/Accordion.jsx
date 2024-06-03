import React, { useEffect, useState } from 'react';
import './accordion.css';
import iconStar from './assets/icon-star.svg';
import iconPlus from './assets/icon-plus.svg';
import iconMinus from './assets/icon-minus.svg';
import { faq } from './data.js';
function Accordion() {

    const [activeIndex, setIndex] = useState(faq.map((item) => ({ ...item, isActive: false })));
    const toggleAccordion = (index) => {
        setIndex((prevActiveIndex) => {
            return prevActiveIndex.map((item, idx) => {
                return idx === index ? { ...item, isActive: !item.isActive } : item;
            });
        });
    };


    return (
        <>
            <div className='accordion'>
                <section className='accordion-heading'>
                    <img src={iconStar} alt="" />
                    <h1>FAQs</h1>
                </section>

                <ul >
                    {faq.map((item, index) => (
                        <li className='accordion-list' key={index}>
                            <div className='accordion-question' onClick={() => { toggleAccordion(index) }}>
                                <h2>{item.question}</h2>
                                <img src={activeIndex[index].isActive === true ? iconMinus : iconPlus} alt="" />
                            </div>
                            <div className={`accordion-answer ${activeIndex[index].isActive === true ? 'visible' : ''}`}>
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