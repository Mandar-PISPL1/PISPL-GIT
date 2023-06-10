import React, { useState } from "react";
import Pg1 from "./Pg1";
import Pg2 from "./Pg2";
import Pg3 from "./Pg3";
import Pg4 from "./Pg4";
import Pg5 from "./Pg5";
import Pg6 from "./Pg6";
import ProgressBar from "../ProgressBar";

export default function Translator() {
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
  //form -> https://script.google.com/macros/s/AKfycby-9h1aamtQHnKU73NoIVrKJdqZlpQb6TpyZO657N_VIOQkuiS3DjmMMCuXMcFEeON6-Q/exec

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    console.log(formDatab)

    fetch(
      "https://script.google.com/macros/s/AKfycby-9h1aamtQHnKU73NoIVrKJdqZlpQb6TpyZO657N_VIOQkuiS3DjmMMCuXMcFEeON6-Q/exec",
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
        <ProgressBar progress={calculateProgress()} />
        <form onSubmit={(e) => Submit(e)}>
          
          {
            page==1 ? <Pg1/>:page==2 ? <Pg2/> : page==3 ? <Pg3/> : page==4 ? <Pg4/> : page ==5 ? <Pg5/> : page ==6 ? <Pg6/> : null
          }
        
        <div className="row my-4">
            { page < 6 && <input type="button" style={btnStyle} onClick={next} className="col-md-6 btn btn-primary my-2 py-3" value="NEXT"/> }
            { page > 1 && <input type="button"style={btnStyle} onClick={prev} className="col-md-6 btn btn-primary my-2 py-3" value="PREVIOUS"/> }
            {page===6 && <button type="submit" style={btnStyle}  className="col-md-6 btn btn-primary my-2 py-3">SUBMIT</button>}
          </div>
        </form>
      </div>

      
      


    </>

  )
}
