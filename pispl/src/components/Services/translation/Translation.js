import React from 'react'
import Banner from '../../translation/Banner'
// import arr from "./services_content"
import translation_service from './translation_service.json'



export default function Translation() {
  return (
    <>
        <Banner index={0} a={translation_service}/>
    </>
  )
}
