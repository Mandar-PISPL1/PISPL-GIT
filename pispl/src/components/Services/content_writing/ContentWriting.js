import React from 'react'
import Banner from '../../translation/Banner'
import myimage from '../../assets/Content-Writing-Service-Top-Banner.png'
import img from "../../assets/Content-Writing-Service-Bottom-Banner.png"
import img2 from "../../assets/Content-Writing-Service-Center-Banner.png"
import { BsArrowRightCircle } from "react-icons/bs";
import { useEffect } from 'react';
export default function ContentWriting() {

  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    width: "14rem",
    height: "3rem",
    borderRadius: "5px",
    border: "0px",
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner index={8} b={myimage} flag={true} />
      <div className='myskew'></div>

      {/* Stand Out and Grow Your Business */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-6 col-12">
            <h3 className='text-start m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Stand Out and Grow Your Business</h3>
            <p className='text-start' style={{ color: "#0d2366", fontWeight: "300" }} >IN THE DIGITAL WORLD WITH UNIQUE CONTENT!</p>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "400" }} >At Parikh Info Solutions, we have a team of professional writers, digital marketing experts and project managers to <a href="https://parikhinfosolutions.com/blog/why-does-your-business-needs-content-writing-services/">implement the perfect content strategy</a> for your businesses. Our skilled writers can deliver content copies on different niche topics and multiple industries with excellent proficiency. With the perfect blend of creativity and technical skills, our professional writers can hit the right note with the audience and enhance your brand's message.<br /><br />Along with this, we also provide translation services in over 50+ languages to help your content reach global audiences. We're a one-stop solution for all your needs.
              Reach global audiences and wider market places with our tailor-made content writing services.
            </p>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonstyle}>Get A Quote <BsArrowRightCircle /> </button>
          </div>
          <div className="col-md-6 col-12 d-flex align-center justify-content-center">
            <img src={img} alt="Content Writing Services" style={{ height: "80%", width: '80%' }}></img>
          </div>
        </div>
      </div>
      <br /><br />

      <div>
        <div>

        </div>
      </div>

      {/* Content Writing Services We Offer */}
        <div className="conatiner py-4 mx-md-5">
          <div className="row px-md-5 mx-md-5 m-0" style={{border: "2px dashed #49dab5"}}>
            <h2 className='text-center m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Content Writing Services We Offer</h2>
            <div className="col-md-6 col-12 my-5 px-md-5 px-3" style={{borderRight:"2px dashed #9099b8"}}>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Blog Writing</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>SEO Articles</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Press Releases</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Social Media Copies</p>
            </div>
            <div className="col-md-6 col-12 my-5 px-md-5 px-3">
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Website Content</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Landing Pages</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Newsletters</p>
              <p style={{fontSize:"22px"}}><i aria-hidden="true" className="far fa-file-alt mx-3" style={{color:"#49dab5"}}></i>Banners and brochures</p>

            </div>
          </div>

        </div>
      {/* SEO Optimized Content to Rank Higher */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-6 col-12">
            <h3 className='text-start m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>SEO Optimized Content to Rank Higher</h3>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "400" }} >We understand that it is very crucial for businesses to mark their digital presence in order to grow and build a strong foundation for their brand. The best way to do that is by creating unique and compelling content. We ensure to deliver high-quality content with SEO optimization to get you seen in the digital market as well as build a strong customer base.
              <br /><br />
              By optimizing your online content you increase the relevance and authority of your page which will engage more customers and increase your visibility online.
            </p>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonstyle}>Contact Us <BsArrowRightCircle /> </button>
          </div>
          <div className="col-md-6 col-12 d-flex align-center justify-content-center">
            <img src={img2} alt="Content Writing Services" style={{ height: "90%", width: '90%' }}></img>
          </div>
        </div>
      </div>

      {/* Industries We Cover */}
      <div className='container-fluid py-5' style={{ backgroundImage: "linear-gradient(#85A3FF,#EEF4FF00,#85A3FF)" }}>
        <h3 className='text-center h1 fw-bold' style={{ color: "#0D2366" }}>Industries We Cover</h3>
        <p className='text-center'>We provide tailor-made content writing solutions for different niche markets.</p>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-tv' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Media & Entertainment</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-code' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>IT / Software</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-user-gear' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Engineering</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-volume-up' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Marketing & Advertising</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-plane' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Travel & Tourism</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-middle' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-plus-square' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Health & Wellness</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-center' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-burger' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Food & Beverage</span>
              </div>
            </div>
            <div className='mx-5 mb-4 mb-md-0 d-flex justify-content-center align-middle' style={{ width: "12rem", border: "2px dashed #0D2366", textAlign: "center" }}>
              <div style={{ padding: "20px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <i aria-hidden="true" className='fas fa-book' style={{ color: "#0D2366", fontSize: "52px" }}></i>
                </div><br />
                <span className='text-center' style={{ color: "#0D2366", fontSize: "20px" }}>Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-4 w-75'>
        <div className='row mx-5'>
          <div className='col-12 my-4'>
            <h3 className='h2 text-center'>Why Choose Our Content Writing Services?</h3>
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">Cost-Efficient</h5>
                <p className="card-text text-justify">We believe in building relationships and not just customer base. Our cost-effective services will aptly fit into the client's requirements with desired results.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">High-Quality</h5>
                <p className="card-text text-justify">Our quality-oriented work gives us an edge over competitors. Our team of experienced professional writers deliver outcomes with utmost accuracy, consistency & high standards.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">SEO Optimization</h5>
                <p className="card-text text-justify">Our keyword research and content optimization will help businesses to boost their ranking and build a strong digital media presence. Increase ROI with our optimized content writing service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-4 w-75'>
        <div className='row mx-5'>
          <div className='col-md-4'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">Team of Experts</h5>
                <p className="card-text text-justify">Our qualified team of professionals consists of skilled writers, editors and project managers. Our writers hold expertise and experience in various niches to suit the demand of different industries.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">Time-Saving</h5>
                <p className="card-text text-justify">We value time and always ought to deliver before the deadline. Our team ensures to create a seamless process and produces effective results in no time.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card py-4 px-1 h-100 align-center">
              <div className="card-body">
                <h5 className="card-title h4 text-center">Research & Editing</h5>
                <p className="card-text text-justify">A lot of research goes behind creating original and compelling content. Our writers and editor
                  deliver well-researched quality content with zero room for error.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
