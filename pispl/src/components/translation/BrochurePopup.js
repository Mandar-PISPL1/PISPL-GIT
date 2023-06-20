import React, { useState } from 'react'
import pdfFile from '../assets/Parikh-Info-Solutions.pdf'
export default function BrochurePopup() {
  const [isFormValid, setFormValid] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    // Update the form validity based on the input values
    // setFormValid(name === 'Email' && value !== '' && document.querySelector('input[name="Phonenumber"]').value !== '');
    setFormValid(true)
  }
  // https://script.google.com/macros/s/AKfycbyr7ua73kI2xPsfsjzfNj8YFUHSXuFBt0Zkzmc5Y-TDWgJVWKY3qL4D8jxNvBiJkGFQ/exec

  function Submit(e) {
    const formEle = document.querySelector("form");
    console.log(formEle);
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyr7ua73kI2xPsfsjzfNj8YFUHSXuFBt0Zkzmc5Y-TDWgJVWKY3qL4D8jxNvBiJkGFQ/exec",

      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const openPDFInNewTab = () => {

    const pdfPath = process.env.PUBLIC_URL + pdfFile;
    window.open(pdfPath, '_blank');
  }
  const buttonstyle = {
    color: "white",
    backgroundColor: "#0d2366",
    fontSize: "20px",
    width: "90%",
    height: "3rem",
    borderRadius: "5px",
    border: "0px",
  }
  const inputStyle = {
    padding: " 11px 5px",
    borderRadius: "11px",
    border: "0px",
    width: " 97%",
  }
  return (
    <>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ backgroundColor: "#49dab5" }}>
              <div className="modal-header d-flex flex-column justify-content-center align-items-center" style={{ border: "0px", color: "#0d2366", fontWeight: "600" }}>
                <h3 className="modal-title" id="exampleModalLabel">Get the FREE Brochure</h3>
                <button type="button" className="btn-close" style={{ position: "relative", top: "-48px", right: " -8px" }} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body px-4" >
                <p className='mb-1'>Email Address </p>
                <input required style={inputStyle} name="Email" type='email' onChange={handleInputChange} />
                <p className='mb-1 mt-3'>Phone Number</p>
                <input
                  style={inputStyle} name="Phonenumber" type='text' onChange={handleInputChange} />
              </div>
              <div className="modal-footer d-flex justify-content-center" style={{ border: "0px" }}>

                <button type="submit" onClick={openPDFInNewTab} style={buttonstyle} className="btn btn-primary mb-3" disabled={!isFormValid}>Save changes</button>
              </div>

              

            </div>
          </div>
        </div>
      </form>
    </>
  )
}
