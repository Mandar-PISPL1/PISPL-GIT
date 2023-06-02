import React from 'react'

export default function Pg5() {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Adaptation Rate (Per Word)
                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Book Translation Rate (Per Page)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">
                    Proofreading Rate (Per Word)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">QA / Review Rate (Per Hour)
                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Your daily translation output (Number of Words Per Day) </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
        </>
    )
}
