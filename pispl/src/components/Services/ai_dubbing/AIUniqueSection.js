import React from 'react'

const AIUniqueSection = (props) => {

  return (
        <>
            <div className='col-md-4 col-12' style={{ color: "#2a3d78", margin: "24px 0px" }}>
                <div className='bg-white' style={{  padding: '1.5rem', boxShadow:"0px 1px 7px 0px rgba(0, 0, 0, 0.25)",height:'100%'}}>
                <h4 className='text-center pb-2 text-decoration-underline' style={{ fontWeight: "600" }}>{props.title}</h4>
                <p style={{ fontSize: "18px" }}>{props.content}</p>
                </div>
            </div>
        </>
  )
}

export default AIUniqueSection