import React from 'react'

export default function Benefits(props) {
    return (
        <>
            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src={props.img} style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>{props.title}</h4>
                <p className='normal-text'>{props.content}</p>
            </div>
        </>
    )
}
