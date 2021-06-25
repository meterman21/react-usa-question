import React from 'react'

const QuestionCard = ({question, stateAns}) => {
    return (
        <>
            <div className="card">
                <p>{Object.keys(question)}</p>
            </div>
            <div className={`card ${stateAns ? 'hidden' : ''}`}>
                <ul>
                {
                        Object.values(question)[0].map((item, index) => <li key={index}>{item}</li>)
                }
                </ul>
            </div>  
        </>
    )
}

export default QuestionCard
