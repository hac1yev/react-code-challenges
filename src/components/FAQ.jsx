import { useState } from "react";

const faqs = [
    { id: 'q1', question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase.' },
    { id: 'q2', question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in your email.' },
    { id: 'q3', question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries around the world.' }
];

export default function FAQ() {
    const [faqId,setFaqId] = useState("");

    const handleClick = (id) => {
        if(faqId !== id) {
            setFaqId(id);
        }else{
            setFaqId("");
        }
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '30px' }}>FAQ Accordion</h2>
            {faqs.map((faq,index) => (
                <div key={index}>
                    <h4 onClick={() => handleClick(faq.id)}>{faq.question}</h4>
                    {faqId === faq.id && <p>{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
}