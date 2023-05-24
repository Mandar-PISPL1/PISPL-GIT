import React from 'react'

export default function TypesOfVoiceServices(props) {
    
  return (
    <>
        <div className='col-md-4 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div style={{  padding: '1.5rem',borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",height:'100%'}}>
              <div className='text-center pb-3'>
                <img src={props.img} style={{ height: "71px", width: "71px" }}></img>
              </div>
              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>{props.title}</h4>
              <p style={{ fontSize: "18px" }}>{props.content}</p>
            </div>
          </div>
    </>
  )
}
