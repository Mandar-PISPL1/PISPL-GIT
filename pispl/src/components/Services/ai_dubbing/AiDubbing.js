import React from 'react'
import Banner from '../../translation/Banner'
import myimage from '../../assets/AI-Dubbing-Services-Hero-Image.png'
import { useEffect } from 'react';
export default function AiDubbing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner index={5} b={myimage} flag={true}/>
    </>
  )
}
