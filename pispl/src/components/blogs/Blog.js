import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Blog({ blogs }) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    width: "12rem",
    // height: "3rem",
    // borderRadius: "5px",
    border: "1px",
    padding:"3px 22px"
}
  return (
    <>
      <div className='container-fluid py-3' style={{backgroundColor:"var(--mainColor)",color:"var(--textColor)"}}>
        <div className='d-flex justify-content-center align-items-center flex-column' style={{padding:"60px 0px"}}>
          <h1 className='fw-bold text-center' style={{fontSize:"45px"}}>Grow Your Business</h1>
          <div className='my-4 ' style={{width:"40px",backgroundColor:"#49dab5",height:"5px"}}></div>
          <p className='text-center mb-5' style={{fontSize:"22px",fontWeight:"300",maxWidth:"788px"}}>Get new updates direct to your inbox. 💌 To help you get the most out of through the globalization.</p>
          <div className='d-flex justify-content-center' style={{ textAlign: 'center' }}>
            <form className='d-flex'>
            <input placeholder='Your Email' style={{color:"#49dab5",backgroundColor:"#0d2366",border:"1px solid #49dab5",padding:"2px 5px", fontSize:"20px",padding:"2px 5px"}}></input>
            <button style={buttonstyle}>SUBSCRIBE</button>
            </form>
            
          </div>
            <p className='my-4'>✅ Don’t worry! We hate SPAM just as much as you do.</p>
          
        </div>
                
               
      </div>

      <div className='container-fluid'>
        <div className='row px-md-5 py-4 mx-md-5 m-0'>
          {/* http://localhost:1337/uploads/Planet9_3840x2160_52f6de1dac.jpg */}
          {
            blogs.data.map((blog) => {
              return (
                <div className='col-md-6 col-12 d-flex justify-content-center ' >
                  <div className='p-2 rounded' style={{boxShadow:"0px 0px 10px -1px rgba(0,0,0,0.5)"}}>
                  <Link to={`/blog/${blog.id}`}>

                    <div className="card border-0">
                      <img src={`http://localhost:1337${blog.attributes.featuredImage.data.attributes.url}`} className="card-img-top" alt="..." />
                      <div className="card-body px-0" >
                        <h2 style={{fontWeight:"600",fontSize:"20px",color:"#0d2366",padding:"0px 0px"}}>{blog.attributes.blogTitle}</h2>
                        <p style={{color:"#49dab5",fontSize:"13px"}}>Rashi Kapoor | May 31, 2023 | No Comments</p>
                        <p style={{fontSize:"16px"}}>Table of Contents Introduction Over the years, the gaming industry has witnessed exponential growth, and</p>
                      </div>

                    </div>
                  </Link>
                  </div>
                </div>

              )
            })
          }





        </div>
      </div>
    </>
  )
}
