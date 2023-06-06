import React, { useState } from "react";
import Pg1 from './Pg1'
import Pg2 from './Pg2'
import Pg3 from './Pg3'
import Pg4 from './Pg4'
import ProgressBar from "../ProgressBar";

export default function Transcriber() {
  const btnStyle = {
    width: "100%",
    fontSize: "24px",
    color: "#0d2366",
    fontWeight: " 500",
    backgroundColor: "#49dab5",
    borderRadius: "0",
    border: "none"
  }
  const [page,setPage]=useState(1);
  const [formValue,setFormValue] = useState({
      first_name:"",
      last_name:"",
      country_code:"",
      phone_number:"",
      primary_email:"",
      alternative_email:"",
      Skype_Zoom_ID_Hangout_Whatsapp:"",
      gender:"",
      stream:"",
      native_language:"",
      currency:"",
      language_transcription_rate_per_minute :"",
      direct_native_to_english_rate_per_minute :"",
      direct_transcription_output_rate_per_minute :"",
      Do_you_work_on_weekends:"",
      attachment:"",

  })
  const [a,setA]=useState(true);
  const next =()=>{
    if(page>=6){
      setPage(page)
    }
    else{
      setPage(page+1)
    }
  }
  const prev =()=>{
    if(page<=1){
      setPage(page)
    }
    else{
      setPage(page-1)
    }
  }
  const calculateProgress = () => {
    let a=(page / 6) * 100;
    
    return a;
  };
  return (
    <>
    <div className="container w-50 width100">
        <p className="text-center my-3">Join our freelance team.</p>
        <ProgressBar progress={calculateProgress()} percentage={a}/>
        <form >
          {/* <Pg1/>
          <Pg2/> */}
          {
            page==1 ? <Pg1/>:page==2 ? <Pg2/> : page==3 ? <Pg3/> : page==4 ? <Pg4/> :  null
          }
        </form>
        <div className="row my-4">
        { page < 6 && <button type="submit" style={btnStyle} onClick={next} className="col-md-6 btn btn-primary my-2 py-3">NEXT</button> }
            { page > 1 && <button type="submit" style={btnStyle} onClick={prev} className="col-md-6 btn btn-primary my-2 py-3">PREVIOUS</button> }
            {page===6 && <button type="submit" style={btnStyle}  className="col-md-6 btn btn-primary my-2 py-3">SUBMIT</button>}
          </div>
      </div>

    </>
  )
}
