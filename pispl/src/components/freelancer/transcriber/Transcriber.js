import React, { useState } from "react";
import Pg1 from './Pg1'
import Pg2 from './Pg2'
import Pg3 from './Pg3'
import Pg4 from './Pg4'
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
  return (
    <>
    <div className="container w-50 width100">
        <p className="text-center my-3">Join our freelance team.</p>
        <form >
          {/* <Pg1/>
          <Pg2/> */}
          {
            page==1 ? <Pg1/>:page==2 ? <Pg2/> : page==3 ? <Pg3/> : page==4 ? <Pg4/> :  null
          }
        </form>
        <div className="row my-4">
            { <button type="submit" style={btnStyle} onClick={next} className="col-md-6 btn btn-primary my-2 py-3">NEXT</button> }
            {  <button type="submit" style={btnStyle} onClick={prev} className="col-md-6 btn btn-primary my-2 py-3">PREVIOUS</button>}
          </div>
      </div>

    </>
  )
}
