import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsWhatsapp, BsFacebook, BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import '../../frontend.min.css';
export default function BlogContentCopy({ posts }) {
    const [viewpost, setviewPort] = useState(window.innerWidth);
    useEffect(() => {
        document.title = `${title}`
        window.scrollTo(0, 0);
    },);

    useEffect(() => {
        const handleResize = () => {
            setviewPort(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    function Submit(e) {
        const formEle = document.querySelector("form");
        console.log(formEle);
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbzv6FYIwCMv6udzQDWKjQ6TArOnw4U_2tkUQkPyzLr6H2jhj_B69vDkXSMK7Gb3mEgX/exec",

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
    // https://script.google.com/macros/s/AKfycbzv6FYIwCMv6udzQDWKjQ6TArOnw4U_2tkUQkPyzLr6H2jhj_B69vDkXSMK7Gb3mEgX/exec

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

    const { id } = useParams();
    console.log("slug=", id);
    let blog = {};
    const filteredPosts = posts.filter((post) => post.slug == id);
    console.log("",)
    if (filteredPosts.length > 0) {
        blog = filteredPosts[0];
    }

    const title = blog.title && blog.title.rendered;
    const contentt = blog.content && blog.content.rendered;
    const featuredMedia = blog._embedded && blog._embedded['wp:featuredmedia'];
    const sourceUrl = featuredMedia && featuredMedia[0].source_url;

    const categories = blog._embedded && blog._embedded['wp:term'] && blog._embedded['wp:term'][0];
    const category = categories && categories[0];
    const categoryName = category && category.name;

    //author name
    const jsonData = {
        authors: [
            { id: 4, name: "Dipti Valanju" },
            { id: 5, name: "Prerna Topre" },
            { id: 10, name: "shifa_pispl" },
            { id: 12, name: "Sandili Patkar" },
            { id: 14, name: "Rashi Kapoor" },
            { id: 16, name: "pispl team" },
            { id: 19, name: "Vedant Maheshwari" },
            { id: 20, name: "Kashish Kanada" },

        ],
    };
    function getAuthorName(authorId) {
        const author = jsonData.authors.find((author) => author.id === authorId);
        return author ? author.name : "Unknown Author";
    }
    // ID of the author you want to retrieve the name for
    const authorName = getAuthorName(blog.author);
    console.log(authorName);


    const date = blog.date ? new Date(blog.date) : null;

    // Define the options for the desired date format
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Format the date using the options
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log(formattedDate);






    return (
        <>
            <div className='container-fluid py-5' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
                <div className=' py-4 mx-md-5 px-md-5 d-flex justify-content-center'>
                    <div className='row px-md-5 mx-md-5 m-0 width100' style={{ width: "72%" }}>
                        <h1 className='fw-bold text-start p-0 phoneFont' dangerouslySetInnerHTML={{ __html: title }} style={{ fontSize: "50px", lineHeight: "75px" }} />
                        <div className='my-4' style={{ width: "80px", backgroundColor: "#49dab5", height: "5px" }}></div>
                        <div className='p-0 d-flex  justify-content-between phoneFlex'>
                            <div><span className='mr-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="far fa-user-circle"></i></span>{authorName}</span>
                                <span className='mx-3'><span style={{ marginRight: "6px" }}><i aria-hidden="true" class="fas fa-calendar"></i></span>{formattedDate}</span>
                            </div>
                            <div><button style={{ backgroundColor: "#0d2366", color: "#49dab5", border: "2px solid #49dab5", padding: "3px 32px" }}>{categoryName}</button></div>

                        </div>
                    </div>
                </div>

            </div>



            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-2 col-12 d-flex justify-content-center' >
                        <div style={{ width: "15%", display: "flex", alignItems: "center", flexDirection: "column", display: viewpost > 480 ? 'block' : 'none' }}>
                            <p style={{ color: "#0d2366" }}>share</p>
                            <div><NavLink to='https://api.whatsapp.com/send?text=*Game%20Localization%E2%80%93The%20Quickest%20Way%20To%20Reach%20Global%20Gamers%21%20%7C%20Parikh%20Info%20Solutions*%0A%0Ahttps://parikhinfosolutions.com/blog/game-localization-the-quickest-way-to-reach-global-gamers/'><BsWhatsapp style={iconStyle} /></NavLink></div>
                            <div><NavLink to='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fparikhinfosolutions.com%252Fblog%252Fgame-localization-the-quickest-way-to-reach-global-gamers%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'><BsFacebook style={iconStyle} /></NavLink></div>
                            <div><NavLink to='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F%26title%3DGame%2520Localization%25E2%2580%2593The%2520Quickest%2520Way%2520To%2520Reach%2520Global%2520Gamers%2521%2520%257C%2520Parikh%2520Info%2520Solutions%26summary%3D%26source%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F'><BsLinkedin style={iconStyle} /></NavLink></div>
                        </div>
                    </div>
                    <div className='col-md-7 col-12'>
                        <div className='featured-image text-center' >
                            {sourceUrl && <img src={sourceUrl} alt="f-image" style={{ height: "100%", width: "100%" }} />}
                        </div>
                        <div>


                        </div>
                        <div id=''>
                            {/* <ReactMarkdown className='line-break blog-content px-md-5' >content</ReactMarkdown> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: blog.content }}></div> */}
                            <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: contentt }}></div>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <form className="form" onSubmit={(e) => Submit(e)}>

                            <div className='text-center px-2 py-3 my-5' style={{ backgroundColor: "#f6f6f6", display: "flex", flexDirection: "column" }}>
                                <h2>Get Update On Every Blog </h2>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    {/* lottie file */}

                                </div>
                                <input type="email" name='Email' placeholder='YOUR EMAIL' style={{ padding: "6px 11px", margin: "12px auto" }} />
                                <button type="submit" style={{ fontSize: "27px", padding: "7px 48px", margin: "6px auto" }}>Subscribe</button>

                            </div>
                        </form>
                    </div>
                    <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center", display: viewpost <= 480 ? 'block' : 'none' }}>

                        <div>
                            <span className='mx-2'><NavLink to='https://api.whatsapp.com/send?text=*Game%20Localization%E2%80%93The%20Quickest%20Way%20To%20Reach%20Global%20Gamers%21%20%7C%20Parikh%20Info%20Solutions*%0A%0Ahttps://parikhinfosolutions.com/blog/game-localization-the-quickest-way-to-reach-global-gamers/'><BsWhatsapp style={iconStyle} /></NavLink></span>
                            <span className='mx-2'><NavLink to='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fparikhinfosolutions.com%252Fblog%252Fgame-localization-the-quickest-way-to-reach-global-gamers%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'><BsFacebook style={iconStyle} /></NavLink></span>
                            <span className='mx-2'><NavLink to='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F%26title%3DGame%2520Localization%25E2%2580%2593The%2520Quickest%2520Way%2520To%2520Reach%2520Global%2520Gamers%2521%2520%257C%2520Parikh%2520Info%2520Solutions%26summary%3D%26source%3Dhttps%3A%2F%2Fparikhinfosolutions.com%2Fblog%2Fgame-localization-the-quickest-way-to-reach-global-gamers%2F'><BsLinkedin style={iconStyle} /></NavLink></span>
                            <p style={{ color: "#0d2366", textAlign: "center" }}>share</p>
                        </div>
                    </div>



                </div>

            </div>


        </>
    )
}
