import React,{useEffect} from 'react'
import Banner from '../translation/Banner'
import lottie from './contact-lottie.json'
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
       <Banner  index={11} upperpara={false} lottie={lottie} />
    </>
  )
}
