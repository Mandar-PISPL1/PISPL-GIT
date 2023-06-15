import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import localization_lottie from './localization_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import { useEffect } from 'react';
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
import img from '../../assets/Software-Localization.png'
import img1 from '../../assets/Localization-01.png'
import img2 from '../../assets/Website-Localization.png'
import img3 from '../../assets/App-Localization.png'
import img4 from '../../assets/Software-Localization.png'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'


export default function Localization() {
  useEffect(() => {
    document.title='Localization Services For Multilingual Websites | App Localization & Software Localization'
    window.scrollTo(0, 0);
  }, []);
  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={2} lottie={localization_lottie} breadCrumb={true} />
      <div className='myskew'></div>

      {/* What is localization */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center m-3 mb-5' style={{ color: "#0d2366", fontWeight: "700" }}>What is Localization?</h1>
          <div className="col-md-6 col-12">
            <p className='text-start m-3 normal-text' >Localization is the process of modifying a product to adapt to the needs of the audience in different regions. While translation services are often a key component, language localization includes local regulations and cultural differences in order to connect with the intended audience.<br /><br />

              The true skill of translating and localizing a document lies in adapting it to a format without changing its true meaning.<br /><br />

              We offer the best localization services in India at affordable prices and fast outcomes.</p>

          </div>
          <div className="col-md-6 col-12 text-center d-flex justify-content-center align-items-center">
            <img src={img} alt="" style={{ height: "200px", width: "315px" }} />
          </div>
        </div>
      </div>

      {/* Go Global With Confidence */}
      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">

          <div className="col-md-6 col-12">
            <p style={{ color: "#0d2366", fontWeight: "600" }}>ONE-STOP SOLUTION FOR ALL LOCALIZATION NEEDS</p>
            <h3 className='h1' style={{ color: "#0d2366", fontWeight: "700" }}>Go Global With Confidence</h3>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start normal-text' >
              Localization services involve adding elements of native customs. This would make the experience more humanistic and natural. With all the information and instructions set in some foreign language, the viewers could feel a little overwhelmed.<br /><br />

              Precise localization is more than translating the text for the target audience. It includes graphics customization and Graphic User-Interface optimizations.<br /><br />

              All the various elements are engineered perfectly to meet the requirements of the users. We also ensure the finest language localization production quality with excellent service.<br /><br />

              Using effective localization services tools with master native language experts, we aid professionals to go global in their targeted language.<br /><br />
            </p>

          </div>
          <div className="col-md-6 col-12 text-center d-flex justify-content-center align-items-center" >
            <img src={img1} alt="" style={{ maxHeight: "406px", maxWidth: "406px" }} />
          </div>
        </div>
      </div>

      {/* localization vs translation */}
      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h3 className='text-center m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Localization vs Translation</h3>
          <div className='my-4 text-center' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px", margin: "0px auto" }}></div>
          <p className='text-start m-md-3 normal-text'  >
            Translation services refer to the process of translating or changing text from one language to another, retaining its original meaning. The goal of translation is to maintain the originality of the original text and content in the target language.
            <br /><br />
            Localization services refer to the process of modifying the content by keeping both linguistical and cultural differences in focus. You will need localization services in order to reach a wider audience in different regions and parts of the world. The process of simply translating does not cater to wider audiences as one cannot connect due to major cultural differences. With our localization services in India, we create the perfect blend of content with both linguistic and cultural equivalence.
            <br /><br />
            The main difference between translation services and localization services is that localization bridges the gap between cultural differences, modifying it according to the local language of the targeted region. The localization services are important for making content, products, services and campaigns reach global audiences along with meeting cultural expectations.
            <br /><br />
            Both translation and localization services are important to make content available in vast languages. But knowing when to use these services is the main key. Translation services are often used for—Legal and Technical documents, Medical documents, Science journals, Publications/Books and User Manuals.
            <br /><br />
            Localization services are mainly used for software, websites, mobile apps, video games, and other digital products and services. The main aim of localization services is to make the content appear relatable and “local” in terms of the specific target region. From choosing the content, and graphics according to local languages preferences to modifying it with accurate local and legal requirements. Our localization services in India ensures high quality driven content, focussing on ever aspect like: Language, Expressions, Idioms, Vocabulary, Cultural references, Measuring units , Currency units and Date formats.</p>
        </div>
      </div>
      {/* Top Brands */}
      <div className="repon py-3 px-md-5" style={{ textAlign: "center", margin: "3rem auto",backgroundColor:"#f6f6f6" }}>
        <h3 className='text-center m-5 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Top Brands</h3>
        <div className='container-fluid'>
          <div className='mb-5' style={mystyle}>
            {
              brands.map((element) => {
                return (
                  <TopBrandSection sour={element.link} />
                )
              })
            }
          </div>
        </div>
      </div>

      {/* We Provide Following Localization Services */}
      <div id="localization-types" className="container py-4 mx-md-4">
        <div className="row px-md-5 mx-md-5 m-0">
          <h3 className='text-center m-3 ml-2 h1 mb-5' style={{ color: "#0d2366", fontWeight: "700" }}>We Provide Following Localization Services</h3>
          <ul className="nav nav-pills phoneFlex" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" ><b>Web Localization</b></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" ><b>App Localization</b></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" ><b>Software Localization</b></button>
            </li>
          </ul>
          <div className="tab-content p-0 my-md-0 my-3" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ color: "white", backgroundColor: "#0d3266" }}>
              <div className='text-center'>
                <img src={img2} alt="" className='mt-5' />
              </div>
              <p className='p-3'>
                In today&apos;s era, you can&apos;t compromise yourself to target a limited set of viewers. With website localization services, you can modify and localize your websites to reach overseas markets and welcome new opportunities using multiple languages. Through website localization we will modify your content to meet the linguistic, functional and cultural equivalence of target and global markets. Our localization services drives business to new customers, caring for their culture and customs as well. Offering the best localization services in India, our developers and translators make the website safe and sensitive for your target viewers with efficient website localization tools.<br /><br />
                Website localization goes beyond simple translation. It is a complete modification of website content, elements and other specifications to meet the needs of customer in their desired language. A localized website will help you reach huge audience and impact wider markets. The main areas of focus in website localization services are modifying content by keeping in account with the cultural differences. This might also lead to changes in certain website elements and technological aspects in order to make the website user friendly and easy to navigate. <br /><br />
                The mere translation of a website will lack the cultural nuances and understanding of the specific region in order to make it relevant for the targeted audiences. Whereas, the localization of website will bridge the language gap and modify your message to reach global audience. Our localization services in India pays special attention to the details in order to make the website effective and relevant to the new market. Our highly trained professionals will work towards localization strategy catering to target and global markets to build effective customer experiences.
              </p>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style={{ color: "white", backgroundColor: "#0d3266" }}>
              <div className='text-center'>
                <img src={img3} alt="" className='mt-5' />
              </div>
              <p className='p-3'>
                The mobile app localization refers to the process of modifying the interface and functionality in order to suit the language of target audiences. The app localization services can improve your App Store rankings, increase downloads and reach global audiences. We make your applications available and ready to use in the intended languages with our localization services. It is made sure that the app handles all the different characters, numbers, and alphabets precisely and clearly. We accommodate all the little details to your applications to make them perfect in every way.<br /><br />
                The goal of app localization service is to take language, technical and cultural differences into account and modify it to suit the needs of target audiences. The localization helps in keeping the original message and content intent with the preferred language. The mere translation of mobile app will lack the cultural nuances and understanding of the specific region in order to make it relevant for the targeted audiences. Whereas, the app localization will bridge the language gap and modify your message to reach global audience. Our localization services in India pays special attention to the details in order to make the app effective and relevant to the new market. Our highly trained professionals will work towards localization strategy catering to target and global markets to build effective customer experiences.

              </p>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" style={{ color: "white", backgroundColor: "#0d3266" }}>
              <div className='text-center'>
                <img src={img4} alt="" className='mt-5' />
              </div>
              <p className='p-3'>
                All the users around the world are looking for an immersive and comfortable experience in handling their software. However, most of the software programs are designed in a universal language like English. If the software is localized suiting the needs of the users, they will find a natural affection for it. Our software language localization covers all the domains of digital codes for the diversified community.
                <br /><br />
                Software localization service refers to the process of modifying software keeping in account to both cultural and language differences. The localization services involves the modification of language, design elements, UX changes and might also involve some code changes to make the software appear relevant to the target audience.
                <br /><br />
                The goal of software localization service is to take language, technical and cultural differences into account and modify it to suit the needs of target audiences. The localization helps in keeping the original message and content intent with the preferred language. The software localization will bridge the language gap and modify your message to reach global audience. Our localization services in India pays special attention to the details in order to make the app effective and relevant to the new market. Our highly trained professionals will work towards localization strategy catering to target and global markets to build effective customer experiences.
              </p>

            </div>
          </div>
        </div>
      </div>


      {/* benefits section */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >How Language Localization Services Companies Will Benefit?</h2>
        <div className='row px-md-5 mx-md-5 m-0'>
          {
            arr.map((element) => {
              return (

                <Benefits img={element.img} title={element.title} content={element.content} />

              )
            })
          }


        </div>

      </div>
      <UspSection
        heading="Go Local"
        heading_value="true"
        heading2="Attract New Traffic Like Never Before!"
        data1="Higher ROI"
        data2="Native Linguists"
        data3="Higher Search Rate"
        button="Localize Now"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for language interpreter? <NavLink to="/interpretation">Read More.</NavLink></p>
      </div>


      <div className='container p-md-5'>
        <h4 className='text-center h1 fw-bold mb-4' style={{ color: "#0D2366" }}>Frequently Asked Questions:</h4>
        <div className='row justify-content-center'>
          <div class="accordion col-md-10 col-12" id="accordionExample">

            {
              faqs.map((element) => {
                return (

                  <FAQ que={element.que} no={element.no} ans={element.ans} />

                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
