import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
// import Lottie from "lottie-react";
// import Email from './Email.json'
export default function BlogContent({ blogs }) {

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

            <div className='container-fluid' style={{ display: "flex" }}>
                <div style={{ border: "2px solid red", width: "15%" }}>
                    de
                </div>

                <div style={{ width: "60%" }}>
                    <div className='featured-image text-center' >
                        <img src={`http://localhost:1337${blog.attributes.featuredImage.data.attributes.url}`} alt="" style={{ height: "500px", width: "800px" }} />
                    </div>
                    <div>
                        <h2>{blog.attributes.blogTitle}</h2>

                    </div>
                    <div>
                        <ReactMarkdown className='line-break' >{blog.attributes.blogContent}</ReactMarkdown>
                    </div>
                </div>
                <div style={{ width: "25%" }}>
                    <div className='text-center px-2 py-3 my-5' style={{backgroundColor:"#f6f6f6",display:"flex",flexDirection:"column"}}>
                        <h2>Get Update On Every Blog </h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>

                            {/* <Lottie animationData={Email} style={{  height: "150px", width: "100px" }} /> */}
                        </div>
                        <input type="text" placeholder='YOUR EMAIL' style={{padding:"6px 11px",margin:"12px auto"}} />
                        <button style={{fontSize:"27px",padding:"7px 0px",width:"230px",margin:"6px auto"}}>Subscribe</button>

                    </div>
                </div>


            </div>


        </>
    )
}
