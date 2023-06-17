import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { BsWhatsapp, BsFacebook, BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";

// import Lottie from "lottie-react";
// import Email from './Email.json'
export default function BlogContentCopy({ posts }) {
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
    const iconStyle = {
        backgroundColor: "#49dab5",
        color: "white",
        fontSize: "35px",
        padding: "5px 0px",
        width: "47px",
        height: "34px",
        borderRadius: "15px",
        margin: "7px 0px",
    }

    const { id } = useParams()
    let blog = {}
    if (blog) {
        let arr = posts.filter(blog => blog.id == id)
        blog = arr[0];
    }
    else {
        blog = {}
    }

    console.log("blog object =============")
    console.log(blog)
    const categories = blog._embedded['wp:term'][0];
    const category = categories[0];
    const categoryName = category.name;




    return (
        <>
            <div className='container-fluid py-5' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
                <div className=' py-4 mx-md-5 px-md-5 d-flex justify-content-center'>
                    <div className='row px-md-5 mx-md-5 m-0 width100' style={{ width: "72%" }}>
                        <h1 className='fw-bold text-start p-0 phoneFont' style={{ fontSize: "50px", lineHeight: "75px" }}>{blog.title.rendered}</h1>
                        <div className='my-4' style={{ width: "80px", backgroundColor: "#49dab5", height: "5px" }}></div>
                        <div className='p-0 d-flex  justify-content-between phoneFlex'>
                            <div><span className='mr-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="far fa-user-circle"></i></span>authorName</span>
                                <span className='mx-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="fas fa-calendar"></i></span>May 31, 2023</span>
                            </div>
                            <div><button style={{ backgroundColor: "#0d2366", color: "#49dab5", border: "2px solid #49dab5", padding: "3px 32px" }}>{categoryName}</button></div>

                        </div>
                    </div>
                </div>

            </div>



            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-2 col-12 d-flex justify-content-center'>
                        <div style={{ width: "15%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <p style={{ color: "#0d2366" }}>share</p>
                            <div><NavLink to='https://api.whatsapp.com/send?text=*Game%20Localization%E2%80%93The%20Quickest%20Way%20To%20Reach%20Global%20Gamers%21%20%7C%20Parikh%20Info%20Solutions*%0A%0Ahttps://parikhinfosolutions.com/blog/game-localization-the-quickest-way-to-reach-global-gamers/'><BsWhatsapp style={iconStyle} /></NavLink></div>
                            <div><NavLink to='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fparikhinfosolutions.com%252Fblog%252Fgame-localization-the-quickest-way-to-reach-global-gamers%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'><BsFacebook style={iconStyle} /></NavLink></div>
                            <div><NavLink to='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F%26title%3DGame%2520Localization%25E2%2580%2593The%2520Quickest%2520Way%2520To%2520Reach%2520Global%2520Gamers%2521%2520%257C%2520Parikh%2520Info%2520Solutions%26summary%3D%26source%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F'><BsLinkedin style={iconStyle} /></NavLink></div>
                        </div>
                    </div>
                    <div className='col-md-7 col-12'>
                        <div className='featured-image text-center' >
                            <img src={blog._embedded['wp:featuredmedia'][0].source_url} alt="f-image" style={{ height: "372px", width: "711px" }} />
                        </div>
                        <div>


                        </div>
                        <div id='blog-page-contain'>
                            {/* <ReactMarkdown className='line-break blog-content px-md-5' >content</ReactMarkdown> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: blog.content }}></div> */}
                            <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></div>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='text-center px-2 py-3 my-5' style={{ backgroundColor: "#f6f6f6", display: "flex", flexDirection: "column" }}>
                            <h2>Get Update On Every Blog </h2>
                            <div style={{ display: "flex", justifyContent: "center" }}>


                            </div>
                            <input type="text" placeholder='YOUR EMAIL' style={{ padding: "6px 11px", margin: "12px auto" }} />
                            <button style={{ fontSize: "27px", padding: "7px 0px", width: "230px", margin: "6px auto" }}>Subscribe</button>

                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}
