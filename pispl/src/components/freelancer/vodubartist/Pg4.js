import React from 'react'

export default function Pg4() {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">
                    Rate for Documentary / TV Shows (Up to 45 Min)
                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Rate for Documentary / TV Shows (Every Extra Minute after 45 Min)
</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>

        </>
    )
}
