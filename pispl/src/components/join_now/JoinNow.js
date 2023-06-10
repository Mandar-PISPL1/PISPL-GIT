import React, { useEffect } from 'react'
import Counter from '../Incre-Counter/Counter'
import UspSection from '../translation/UspSection'
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
export default function JoinNow() {
  useEffect(() => {
    document.title = "Join Us | Parikh Info Solutions"
    window.scrollTo(0, 0);
  }, []);
  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    // width:"19rem",
    height: "3rem",
    borderRadius: "5px",
    border: "0px",
    padding: "6px 27px",
    margin: "1.2rem"
  }
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzfA_gBHnfD70FzwMCs6CVHmLQFmUqSqnN9YhCj7cYAfzKNoIAOIAwtPYMFj0yqR8rXMQ/exec",
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
  return (
    <>
      {/* Banner */}
      <div className='container-fluid py-3' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ padding: "60px 0px" }}>
          <h1 className='fw-bold text-center' style={{ fontSize: "45px" }}>Join Our Team</h1>
          <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
          <div className='d-sm-flex' style={{ textAlign: 'center' }}>
            <NavLink to='/career-opportunities'><button style={buttonstyle}>Careers <HiArrowNarrowRight /></button></NavLink>
            <NavLink to='/freelancer'><button style={buttonstyle}>Work As a Freelancer <HiArrowNarrowRight /></button></NavLink>
          </div>

        </div>


      </div>
      {/* Paragraph  */}
      <div className=' py-4 px-sm-2' style={{ fontWeight: "300", color: "#0d2366", display: "block", margin: "auto", maxWidth: "800px", padding: "0px 20px" }}>
        <div className=''>
          <p style={{ textAlign: "start" }}>We&apos;re always on the lookout for awesome people to join us. To be a great place to work, we need great people to work with us. Key to our strategy has always been to attract and retain people who share our passion about the kind of Company we are trying to build, based on our core purpose and values of being a catalyst for internal growth of all our employees. Because we believe in our core values, we continue to identify talented people who share these principles. For us, our people are especially important.</p>

          <p style={{ textAlign: "start" }}>Got what it takes? Apply now to become the part of our team!</p>
        </div>
      </div>
      <Counter />
      <UspSection
        heading="Tackling a big project? We&apos;ve got you covered"
        heading_value="false"
        data1="Affordable Pricing"
        data2="Superior Quality"
        data3="Scalability"
        dataValue="true"
        data4="Dedicated Team"
        button="Let's Work Together"
      />
      {/* testing */}
      {/* https://script.google.com/macros/s/AKfycbyqIZRlJ5-oTjSQt8qy1uordtapR7MJ72JwxZXZdZuamhpcT1dfTNPOgiHpC6hM8PH1Gg/exec */}


      <form className="form" onSubmit={(e) => Submit(e)}>
        <input placeholder="Your Name" name="Name" type="text" />
        <input placeholder="Your Email" name="Email" type="text" />
        <input placeholder="Your Message" name="Message" type="text" />
        <input name="Name" type="submit" />
      </form>

    </>
  )
}
