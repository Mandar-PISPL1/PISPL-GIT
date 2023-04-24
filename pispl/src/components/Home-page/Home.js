import React from 'react'
import Banner from '../translation/Banner'
import home from '../assets/home.png'
import arr from '../about_us/brands'
import UspSection from '../translation/UspSection'
export default function Home() {
  return (
    <>
      <Banner index={12} b={home} flag={false} />
      {/* Content */}

      <div className='container py-3'>
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
                      <img src={element.link} style={{ height: "97px", width: "169px" }} alt='brands'></img>
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
        <div style={{ margin: "4% 8%", color: "#4c5c8e" }}>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Us?</h1>
          <p>Parikh Info Solutions is a leading professional language service provider with decades of experience in the field and industry experts in all aspects. Keeping it up with the latest updates & dynamic industry trends, we, at Parikh Info Solutions, strive to serve the best to all our clients across the globe.</p>
        </div>
        <div className='container' >
          <div className='row' style={{ margin: "4% 8%", color: "#4c5c8e" }}>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>Error-Free Language Service</h4>
              <p>We provide you with error-free language services with our defined work process. This helps us to provide results with utmost accuracy to our clients along with the best customer service experience. We thrive to provide the most accurate, relevant & reliable translation services, transcription services along with other language services & solutions.</p>
            </div>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>Fast Turnaround</h4>
              <p>me is money for any business. We are committed to providing the fastest turnaround time within the given deadline. Making it worth your time & efforts along with giving the best as promised, Parikh Info Solutions, a professional language service provider company, aims to make your exchange with us a worthy one. Leaving your work concerns up to us, we ensure you a timely delivery with accurate outcomes. Fast turnaround being our goal for every client, we adhere to making the process easy, fast & hassle-free. Hence, you can utilize your time in implementing further plans of action and focus on your company’s growth.</p>
            </div>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>Native Expert Linguists</h4>
              <p>Our team includes professionals from different industries, with years of experience under their belts. Not only proficient in their native languages, but our linguists are highly professional experts with experience & recognition in various languages. We believe in offering quality services hence with sheer dedication, we put all the efforts into delivering the perfect results. We have a dynamic team of native experts that helps us in providing authentic language services with high-quality translations.</p>
            </div>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>Affordable Pricing</h4>
              <p>We provide language services at an affordable price that fits your budget. We make the best of every buck and thus keep our rates and the procedure behind them transparent. We believe in establishing a healthy client relationship. At Parikh info solutions, we believe in offering quality-oriented work, performed by a team of professionals, we also believe in making it worth our clients every penny.</p>
            </div>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>Industry Expertise
              </h4>
              <p>Having 20+ years of experience and industry-specific knowledge always helps us with your project’s success. Our translations are grammatically correct and consistent with industry standards. With experienced professionals in our team, we work consistently to make your functioning smooth and effortless. Dedicated to catering the best services, we, at Parikh info solutions combine our services with experience & expertise to deliver the best.</p>
            </div>
            <div className='col-md-4 col-12 border border-danger'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Error-Free-Services.png'></img>
              <h4>100% Data Privacy</h4>
              <p>We understand your concerns about data safety and privacy. We assure complete safety and privacy for your data. Our client’s concerns regarding privacy are our top priority. Hence, all the work done by us are confidential and completely secured with no loopholes that cause uncertain consequences. Providing 100% quality assurance and 100% safety of your data is our main motto.</p>
            </div>
          </div>
        </div>
      </div>
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
    </>
  )
}
