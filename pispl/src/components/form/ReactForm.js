import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ReactForm = () => {

    const btnStyle={
        width: "100%",
        fontSize:" 24px",
        fontWeight:" 500",
        backgroundColor:"#0d3266",
        borderRadius:"5px",
        border:"none"
    }    

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2bethb', 'template_nek1mvm', form.current, '5sH2SEGLWixZ3RicY')
      .then((result) => {
          console.log(result.text);
          console.log("Email Sent Succesfully.");
      }, (error) => {
          console.log(error.text);
          console.log("Email Not Sent.");
      });
  };


  return (
          <div className="container-sm" style={{ marginTop: "50px", width: "100%", color: "#0d2366" }}>
          <form ref={form} onSubmit={sendEmail}>
              <h5 className="mb-3" style={{ fontWeight: "600" }}>Get free support and quote on your email. Please submit the form to get in touch with us.</h5>
              <div className="mb-3 normal-text">
                  <label htmlFor="email" className="form-label">
                      Email address *
                  </label>
                  <input
                      type="email"
                      name="email_address"
                      autoComplete="off"
                      className="form-control"
                      id="email"
                      required="required"
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                      Full Name
                  </label>
                  <input
                      type="text"
                      name="full_name"
                      autoComplete="off"
                      id="full_name"
                      className="form-control"
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="companyname" className="form-label">
                      Company Name *
                  </label>
                  <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      autoComplete="off"
                      className="form-control"
                  />
              </div>
              <div className=" mb-3 d-flex">
                  <div className="col-md-4">
                      <label htmlFor="countrycode" className="form-label">
                          County Code
                      </label>
                      <select className="form-select" aria-label="Default select example" name="country_code">
                          {/* <option value="" >Select country code</option> */}
                          <option value="India (+91)" >India (+91)</option>
                          <option value="Andorra (+376)">Andorra (+376)</option>
                          <option value="Angola (+244)">Angola (+244)</option>
                      </select>
                  </div>
                  <div className="col-md-8 mx-1" >
                      <label htmlFor="mobilenumber" className="form-label">
                          Mobile/Whatsapp Number
                      </label>
                      <input
                          type="name"
                          id="phone_number"
                          name="phone_number"
                          autoComplete="off"
                          className="form-control"
                      />
                  </div>

              </div>
              <div className="mb-3">
                  <label htmlFor="briefdetails" className="form-label">
                      Please give brief details about your requirements *
                  </label>
                  <div >
                      <textarea className="form-control" required="required" style={{ height: "100px" }} name="project_details" autoComplete="off"></textarea>

                  </div>
              </div>
              <div className="mb-3">
                  <button type="submit" style={btnStyle} className="btn btn-primary">Send Enquiry
                      <i aria-hidden="true" class="fas fa-location-arrow mx-2
                        "></i></button>

              </div>
          </form>
      </div>
  )
}

export default ReactForm