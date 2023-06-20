import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../translation/Banner";
import brands from "./brands";
import TopBrandSection from "../../translation/TopBrandSection";
import UspSection from "../../translation/UspSection";
import dubbing_lottie from "./dubbing_lottie.json";
import { useEffect } from "react";
import Benefits from "../../translation/Benefits";
import arr from "./BenefitsContent";
import img from "../../assets/Dubbing-2.png";
import img2 from "../../assets/Simultaneous-Interpretation.png";
import DubbingServices from "./DubbingServices";
import arr1 from "./Dubbingservices-data";
import faqs from "./FAQContent";
import FAQ from "../../translation/FAQ";

export default function Dubbing() {
  useEffect(() => {
    document.title="Multilingual Dubbing Services In India | Professional Dubbing Company"
    window.scrollTo(0, 0);
  }, []);
  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  return (
    <>
      <Banner index={4} lottie={dubbing_lottie} breadCrumb={true} brochure={true}/>
      <div className="myskew"></div>

      {/* We entertain all major languages across the globe! */}

      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className="text-start mx-3 my-0">ADAPT TO THE LOCAL CULTURE</p>
            <h3
              className="text-start mx-3 ml-2 h1"
              style={{ color: "#0d2366", fontWeight: "700" }}
            >
              We entertain all major languages across the globe!
            </h3>
            <div
              className="my-4 mx-3"
              style={{
                width: "40px",
                backgroundColor: "#49dab5",
                height: "5px",
              }}
            ></div>
            <p className="text-start m-3 normal-text">
              Dubbing is a part of the post-production process that involves the
              synchronization of the new sound over the original sound dialogue
              to make it accessible for local audiences.{" "}
              <a
                href="Being an important part of the video"
                className="text-danger"
              >
                Being an important part of the video
              </a>{" "}
              that has a significant impact on the audience, it becomes crucial
              to dub the voice in a professional manner.
              <br />
              <br />
              While some audiences prefer other solutions like subtitles, closed
              captions, etc, the majority of the audience prefer dubbing. By
              providing the best dubbing services in India, Parikh info
              solutions already stands strong in the industry.
              <br />
              <br />
              With expertise in a number of languages, nationally &
              internationally, Parikh info solutions levels up the game of
              dubbing services in India as well as other countries.
              <br />
              <br />
              Dubbing not only localizes the voice for the audience but also
              takes care of translating the emotions that the original sound
              conveys.
              <br />
              <br />
              It adapts the authenticity that the original form consists of,
              translates it and offers it to the audience without dilution. With
              native expertise in the field, as a leading dubbing services
              provider globally, at Parikh info solutions we take care of the
              accuracy, reliability & relevance of the data.
              <br />
              <br />
              With a strong network of native linguists and experts to complete
              the job with dedication, we also take care of the synchronization,
              acting & narration important to translate the emotions along with
              ensuring the perfect timing, sound quality & best quality of all
              the dubbed voice overs.
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-5 col-12 text-center d-flex justify-content-center align-items-center">
            <img
              src={img}
              alt=""
              style={{ maxHeight: "456px", maxWidth: "456px" }}
            />
          </div>
        </div>
      </div>

      {/* Adapt To The Local Culture */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1
            className="text-center m-3 ml-2"
            style={{ color: "#0d2366", fontWeight: "700" }}
          >
            Adapt To The Local Culture
          </h1>
          <p
            className="text-center m-1 normal-text"
            style={{ color: "#0d2366", fontWeight: "500" }}
          >
            We entertain all major languages across the globe!
          </p>
          <div className="col-md-7 col-12">
            <p className="text-start m-3 normal-text">
              We deliver the best dubbing services in every aspect. We make sure
              the dubbing artist suits the original speaker. Whether it may be
              the age, gender, tone, pitch, and depth of voice; all such
              criteria undergo strict inspection. At most competitive rates, our
              veteran dubbing artists never fail to convey emotion-filled
              dialogues..
              <br />
              <br />
              We cover world languages to offer dubbing services in all major
              Indian languages, Asian languages, European languages and African
              languages. Without confining to only mainstream languages, we also
              offer our services in local languages that can encourage business
              in remote local areas.
            </p>
          </div>
          <div className="col-md-5 col-12 text-center d-flex justify-content-center align-items-center">
            <img
              src={img2}
              alt=""
              style={{ MaxHeight: "200px", maxWidth: "315px" }}
            />
          </div>
        </div>
      </div>

      {/* Top Brand Section */}
      <div
        className="repon py-3 px-md-5"
        style={{
          textAlign: "center",
          margin: "3rem auto",
          backgroundColor: "#f6f6f6",
        }}
      >
        <h1
          className="text-center m-5"
          style={{ color: "#0d2366", fontWeight: "700" }}
        >
          Top Brands
        </h1>
        <div className="container-fluid">
          <div className="mb-5" style={mystyle}>
            {brands.map((element) => {
              return <TopBrandSection sour={element.link} />;
            })}
          </div>
        </div>
      </div>

      {/* Our Dubbing Services in India Provide */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h3
            className="text-center m-3 ml-2 h1"
            style={{ color: "#0d2366", fontWeight: "700" }}
          >
            Our Dubbing Services in India Provide
          </h3>
          <p className="text-center normal-text">
            Choose the best dubbing artists, with the right accent and dialects.
          </p>

          {arr1.map((element) => {
            return (
              <DubbingServices
                img={element.img}
                title={element.title}
                content={element.content}
              />
            );
          })}
        </div>
      </div>


      {/* benefits content */}
      <div className="container py-4 mx-md-2">
        <h3
          className="text-center m-3 h1"
          style={{ color: "#0d2366", fontWeight: "700" }}
        >
          Why Choose Parikh Info Solutions As A Dubbing Services Provider?
        </h3>
        <p
          className="px-md-5 mx-md-5 m-0 text-center normal-text"
          style={{ color: "#2a3d78" }}
        >
          Give Your Viewers A Better Experience with us
        </p>
        <div className="row px-md-5 mx-md-5 m-5">
            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Quick-Interpretation.png" style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Quality Oriented</h4>
                <p className='normal-text'>At Parikh Info Solutions, we offer <a href="https://parikhinfosolutions.com/blog/5-ways-dubbing-services-can-help-you-grow-business/" className="text-danger">high-quality professional dubbing services</a> in USA as well all other countries across industries like Entertainment- movies, TV-series, animation, and documentaries, eLearning, Corporate, Gaming, Advertising, and many more.</p>
            </div>
            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/network.png" style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Hassle-Free Process</h4>
                <p className='normal-text'>Parikh Info Solutions commits to serve you a hassle-free single point of contact for professional dubbing services in many national, local & international languages while maintaining a good dubbing studio quality.</p>
            </div>
            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Alerts-for-Cultural-Sensitivity-1.png" style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Cost-Effective</h4>
                <p className='normal-text'>Our highly qualified and experienced team of native linguists, project managers, voice over artists, and dubbing artists are committed to delivering high-quality video dubbing services at cost effective & pocket friendly rates while preserving the authenticity & retaining the tone of the content.</p>
            </div>
        </div>
      </div>

      {/* have a look on process */}

      <div className="container" style={{ marginBottom: "80px" }}>
        <h5
          className="text-center m-3 h1"
          style={{ color: "#0d2366", fontWeight: "700" }}
        >
          Have a Look at Our Process
        </h5>
        <p
          className="text-center m-3 normal-text" >
          We have brilliant recording facilities, complete with an arsenal of
          equipment. Several pro tools and Software are employed for high
          quality. Professional recording studios with proficient direction and
          original voice actors to complete the job and provide top-notch
          dubbing.
        </p>
        <div>
          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#49dab5",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              <strong class="h1" style={{fontSize: "48px"}}>1</strong>
            </div>
            <div
              style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px" }}
            >
              <h1 style={{ fontSize: "35px" }}>Script Adaptation</h1>
              <p style={{ color: "white" }}>
                Source script is adapted by experienced native translators
                capturing every sentiment and notion of the theme
              </p>
            </div>
          </div>

          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#0d2366",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              {" "}
              <strong class="h1" style={{fontSize: "48px"}}>2</strong>
            </div>
            <div
              style={{
                backgroundColor: "#0d2366",
                color: "#49dab5",
                padding: "2rem 1rem",
                maxWidth: "27rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px"
              }}
            >
              <h1 style={{ fontSize: "35px" }}>Choosing Artists</h1>
              <p style={{ color: "white" }}>
                A pool of talented, professional dubbing artists is made
                available to the client to make a choice according to their
                requirements.
              </p>
            </div>
          </div>

          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#49dab5",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              {" "}
              <strong class="h1" style={{fontSize: "48px"}}>3</strong>
            </div>
            <div
              style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px" }}
            >
              <h1 style={{ fontSize: "35px" }}>Assigning Artists</h1>
              <p style={{ color: "white" }}>
                The client selects artists as per the requirements. We ensure
                that age, sex, and the sound of the speaker are in parallel to
                the role required.
              </p>
            </div>
          </div>

          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#0d2366",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              {" "}
              <strong class="h1" style={{fontSize: "48px"}}>4</strong>
            </div>
            <div
              style={{
                backgroundColor: "#0d2366",
                color: "#49dab5",
                padding: "2rem 1rem",
                maxWidth: "27rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px"
              }}
            >
              <h1 style={{ fontSize: "35px" }}>Recording</h1>
              <p style={{ color: "white" }}>
              We make use of professionally monitored studios for precise and quality recording of your files.
              </p>
            </div>
          </div>

          
          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#49dab5",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              {" "}
              <strong class="h1" style={{fontSize: "48px"}}>5</strong>
            </div>
            <div
              style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px" }}
            >
              <h1 style={{ fontSize: "35px" }}>Editing & Mixing</h1>
              <p style={{ color: "white" }}>
              Videos are edited and mixed with M&E and dubbed audio tracks leaving no discrepancies at all.
              </p>
            </div>
          </div>


          <div
            className="d-flex justify-content-between phone-width"
            style={{ maxWidth: "33rem", margin: "47px auto" }}
          >
            <div
              style={{
                color: "#0d2366",
                padding: "0px 9px",
                maxWidth: "2rem",
              }}
            >
              {" "}
              <strong class="h1" style={{fontSize: "48px"}}>6</strong>
            </div>
            <div
              style={{
                backgroundColor: "#0d2366",
                color: "#49dab5",
                padding: "2rem 1rem",
                maxWidth: "27rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)",borderRadius:"8px"
              }}
            >
              <h1 style={{ fontSize: "35px" }}>Quality Control</h1>
              <p style={{ color: "white" }}>
              Any unwanted background sounds are removed, to ensure a clear sound-track. Superior quality dubbing with perfect lip sync is presented to the clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UspSection
        heading="Give Your Viewers A Better Experience"
        data1="Lip Syncing"
        data2="Clear Sound-Track"
        data3="Natural Accents"
        button="Start Your Dubbing Projects"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className="text-white text-center my-0 py-3 fs-6">
          Are you looking for transcription services?{" "}
          <NavLink to="/transcription">Read More.</NavLink>
        </p>
      </div>

      <div className="container p-md-5">
        <h4
          className="text-center h1 fw-bold mb-4"
          style={{ color: "#0D2366" }}
        >
          Frequently Asked Questions:
        </h4>
        <div className="row justify-content-center">
          <div class="accordion col-md-10 col-12" id="accordionExample">
            {faqs.map((element) => {
              return (
                <FAQ que={element.que} no={element.no} ans={element.ans} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
