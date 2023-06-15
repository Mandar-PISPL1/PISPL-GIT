import React from 'react'
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function PhishingAlert() {
  return (
    <>
        {/* Phishing Alert Notice */}
        <div className="container py-5">
            <div className="row px-md-5">
            <div className="col-2 d-flex align-items-center justify-content-center">
                <BsFillExclamationTriangleFill style={{ fontSize: '84px', color: '#ff0000' }}/>
            </div>
            <div className='col-10'>
            <h3 className='' style={{ color: "#ff0000", fontWeight: "700" }}>Note:</h3>
            <p style={{ color: "#ff0000" }}>Please note that all our communication with vendors and clients is through our official company domain (@parikhinfosolutions.com) only and no other email ids. Beware of scamsters sending phishing emails from fake email ids.</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default PhishingAlert