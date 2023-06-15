import React from 'react'

export default function Pg3() {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Your Native Language</label>
                <select class="form-select form-select-lg" id="exampleFormControlSelect1">
                    <option>INR</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBR</option>

                </select>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Simultaneous Interpretation Rate (Per Day)

                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Consecutive Interpretation Rate (Per Day)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            
        </>
    )
}
