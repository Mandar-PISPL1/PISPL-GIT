import React from 'react'

export default function Pg3() {
  return (
    <>
        <div className="row my-2">
            <div className="col-12">
              <label for="exampleFormControlSelect1" className="pb-2 normal-text">Native Language <span style={{color: "red"}}>*</span></label>
              <select class="form-select form-select-lg" id="exampleFormControlSelect1">
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                <option value="IT">IT</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-12">
              <label for="exampleFormControlSelect1" className="pb-2 normal-text">Currency<span style={{color: "red"}}>*</span></label>
              <select class="form-select form-select-lg" id="exampleFormControlSelect1">
                <option value="Science">INR</option>
                <option value="Commerce">USD</option>
                <option value="Arts">GRB</option>
                <option value="IT">EUR</option>
              </select>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">
                Rate for TV Commercials / On Air Promos (Up to 60 sec)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Rate for Radio Commercials / Promos (Up to 60 sec)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            
    </>
  )
}
