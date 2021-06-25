import React from 'react'

const Button = ({backBtn, nextBtn, stateAns}) => {
    return (
        <>
            <div className="buttons-container">
                <div className="button" onClick={backBtn}>
                    <h2>Back</h2>
                </div>
                <div className="button" onClick={nextBtn}>
                    <h2>{stateAns ? 'Answer' : 'Next'}</h2>
                </div>
            </div>
        </>
    )
}

export default Button
