import React from 'react'

export default function Benefits(props) {
    return (
        <>
            <div className='col-md-4 col-12' style={{ color: "#2a3d78" }}>
                <div className='text-center'>
                    <img src={props.img} style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center' style={{ fontWeight: "600" }}>{props.title}</h4>
                <p style={{ fontSize: "18px" }}>{props.content}</p>
            </div>
        </>
    )
}
