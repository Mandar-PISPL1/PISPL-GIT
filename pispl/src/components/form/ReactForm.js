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
    const [formValue,setFormValue] = useState(
        {
            email_address:"",
            full_name:"",
            full_name:"",
            country_code:"",
            phone_number:"",
            project_details:""
        });
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormValue({...formValue,[name]:value})

    }

    const form = useRef();

    const sendEmail = (e) => {
        const formEle = document.querySelector("form");
        e.preventDefault();
        console.log("submitted")
        const formData =new FormData(formEle)
        fetch("https://script.google.com/a/macros/parikhinfosolutions.com/s/AKfycbyGl-dXnvb8rAHy_HwdRwY__FsyV3MFxUWd_MFNPand8X8GRtJsUqfJ0N0O6MZ2VvAO/exec",{
            method:"POST",
            body:formData
        })
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
    // console.log(formValue)


    return (
        <div className="container-sm"  style={{ marginTop: "50px", width: "100%", color: "#0d2366" }}>
            <form ref={form} onSubmit={sendEmail} className="form">
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
                        value={formValue.email_address}
                        onChange={handleChange}
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
                        // id="full_name"
                        className="form-control"
                        value={formValue.full_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        name="company_name"
                        autoComplete="off"
                        className="form-control"
                        value={formValue.company_name}
                        onChange={handleChange}
                    />
                </div>
                <div className=" mb-3 d-flex">
                    <div className="col-md-4">
                        <label htmlFor="countrycode" className="form-label">
                            County Code
                        </label>
                        <select className="form-select" aria-label="Default select example" name="country_code" onChange={handleChange}>
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
                            value={formValue.phone_number}
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor="briefdetails" className="form-label">
                        Please give brief details about your requirements *
                    </label>
                    <div >
                        <textarea className="form-control" required="required" style={{ height: "100px" }} name="project_details" autoComplete="off" value={formValue.project_details} onChange={handleChange}></textarea>

                    </div>
                </div>
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