import React from 'react'

export default function Benefits2(props) {
  return (
    <>
        <div className="col-md-6 col-12 my-4">
            <div className='text-center pb-3'>
              <img src={props.img} style={{ height: "110px", width: "110px" }}></img>
            </div>

            <h4 className='text-center pb-4' style={{ fontWeight: "600",color: "#0d2366"}}  >{props.title}</h4>
            <p className='normal-text'>{props.content1}</p>
            <p className='normal-text'>{props.content2}</p>
            <p className='normal-text'>{props.content3}</p>
          </div>
    </>
  )
}
