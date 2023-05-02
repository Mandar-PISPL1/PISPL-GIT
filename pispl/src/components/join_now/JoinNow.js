import React from 'react'
import Counter from '../Incre-Counter/Counter'
import UspSection from '../translation/UspSection'

export default function JoinNow() {
  return (
    <>
      <div className=' py-4' style={{width:"40%",fontWeight:"300",color:"#0d2366",display:"block",margin:"auto"}}>
        <div>
          <p style={{textAlign:"start"}}>We’re always on the lookout for awesome people to join us. To be a great place to work, we need great people to work with us. Key to our strategy has always been to attract and retain people who share our passion about the kind of Company we are trying to build, based on our core purpose and values of being a catalyst for internal growth of all our employees. Because we believe in our core values, we continue to identify talented people who share these principles. For us, our people are especially important.</p>
        
          <p style={{textAlign:"start"}}>Got what it takes? Apply now to become the part of our team!</p>
        </div>
      </div>
      <Counter/>
      <UspSection
        heading="Tackling a big project? We’ve got you covered"
        heading_value="false"
        data1="Affordable Pricing"
        data2="Superior Quality"
        data3="Scalability"
        dataValue="true"
        data4="Dedicated Team"
        button="Let's Work Together"
      />
      
    </>
  )
}
