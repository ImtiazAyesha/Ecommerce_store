export const Faq = ({ curData, onToggle, isActive }) => {
    const { question, answer } = curData;
    return (
        <li>
            <div className="accordion-grid">
                <p className="accordion-question">{question}</p>
                <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
                    {isActive ? "-" : "+"}
                </button>
            </div>
            <p>{isActive && answer}</p>
        </li>
    );
};
