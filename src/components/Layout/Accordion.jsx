import { useEffect, useState } from "react";
import { Faq } from "./UI/Faq";
import faq from "../../api/faq.json";

export const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);

    useEffect(() => {
        setData(faq); // Load FAQ data
    }, []);

    const handleToggleButton = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id)); // Toggle active state
    };

    return (
        <>
            <section className="faq-section container">
            <h1>FAQ Section</h1>
            <ul className="section-accordion">
                {data.map((curElem) => {
                    return (
                        <Faq 
                            key={curElem.id}
                            curData={curElem}
                            isActive={activeId === curElem.id}
                            onToggle={() => handleToggleButton(curElem.id)} 
                        />
                    );
                })}
            </ul>
            </section>
        </>
    );
};
