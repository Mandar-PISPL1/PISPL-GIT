import React, { useRef,useState } from 'react';
// import emailjs from '@emailjs/browser';
// import axios from "axios";
const ReactForm = () => {
    

    const btnStyle = {
        width: "100%",
        fontSize: " 24px",
        fontWeight: " 500",
        backgroundColor: "#0d3266",
        borderRadius: "5px",
        border: "none"
    }
    // const [formValue,setFormValue] = useState(
    //     {
    //         email_address:"",
    //         full_name:"",
    //         full_name:"",
    //         country_code:"",
    //         phone_number:"",
    //         project_details:""
    //     });
    // const handleChange =(e)=>{
    //     const name=e.target.name;
    //     const value=e.target.value;
    //     setFormValue({...formValue,[name]:value})

    // }

    const form = useRef();

    const sendEmail = (e) => {
        const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
        // before deploying 2nd time
        // https://script.google.com/macros/s/AKfycbyqIZRlJ5-oTjSQt8qy1uordtapR7MJ72JwxZXZdZuamhpcT1dfTNPOgiHpC6hM8PH1Gg/exec
      "https://script.google.com/macros/s/AKfycbzfA_gBHnfD70FzwMCs6CVHmLQFmUqSqnN9YhCj7cYAfzKNoIAOIAwtPYMFj0yqR8rXMQ/exec",
    //   after deploy again
    //   https://script.google.com/macros/s/AKfycbzfA_gBHnfD70FzwMCs6CVHmLQFmUqSqnN9YhCj7cYAfzKNoIAOIAwtPYMFj0yqR8rXMQ/exec
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


        //email
        // axios.post('https://sheet.best/api/sheets/962023ab-672e-41c9-b86e-be6e23e381a0',formValue).then((response)=>{
        //     console.log(response);

        // })
        

        // emailjs.sendForm('service_a2bethb', 'template_nek1mvm', form.current, '5sH2SEGLWixZ3RicY')
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("Email Sent Succesfully.");
        //     }, (error) => {
        //         console.log(error.text);
        //         console.log("Email Not Sent.");
        // });
        


    };



    return (
        <div className="container-sm"  style={{ marginTop: "50px", width: "100%", color: "#0d2366" }}>
            <form ref={form} onSubmit={(e) => sendEmail(e)} className="form">
                <h5 className="mb-3" style={{ fontWeight: "600" }}>Get free support and quote on your email. Please submit the form to get in touch with us.</h5>
                <div className="mb-3 normal-text">
                    <label htmlFor="email" className="form-label">
                        Email address *
                    </label>
                    <input
                        type="email"
                        name="Emailaddress"
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
                        name="Fullname"
                        autoComplete="off"
                        // id="full_name"
                        className="form-control"
                        
                    />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        name="Companyname"
                        autoComplete="off"
                        className="form-control"
                        
                    />
                </div> */}
                {/* <div className=" mb-3 d-flex">
                    <div className="col-md-4">
                        <label htmlFor="countrycode" className="form-label">
                            County Code
                        </label>
                        <select className="form-select" aria-label="Default select example" name="Country_code" >
                            <option value="" >Select country code</option>
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
                            name="Mobile_number"
                            autoComplete="off"
                            className="form-control"
                            
                        />
                    </div>

                </div> */}
                {/* <div className="mb-3">
                    <label htmlFor="Briefdetails" className="form-label">
                        Please give brief details about your requirements *
                    </label>
                    <div >
                        <textarea className="form-control" required="required" style={{ height: "100px" }} name="Project_details" autoComplete="off"  ></textarea>

                    </div>
                </div> */}
                <div className="mb-3">
                    <button type="submit" style={btnStyle} className="btn btn-primary">Send Enquiry
                        <i aria-hidden="true" className="fas fa-location-arrow mx-2
                        "></i></button>

                </div>
            </form>
        </div>
    )
}

export default ReactForm