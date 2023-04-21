import React from 'react'
import Banner from '../../translation/Banner'
import myimage from '../../assets/Content-Writing-Service-Top-Banner.png'
import { useEffect } from 'react';
export default function ContentWriting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner index={8} b={myimage} flag={true}/>
    </>
  )
}
