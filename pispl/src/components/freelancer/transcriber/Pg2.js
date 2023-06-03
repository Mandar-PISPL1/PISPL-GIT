import React from 'react'

export default function Pg2() {
    const btnStyle = {
        width: "100%",
        fontSize: "24px",
        color: "#0d2366",
        fontWeight: " 500",
        backgroundColor: "#49dab5",
        borderRadius: "0",
        border: "none"
      }
  return (
    <>
        
          <div className="row my-2">
            <div className="col-12">
            <label for="exampleFormControlSelect1" className="pb-2 normal-text">Qualification <span style={{color: "red"}}>*</span></label>
            <select class="form-select form-select-lg" id="exampleFormControlSelect1">
              <option>Under Graduate</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
              <option>Diploma</option>
            </select>
            </div>
          </div> 

          <div className="row my-2">
            <div className="col-12">
              <label for="exampleFormControlSelect1" className="pb-2 normal-text">Stream <span style={{color: "red"}}>*</span></label>
              <select class="form-select form-select-lg" id="exampleFormControlSelect1">
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                <option value="IT">IT</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          
    
     
    </>
  )
}
