import React,{useEffect} from 'react'
import Banner from '../../translation/Banner'
import myimage from '../../assets/Video-Creation-Banner.png'
export default function VideoCreation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner index={9} b={myimage} flag={true}/>
    </>
  )
}
