import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../translation/Banner'
import home from '../assets/home.png'
import arr from '../about_us/brands'
import UspSection from '../translation/UspSection'
import arrr from './IndustriesWeCover'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import PhishingAlert from '../translation/PhishingAlert'
import lottieQuick from './Quick.json'
import Lottie from 'lottie-react';
import image_error_free from "../assets/home-why-choose-us-error-free-service.png"
import fastturn_around from "../assets/home-why-choose-us-Fast-turnaround.png"
import privacy_protection from "../assets/home-why-choose-us-100-Data-Privacy.png"
import affordable_pricing from "../assets/home-why-choose-us-Affordable-pricing.png"
import industry_expertise from "../assets/home-why-choose-us-industry-expertise-desktop.webp"
import native_expert from "../assets/home-why-choose-us-native-expert-linguistist.png"
import img1 from '../assets/Translation-HP-3.png'
import img2 from '../assets/Localization-HP-3.png'
import img3 from '../assets/Transcription-HP-3.png'
import img4 from '../assets/Dubbing-HP-3-2.png'
import img5 from '../assets/Voiceover-HP-3.png'
import img6 from '../assets/Subtitles-HP-3.png'
import img7 from '../assets/Interpretation-HP.png'
import img8 from '../assets/Digital-Marketing-HP.png'
import img9 from '../assets/video-creation-service.png'

// import banner_image from "./Translation-Services-Main.png"
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    padding: "0 1rem",
    height: "3rem",
    borderRadius: "5px",
    border: "0px",
    margin: "0px auto",
    display: " block",

  }
  const [count, setCount] = useState(false);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner index={12} b={home} flag={true} breadCrumb={false} />
      <div className='myskew'></div>

      {/* Content */}

      <div className='container py-3' style={{ overflowX: "hidden" }}>
        <div className='row' style={{ margin: "4% 8%" }} >
          <div className='col-md-6 col-12' style={{ color: "#0d2366" }}>
            <p >BEST SOLUTION FOR YOU!</p>
            <h1 style={{ fontWeight: "700" }}>Fast. Flexible. Affordable.</h1>
            <div className='my-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p style={{ fontWeight: "400", fontSize: "18px" }}>Our passionate team of professionals works around the clock to provide the highest quality services for all projects. Dedicated to offering the best language service, we at Parikh Info Solutions cater to all language-related needs and requirements with utmost professionalism.<br /><br />
              With a highly experienced team, Parikh Info Solutions stands as a professional language service provider company committed to delivering the highest quality results. Our team of professionals include linguists with experience spanning years in native languages along with proficiency in other recognised languages.
              <br /><br />
              Determined to provide the best language services along with the finest translation services, Parikh Info Solutions proffers top-notch language service & solutions.<br /><br />
              Our team of experienced professionals & dedicated project managers assures the smooth working of the project workflow keeping clients satisfaction as the top priority.<br /><br />
              Flexible with all the aspects & formats of various industries that require language service for smooth working, Parikh Info Solutions brings a feasible solution that works well with your professional needs & budget.</p>
          </div>
          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>

            <iframe width="570" height="321" src="https://www.youtube.com/embed/0C7Ie7uosrw" title="The Leading Translation Services Provider In India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          </div>

        </div>

      </div>


      {/* Trustedbrands section  */}
      <div style={{ backgroundColor: "#f6f6f6", padding: "3rem 0rem" }}>
        <div>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Trusted by World's Major Brands</h1>
          <div className='container'>
            <div className='row px-md-5'>

              {
                arr.map((element,id) => {
                  return (
                    <div className=' col-6 col-md-2 py-2  text-center'>
                      <img key={id} src={element.link} style={{ maxHeight: "97px", MaxWidth: "169px" }} alt='Major Brands' title='Major Brands'></img>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='container py-3' >
        <div style={{ margin: "4% 8%", color: "#0d2366" }}>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Us?</h1>
          <p style={{ fontWeight: "400", fontSize: "18px" }}>Parikh Info Solutions is a leading professional language service provider with decades of experience in the field and industry experts in all aspects. Keeping it up with the latest updates & dynamic industry trends, we, at Parikh Info Solutions, strive to serve the best to all our clients across the globe.</p>
        </div>
        <div className='container' >
          <div className='row m-md-5' style={{ color: "#0d2366" }}>
            <div className='col-md-4 col-12'>
              <div className='text-center' >
                <img src={image_error_free} alt='Error-Free Language Service Icon' title='Error-Free Language Service' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center my-3'>Error-Free Language Service</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>We provide you with <b style={{ fontWeight: "700" }}>error-free language services</b> with our defined work process. This helps us to provide results with utmost accuracy to our clients along with the best customer service experience. We thrive to provide the most accurate, relevant & reliable translation services, <NavLink to='/transcription' className='text-danger'>transcription services</NavLink> along with other language services & solutions.</p>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center'>
                <img src={fastturn_around} alt='Fast Turnaround Service Icon' title='Fast Turnaround Service' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center my-3'>Fast Turnaround</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>me is money for any business. We are committed to providing the <b style={{ fontWeight: "700" }}>fastest turnaround </b>time within the given deadline. Making it worth your time & efforts along with giving the best as promised, Parikh Info Solutions, a professional language service provider company, aims to make your exchange with us a worthy one. Leaving your work concerns up to us, we ensure you a timely delivery with accurate outcomes. Fast turnaround being our goal for every client, we adhere to making the process <b style={{ fontWeight: "700" }}>easy, fast & hassle-free.</b> Hence, you can utilize your time in implementing further plans of action and focus on your company’s growth.</p>
            </div>
            <div className='col-md-4 col-12 '>
              <div className='text-center '>
                <img src={native_expert} alt='Native Expert Linguists Icon' title='Native Expert Linguists' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center my-3'>Native Expert Linguists</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>Our team includes professionals from different industries, with years of experience under their belts. Not only proficient in their native languages, but our linguists are<b style={{ fontWeight: "700" }}> highly professional experts</b>with experience & recognition in various languages. We believe in offering quality services hence with sheer dedication, we put all the efforts into delivering the perfect results. We have a dynamic team of native experts that helps us in providing authentic language services with high-quality translations.</p>
            </div>
          </div>
          <div className='row m-md-5' style={{ color: "#0d2366" }}>
            <div className='col-md-4 col-12 '>
              <div className='text-center '>
                <img src={affordable_pricing} alt='Affordable Pricing Icon' title='Affordable Pricing' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center my-3'>Affordable Pricing</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>We provide language services at an affordable price that fits your budget. We make the best of every buck and thus keep our rates and the procedure behind them transparent. We believe in establishing a healthy client relationship. At Parikh info solutions, we believe in offering <b style={{ fontWeight: "700" }}>quality-oriented work, </b>performed by a team of professionals, we also believe in making it worth our clients every penny.</p>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center '>
                <img src={industry_expertise} alt='Industry Expertise Icon' title='Industry Expertise' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center my-3'>Industry Expertise</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>Having <b style={{ fontWeight: "700" }}>20+ years of experience</b> and industry-specific knowledge always helps us with your project’s success. Our translations are grammatically correct and consistent with industry standards. With experienced professionals in our team, we work consistently to make your functioning smooth and effortless. Dedicated to catering the best services, we, at Parikh info solutions combine our services with experience & expertise to deliver the best.</p>
            </div>
            <div className='col-md-4 col-12 '>
              <div className='text-center'>
                <img src={privacy_protection} alt='100% Data Privacy Icon' title='100% Data Privacy' style={{ height: "71px", width: "71px" }}></img>
              </div>
              <h4 className='text-center my-3'>100% Data Privacy</h4>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>We understand your concerns about data safety and privacy. We assure complete safety and privacy for your data. Our client’s concerns regarding privacy are our top priority. Hence, all the work done by us are<b style={{ fontWeight: "700" }}> confidential and completely secured</b> with no loopholes that cause uncertain consequences. Providing <b style={{ fontWeight: "700" }}>100% quality assurance</b> and <b style={{ fontWeight: "700" }}>100% safety </b>of your data is our main motto.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className='skewed-div-up'></div>
      <div className=' container-fluid ' style={{ backgroundColor: "#0d2366", position: "relative" }}>
        <ScrollTrigger onEnter={() => { setCount(true) }} onExit={() => { setCount(false) }}>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <Lottie animationData={lottieQuick} style={{ height: "364px", width: "100%" }} />

            </div>
            <div className='col-md-4 col-12'>
              <div>
                <p style={{ color: "white", fontWeight: "300", marginBottom: "0rem" }}>ENGAGING, EXPERIENCED AND EFFICIENT!</p>
                <h1 style={{ color: "white", fontWeight: "700" }}>Quick Facts</h1>
                <div className='d-flex justify-content-around' style={{ color: '#49dab5' }}>
                  <div className='mx-md-5 '>
                    <h1 className='quickfacts' style={{ fontSize: "83px" }}>{count && <CountUp start={0} end={50} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Languages</p>
                  </div>
                  <div className='mx-md-5'>
                    <h1 className='quickfacts' style={{ fontSize: "83px" }}>{count && <CountUp start={0} end={25} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Countries</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around" style={{ color: '#49dab5' }}>
                  <div className='mx-md-5'>
                    <h1 className='quickfacts' style={{ fontSize: "83px" }}>{count && <CountUp start={0} end={275} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Clients</p>
                  </div>
                  <div className='mx-md-5'>
                    <h1 className='quickfacts' style={{ fontSize: "83px" }}>{count && <CountUp start={0} end={20} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Years of Experience</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </ScrollTrigger>
      </div>
      <div className='skewed-div-down'></div>

      {/* We Help Your Business With */}
      <div className="conatiner py-4 mx-md-2">
        <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>We Help Your Business With</h1>
        <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px", margin: "0 auto" }}></div>
        <div className="row px-md-5 mx-md-5 m-0">
          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow-lg rounded-3 ' style={{ height: "100%" }}>
            <NavLink to='/translation'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>

                  <img src={img1}></img>
                </div>
            </NavLink>
                <h3 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Translation Services</h3>
                <p className='normal-text px-3'>Be it a small paragraph or large document, Parikh Info Solutions has the experience and the resources to translate content from one language to another. With an eye for details and keeping it all relevant, reliable, authentic and accurate, Parikh Info solutions provide apt translation services to enhance your business and make optimum use of your resources. A translation that fits your requirement and aptly translates the words & emotions as a part of data, at Parikh info solution, we provide excellent human translation services provided by our native language experts.</p>
                <div className='text-center p-2'>
                <NavLink to='/translation'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>

          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow-lg rounded-3 ' style={{ height: "100%" }}>
            <NavLink to='/localization'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>

                  <img src={img2}></img>
                </div>
            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Localization Services</h2>
                <p className='normal-text px-3 '>Our Localization services will help you localize your websites, applications, and software to the requirement of indigenous viewers. With the surge in global competition, businesses face the need for localization of their business in order to make it less alien in markets beyond boundaries. To give a firm stand in international & national markets, across boundaries, at Parikh info solutions we help the businesses kickstart with the right move. This will lead to substantial growth in your business. Without confining to any specific localization service for a business, we cover Website localization, Software localization, and App localization under one umbrella.</p>
                <div className='text-center p-2'>
                <NavLink to='/localization'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>

          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/transcription'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img3} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Transcription Services</h2>
                <p className='normal-text px-3'>We have perfected the job of transforming audio and speech into quality text files. We entertain both audio and video files and strive to offer the highest possible quality with the lowest error rate. We commit to the best quality <NavLink to="/transcription" className='text-danger'>transcription services</NavLink> and assure to make the process easy & hassle-free for you. With a dedicated team of project managers to look after your needs & a process to keep it all relevant; at Parikh Info Solutions we aim to provide excellent <NavLink to="/transcription" className='text-danger'>transcription services</NavLink>. We guarantee absolute professionalism, precision & result that is worth your time & penny.</p>
                <div className='text-center p-2'>
                <NavLink to='/transcription'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>

          </div>

          <div className='col-md-4 col-12 my-4' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/dubbing'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img4} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center py-3' style={{ fontSize: "25px", color: "#0d2366" }}>Dubbing Services</h2>
                <p className='normal-text px-3'>If you are after pinpoint translation, script designing, and meticulous multilingual dubbing; you are at the right place. It is beyond a doubt an integral part of a video as it helps you reach masses. Hence, it is always a win-win to get professionals on board. With experience spanning years under belt & expertise in the field, we commit results that meet your requirements and help you grow your business. We deliver fast and affordable dubbing services, setting professional standards with a pool of skilled artists embellished with the latest technology.</p>
                <div className='text-center p-2'>
                <NavLink to='/dubbing'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>

          <div className='col-md-4 col-12 my-4 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3 ' style={{ height: "100%" }}>
            <NavLink to='/voice-over'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img5} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Voice Over Services</h2>
                <p className='normal-text px-3'>We cover a plethora of languages, and our artists are well versed in their preferred language. We make sure that our professional voice-over artists have the opposite accent for the job. Our team of professionals & dedicated project managers will assure the smooth working of your work along with keeping it 100% accurate, relevant & reliable. We assure the timely delivery of your project at pocket-friendly rates to keep your budget unaffected too.</p>
                <div className='text-center p-2'>
                <NavLink to='/voice-over'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>
          <div className='col-md-4 col-12 my-4' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/video-subtitling'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img6} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Subtitling Services</h2>
                <p className='normal-text px-3'>We provide on-demand subtitles for the latest movies and series for all languages, for all platforms. Our experience in the field & team of professionals makes us the right choice for your project. We understand the significance of subtitles & their role in making your project a big hit. We offer a multitude of languages, from English to other global languages, to all the indigenous ones. Just ask for it, and we are right here to serve you.</p>
                <div className='text-center p-2'>
                <NavLink to='/video-subtitling'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>
          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/interpretation'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img7} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Interpretation Services</h2>
                <p className='normal-text px-3'>To Bridge the communication gap between you and your clients with the help of our video remote interpreters, at Parikh Info Solutions we bring apt interpretation services. Our interpreters help you connect with your clients by acting as language mediators on online platforms. All you need is a strong internet connection and a device consisting of a webcam, with good audio and video quality..</p>
                <div className='text-center p-2'>
                <NavLink to='/interpretation'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>
          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/content-writing'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img8} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Content Writing Services</h2>
                <p className='normal-text px-3'>Get Noticed with Precise, Professional & Quality-Driven Content! We can deliver all your technical, digital and professional needs with our bespoke content writing services. Our team of digital-savvy experts & skilled writers will help you hit the target audience with the right words & highly optimized SEO content.</p>
                <div className='text-center p-2'>
                <NavLink to='/content-writing'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>
          <div className='col-md-4 col-12 ' style={{ padding: "0px 38px", margin: "65px 0px" }}>
              <div className='shadow rounded-3' style={{ height: "100%" }}>
            <NavLink to='/video-creation'>
                <div style={{ maxHeight: "198px", maxWidth: "302px", paddingTop: "7px" }}>
                  <img src={img9} style={{ height: "100%", width: "100%" }}></img>
                </div>

            </NavLink>
                <h2 className='text-center my-3' style={{ fontSize: "25px", color: "#0d2366" }}>Video Creation Services</h2>
                <p className='normal-text px-3'>Capture your audience&apos;s attention with creative and professional explainer videos. With an increase in techno-logical advancements, people have become prone to short attention span time. The explainer videos can help you spread your brand&apos;s message and spread awareness effectively in a few minutes. We at Parikh Info Solutions, offer video creation services at every step from content, scripting, and editing, to voice-over and final video production.</p>
                <div className='text-center p-2'>
                <NavLink to='/video-creation'><button className='mb-3' style={buttonstyle}> Learn More </button></NavLink>
                </div>

              </div>
          </div>


        </div>

      </div>


      {/* Industry we cover */}
      <div className='container py-3'>

        <div className='row px-md-5' >
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Industries We Cover</h1>
          <p className='text-center' style={{ fontWeight: "300", fontSize: "18px" }}>We provide you with tailor-made strategies that suit perfectly for your specific market.</p>

          {


            arrr.map((element,id) => {
              return (
                <div className='col-md-2 col-6 p-2 d-flex justify-content-center' key={id}>
                  <div style={{ width: "12rem", height: "6.2rem", border: "1px solid #d1d1d1", textAlign: "center" }}>
                    <div style={{ padding: "20px" }}>
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <i aria-hidden="true" className={`fas ${element.icon} fa-2x py-1s `} style={{ color: "#1e6fe0" }}></i>
                      </div>
                      <span className='text-center' style={{ color: "#7a7a7a" }}>{element.title}</span>
                    </div>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>

      {/* Proud Members Section */}
      <div className="container-fluid py-3 mt-5 bg-light">
        <div className='row px-md-5'>
          <div className='col-md-2 col-12 text-center'>
            <h2>Proud Members of</h2>
          </div>
          <div className='col-md-1 col-6'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/indiamart-member.png' alt='Indiamart Logo' title='Indiamart' style={{ height: "63px", width: "122px" }}></img>
          </div>
          <div className='col-md-1 col-6'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2023/04/CitloB-Member-2023-2024.png' alt='CITLob Logo' title='CITLob' style={{ height: "63px", width: "122px" }}></img>
          </div>
          <div className='col-md-2 col-6 text-center'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/translation-directory-1.png' alt='Translation Directory Logo' title='Translation Directory' style={{ height: "63px", width: "122px" }}></img>
          </div>
          <div className='col-md-1 col-6'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/sulekha-member.png' alt='Sulekha.com Logo' title='Sulekha.com' style={{ height: "63px", width: "122px" }}></img></div>
          <div className='col-md-1 col-12 text-center'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/proz-member.png' alt='Proz Logo' title='Proz' style={{ height: "63px", width: "122px" }}></img>
          </div>
          <div className='col-md-2 col-12 text-center'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/indian-translators-association-member.png' alt='Indian Trasnlation Associations Logo' title='Indian Trasnlation Associations' style={{ height: "63px", width: "122px" }}></img>
          </div>
          <div className='col-md-2 col-12 text-center'>
            <img src="https://parikhinfosolutions.com/wp-content/uploads/2021/09/Executive-Council-Member-1-768x672.jpg" alt='Executive Council Member Logo' title='Executive Council Member' style={{ height: "63px", width: "122px" }}></img></div>
        </div>
      </div>

      {/* Usp Section  */}

      <UspSection
        heading="Choose A Better Way To Present"
        heading_value="true"
        heading2="We help you spread your success story."
        data1="Translation"
        data2="Transcription"
        data3="Subtitling"
        dataValue="true"
        data4="Dubbing & VO"
        button="Contact Support"

      />
      <PhishingAlert />

    </div>
  )
}
