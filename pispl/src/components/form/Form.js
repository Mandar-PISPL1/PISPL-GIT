import React, { useState } from "react";
// import styled from './Form.module.css'
import axios from "axios";
import emailjs from '@emailjs/browser';
export default function Form() {
    const btnStyle={
        width: "100%",
        fontSize:" 24px",
        fontWeight:" 500",
        backgroundColor:"#0d3266",
        borderRadius:"5px",
        border:"none"
    }
 
    const [formValue,setFormValue] = useState(
        {
            email:"",
            name:"",
            companyname:"",
            countrycode:"",
            mobilenumber:"",
            briefdetails:""
        });

    
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormValue({...formValue,[name]:value})
        
    }
    // For adding data in the google sheet
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://sheet.best/api/sheets/962023ab-672e-41c9-b86e-be6e23e381a0',formValue).then((response)=>{
            console.log(response);

        })
        
        setFormValue(
            {
                email:"",
                name:"",
                companyname:"",
                mobilenumber:"",
                briefdetails:""
            }
        )
       

    }

    return (
        <>
            <div
                className="container-sm"
                style={{ marginTop: "50px" ,width:"100%",color:"#0d2366"}}
            >
                <form  onSubmit={handleSubmit}>
                    <h5 className="mb-3" style={{fontWeight:"600"}}>Get free support and quote on your email. Please submit the form to get in touch with us.</h5>
                    <div className="mb-3 normal-text">
                        <label htmlFor="email" className="form-label">
                            Email address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            className="form-control"
                            
                            id="email"
                            value={formValue.email}
                            onChange={handleChange}
                            required="required"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            autoComplete="off"
                            id="name"
                            className="form-control"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyname" className="form-label">
                            Company Name *
                        </label>
                        <input
                            type="name"
                            id="companyname"
                            name="companyname"
                            autoComplete="off"
                            className="form-control"
                            value={formValue.companyname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=" mb-3 d-flex">
                        <div className="col-md-4">
                            <label htmlFor="countrycode" className="form-label">
                                County Code
                            </label>
                            <select className="form-select" aria-label="Default select example" name="countrycode" onChange={handleChange}>
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
                                id="mobilenumber"
                                name="mobilenumber"
                                autoComplete="off"
                                className="form-control"
                                value={formValue.mobilenumber}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="briefdetails" className="form-label">
                            Please give brief details about your requirements *
                        </label>
                        <div >
                            <textarea className="form-control" required="required" style={{height: "100px"}} value={formValue.briefdetails} onChange={handleChange} name="briefdetails" autoComplete="off"></textarea>
                           
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit"   style={btnStyle} className="btn btn-primary">Send Enquiry
                        <i aria-hidden="true" class="fas fa-location-arrow mx-2
                        "></i></button>
                        
                    </div>
                </form>
            </div>
        </>
    );
}
