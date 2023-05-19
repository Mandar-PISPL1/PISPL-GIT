import React,{useState} from 'react'
import Banner from '../translation/Banner'
import home from '../assets/home.png'
import arr from '../about_us/brands'
import UspSection from '../translation/UspSection'
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import arrr from './IndustriesWeCover'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import quick_lottie from './Quick.json'
import Lottie from 'lottie-react';
export default function Home() {
  const [count,setCount]=useState(false);
  return (
    <div style={{overflowX:"hidden"}}>
      <Banner index={12} b={home} flag={false} />
      <div className='myskew'></div>
      {/* Content */}

      <div className='container py-3' style={{overflowX:"hidden"}}>
        <div className='row' style={{ margin: "4% 8%" }} >
          <div className='col-md-6 col-12' style={{ color: "#0d2366" }}>
            <p>BEST SOLUTION FOR YOU!</p>
            <h1>Fast. Flexible. Affordable.</h1>
            <div className='mb-2' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p>Our passionate team of professionals works around the clock to provide the highest quality services for all projects. Dedicated to offering the best language service, we at Parikh Info Solutions cater to all language-related needs and requirements with utmost professionalism.</p>
            <p>With a highly experienced team, Parikh Info Solutions stands as a professional language service provider company committed to delivering the highest quality results. Our team of professionals include linguists with experience spanning years in native languages along with proficiency in other recognised languages.
            </p>
            <p>Determined to provide the best language services along with the finest translation services, Parikh Info Solutions proffers top-notch language service & solutions.</p>
            <p>Our team of experienced professionals & dedicated project managers assures the smooth working of the project workflow keeping clients satisfaction as the top priority.</p>
            <p>Flexible with all the aspects & formats of various industries that require language service for smooth working, Parikh Info Solutions brings a feasible solution that works well with your professional needs & budget.</p>
          </div>
          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>

            <iframe width="570" height="321" src="https://www.youtube.com/embed/0C7Ie7uosrw" title="The Leading Translation Services Provider In India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          </div>

        </div>

      </div>


      {/*brands section  */}
      <div style={{ backgroundColor: "#f6f6f6", padding: "3rem 0rem" }}>
        <div>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Trusted by World's Major Brands</h1>
          <div className='container'>
            <div className='row px-md-5'>

              {
                arr.map((element) => {
                  return (
                    <div className='col-6 col-md-2 py-2  text-center'>
                      <img src={element.link} style={{ height: "97px", width: "169px" }} alt='Major Brands' title='Major Brands'></img>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
      {/* Quick Facts */}
      <div className='container-fluid' style={{backgroundColor:"#0d2366"}}>
      <ScrollTrigger onEnter={()=>{setCount(true)}} onExit={()=>{setCount(false)} }>
          <div className='row'>
            <div className='col-md-6 col-12'>
              
            <Lottie animationData={quick_lottie}  style={{height:"400px", width:"100%",position:"relative",}}/>

            </div>
            <div className='col-md-6 col-12'>
              <div>
                <p style={{ color: "white", fontWeight: "300" }}>ENGAGING, EXPERIENCED AND EFFICIENT!</p>
                <h1 style={{ color: "white", fontWeight: "700" }}>Quick Facts</h1>
                <div className='d-flex' style={{color:'#49dab5'}}>
                  <div className='mx-md-5'>
                    <h1 style={{fontSize:"83px"}}>{count && <CountUp start={0} end={50} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Languages</p>
                  </div>
                  <div  className='mx-md-5'>
                    <h1 style={{fontSize:"83px"}}>{count && <CountUp start={0} end={25} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Countries</p>
                  </div>
                </div>
                <div className="d-flex"  style={{color:'#49dab5'}}>
                  <div  className='mx-md-5'>
                    <h1 style={{fontSize:"83px"}}>{count && <CountUp start={0} end={275} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Clients</p>
                    </div>
                  <div  className='mx-md-5'>
                    <h1 style={{fontSize:"83px"}}>{count && <CountUp start={0} end={20} duration={3} delay={0} />}+</h1>
                    <p className='text-white text-center'>Years of Experience</p>
                    </div>
                </div>

              </div>
            </div>
            
          </div>
          </ScrollTrigger>
      </div>
      {/* Why Choose Us */}
      <div className='container py-3' >
        <div style={{ margin: "4% 8%", color: "#0d2366" }}>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Us?</h1>
          <p>Parikh Info Solutions is a leading professional language service provider with decades of experience in the field and industry experts in all aspects. Keeping it up with the latest updates & dynamic industry trends, we, at Parikh Info Solutions, strive to serve the best to all our clients across the globe.</p>
        </div>
        <div className='container' >
          <div className='row m-md-5' style={{ color: "#0d2366" }}>
            <div className='col-md-4 col-12'>
              <div className='text-center' >
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='Error-Free Language Service Icon' title='Error-Free Language Service' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center'>Error-Free Language Service</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>We provide you with <b style={{ fontWeight: "700" }}>error-free language services</b> with our defined work process. This helps us to provide results with utmost accuracy to our clients along with the best customer service experience. We thrive to provide the most accurate, relevant & reliable translation services, transcription services along with other language services & solutions.</p>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center'>
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='Fast Turnaround Service Icon' title='Fast Turnaround Service' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center'>Fast Turnaround</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>me is money for any business. We are committed to providing the <b style={{ fontWeight: "700" }}>fastest turnaround </b>time within the given deadline. Making it worth your time & efforts along with giving the best as promised, Parikh Info Solutions, a professional language service provider company, aims to make your exchange with us a worthy one. Leaving your work concerns up to us, we ensure you a timely delivery with accurate outcomes. Fast turnaround being our goal for every client, we adhere to making the process <b style={{ fontWeight: "700" }}>easy, fast & hassle-free.</b> Hence, you can utilize your time in implementing further plans of action and focus on your company’s growth.</p>
            </div>
            <div className='col-md-4 col-12 '>
              <div className='text-center'>
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='Native Expert Linguists Icon' title='Native Expert Linguists'style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center'>Native Expert Linguists</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>Our team includes professionals from different industries, with years of experience under their belts. Not only proficient in their native languages, but our linguists are<b style={{ fontWeight: "700" }}> highly professional experts</b>with experience & recognition in various languages. We believe in offering quality services hence with sheer dedication, we put all the efforts into delivering the perfect results. We have a dynamic team of native experts that helps us in providing authentic language services with high-quality translations.</p>
            </div>
            <div className='col-md-4 col-12 '>
              <div className='text-center'>
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='Affordable Pricing Icon' title='Affordable Pricing' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center'>Affordable Pricing</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>We provide language services at an affordable price that fits your budget. We make the best of every buck and thus keep our rates and the procedure behind them transparent. We believe in establishing a healthy client relationship. At Parikh info solutions, we believe in offering <b style={{ fontWeight: "700" }}>quality-oriented work, </b>performed by a team of professionals, we also believe in making it worth our clients every penny.</p>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center'>
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='Industry Expertise Icon' title='Industry Expertise' style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center'>Industry Expertise</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>Having <b style={{ fontWeight: "700" }}>20+ years of experience</b> and industry-specific knowledge always helps us with your project’s success. Our translations are grammatically correct and consistent with industry standards. With experienced professionals in our team, we work consistently to make your functioning smooth and effortless. Dedicated to catering the best services, we, at Parikh info solutions combine our services with experience & expertise to deliver the best.</p>
            </div>
            <div className='col-md-4 col-12 '>
              <div style={{ textAlign: "center" }}>
                <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png' alt='100% Data Privacy Icon' title='100% Data Privacy' style={{ height: "71px", width: "71px" }}></img>
              </div>
              <h4 className='text-center'>100% Data Privacy</h4>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>We understand your concerns about data safety and privacy. We assure complete safety and privacy for your data. Our client’s concerns regarding privacy are our top priority. Hence, all the work done by us are<b style={{ fontWeight: "700" }}> confidential and completely secured</b> with no loopholes that cause uncertain consequences. Providing <b style={{ fontWeight: "700" }}>100% quality assurance</b> and <b style={{ fontWeight: "700" }}>100% safety </b>of your data is our main motto.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry we cover */}
      <div className='container py-3'>

        <div className='row px-md-5' >
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Industries We Cover</h1>
          <p className='text-center' style={{fontWeight:"300",color:"#7a7a7a"}}>We provide you with tailor-made strategies that suit perfectly for your specific market.</p>

          {
            

            arrr.map((element) => {
              return (
                <div className='col-md-2 col-6 p-2 d-flex justify-content-center'>
                  <div style={{ width: "10rem", height: "6rem" ,border:"1px solid #d1d1d1" }}>
                    <div style={{ padding: "9px 0px" }}>
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <i aria-hidden="true" class= {`fas ${element.icon} fa-3x py-1s `} style={{ color: "#1e6fe0", height: "2rem" }}></i>
                      </div>
                      <p className='text-center' style={{color:"#7a7a7a"}}>{element.title}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>

      {/* test */}
      <div className="container py-3">
        <div className='row px-md-5'>
          <div className='col-md-2 col-12 text-center'>
            <h2>Proud Members of</h2>
          </div>
          <div className='col-md-1 col-6'>
          <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/indiamart-member.png' alt='Indiamart Logo' title='Indiamart' style={{height:"63px",width:"122px"}}></img>
          </div>
          <div className='col-md-1 col-6'>
          <img src='https://parikhinfosolutions.com/wp-content/uploads/2023/04/CitloB-Member-2023-2024.png' alt='CITLob Logo' title='CITLob' style={{height:"63px",width:"122px"}}></img>
          </div>
          <div className='col-md-2 col-6 text-center'>
          <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/translation-directory-1.png' alt='Translation Directory Logo' title='Translation Directory' style={{height:"63px",width:"122px"}}></img>
          </div>
          <div className='col-md-1 col-6'>
            <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/sulekha-member.png' alt='Sulekha.com Logo' title='Sulekha.com' style={{height:"63px",width:"122px"}}></img></div>
          <div className='col-md-1 col-12 text-center'>
          <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/proz-member.png' alt='Proz Logo' title='Proz' style={{height:"63px",width:"122px"}}></img>
          </div>
          <div className='col-md-2 col-12 text-center'>
          <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/indian-translators-association-member.png' alt='Indian Trasnlation Associations Logo' title='Indian Trasnlation Associations' style={{height:"63px",width:"122px"}}></img>
          </div>
          <div className='col-md-2 col-12 text-center'>
            <img src="https://parikhinfosolutions.com/wp-content/uploads/2021/09/Executive-Council-Member-1-768x672.jpg" alt='Executive Council Member Logo' title='Executive Council Member' style={{height:"63px",width:"122px"}}></img></div>
        </div>
      </div>
      {/* test */}

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

      {/* Phishing Alert Notice */}
        <div className="container py-5">
          <div className="row px-md-5">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <BsFillExclamationTriangleFill style={{ fontSize: '84px', color: '#ff0000' }}/>
            </div>
            <div className='col-10'>
            <h3 className='' style={{ color: "#ff0000", fontWeight: "700" }}>Note:</h3>
            <p style={{ color: "#ff0000" }}>Please note that all our communication with vendors and clients is through our official company domain (@parikhinfosolutions.com) only and no other email ids. Beware of scamsters sending phishing emails from fake email ids.</p>
            </div>
          </div>
        </div>

    </div>
  )
}
