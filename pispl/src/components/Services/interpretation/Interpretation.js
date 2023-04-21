import React from 'react'
import Banner from '../../translation/Banner'
import interpretation_lottie from './interpretation_lottie.json'
import UspSection from '../../translation/UspSection'
import { useEffect } from 'react'
export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner index={7} lottie={interpretation_lottie}/>
        <UspSection
        heading="Provide Better User Engagement and Experience"
        data1="Fast Connect Time"
        data2="Cost-Effective"
        data3="Highly Flexible"
        dataValue="true"
        data4="Experienced"
        button="Get Professional Interpreter"

        />
        
    </>
  )
}
