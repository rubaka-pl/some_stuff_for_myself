import { useState } from "react";

function FlashCards({ questions }) {

    const [selectedId, setSelectedId] = useState(null)
    // при клике получаем id из обьекта
    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null)
    }

    return <div className="flashcards">
        {questions.map(question =>
            <div
                key={question.id}
                onClick={() => handleClick(question.id)}
                className={question.id === selectedId ? 'selected' : ''}
            >
                {/* если id такое же как в обьекте то тогда высветли ответ, а если нет то вопрос */}
                <p>{question.id === selectedId ? question.answer : question.question}</p>
            </div>
        )}
    </div>;
}


export default FlashCards