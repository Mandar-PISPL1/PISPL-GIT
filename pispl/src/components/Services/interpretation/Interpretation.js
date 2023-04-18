import React from 'react'
import Banner from '../../translation/Banner'
import interpretation_lottie from './interpretation_lottie.json'
import UspSection from '../../translation/UspSection'
export default function () {
  return (
    <>
        <Banner index={7} a={interpretation_lottie}/>
        <UspSection
        heading="Provide Better User Engagement and Experience"
        data1="Fast Connect Time"
        data2="Cost-Effective"
        data3="Highly Flexible"
        dataValue="true"
        data4="Experienced"
        button="Get Professional Interpreter"
        lowerdataValue="false"
        lowerdata=""

        />
    </>
  )
}
