import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { BsWhatsapp,BsFacebook,BsLinkedin } from "react-icons/bs";
// import Lottie from "lottie-react";
// import Email from './Email.json'
export default function BlogContent({ blogs }) {
    const buttonstyle = {
        color: "#0d2366",
        backgroundColor: "#49dab5",
        fontSize: "20px",
        width: "12rem",
        // height: "3rem",
        // borderRadius: "5px",
        border: "1px",
        padding: "3px 22px"
    }
    const iconStyle={
        backgroundColor:"#49dab5",
        color:"white",
        fontSize:"35px",
        padding:"5px 0px",
        width:"47px",
        height:"34px",
        borderRadius:"15px",
        margin:"7px 0px",
    }

    const { id } = useParams()
    let blog = {}
    if (blog) {
        let arr = blogs.data.filter(blog => blog.id == id)
        blog = arr[0];
    }
    else {
        blog = {}
    }

    console.log("blog object")
    console.log(blog)




    return (
        <>
            <div className='container-fluid py-5' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
                <div className=' py-4 mx-md-5 px-md-5 d-flex justify-content-center'>
                    <div className='row px-md-5 mx-md-5 m-0 width100' style={{ width: "72%" }}>
                        <h1 className='fw-bold text-start p-0 phoneFont' style={{ fontSize: "50px", lineHeight: "75px" }}>{blog.attributes.blogTitle}</h1>
                        <div className='my-4' style={{ width: "80px", backgroundColor: "#49dab5", height: "5px" }}></div>
                        <div className='p-0 d-flex  justify-content-between phoneFlex'>
                            <div><span className='mr-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="far fa-user-circle"></i></span>{blog.attributes.authorName}</span>
                                <span className='mx-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="fas fa-calendar"></i></span>May 31, 2023</span>
                            </div>
                            <div><button style={{backgroundColor:"#0d2366",color:"#49dab5",border:"2px solid #49dab5",padding:"3px 32px"}}>category</button></div>

                        </div>
                    </div>
                </div>
                
            </div>

            <div className='container-fluid py-5' style={{ display: "flex" }}>

                <div style={{ border: "2px solid red", width: "15%",display:"flex",alignItems:"center" ,flexDirection:"column"}}>
                    <p style={{color:"#0d2366"}}>share</p>
                    <div><BsWhatsapp style={iconStyle}/></div>
                    <div><BsFacebook style={iconStyle}/></div>
                    <div><BsLinkedin style={iconStyle}/></div>
                </div>

                <div style={{ width: "60%" }}>
                    <div className='featured-image text-center' >
                        <img src={`http://localhost:1337${blog.attributes.featuredImage.data.attributes.url}`} alt="" style={{ height: "372px", width: "711px" }} />
                    </div>
                    <div>


                    </div>
                    <div>
                        <ReactMarkdown className='line-break' >{blog.attributes.blogContent}</ReactMarkdown>
                    </div>
                </div>
                <div style={{ width: "25%" }}>
                    <div className='text-center px-2 py-3 my-5' style={{ backgroundColor: "#f6f6f6", display: "flex", flexDirection: "column" }}>
                        <h2>Get Update On Every Blog </h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>

                            {/* <Lottie animationData={Email} style={{  height: "150px", width: "100px" }} /> */}
                        </div>
                        <input type="text" placeholder='YOUR EMAIL' style={{ padding: "6px 11px", margin: "12px auto" }} />
                        <button style={{ fontSize: "27px", padding: "7px 0px", width: "230px", margin: "6px auto" }}>Subscribe</button>

                    </div>
                </div>


            </div>


        </>
    )
}
