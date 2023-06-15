import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export default function Counter() {
    const [count,setCount]=useState(false);
    return (
        <div className='' style={{backgroundColor:"#0d2366",color:"#49dab5"}}>
            <ScrollTrigger onEnter={()=>{setCount(true)}} onExit={()=>{setCount(false)} }>
            <div className="container">
                <div className="row p-md-5 py-5">
                    <div className="col-md-3 col-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{fontSize:"83px"}}>
                            {count && <CountUp start={0} end={50} duration={3} delay={0} />}+
                            
                        </h1>
                        <p className='text-white'>Language</p>
                    </div>
                    <div className="col-md-3 col-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{fontSize:"85px"}}>
                            {count && <CountUp start={0} end={25} duration={3} delay={0} />}+
                        </h1>
                        <p className='text-white'>Country</p>

                    </div>
                    <div className="col-md-3 col-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{fontSize:"85px"}}>
                            {count && <CountUp start={0} end={275} duration={3} delay={0} />}+
                        </h1>
                        <p className='text-white'>Clients</p>
                    </div>
                    <div className="col-md-3 col-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{fontSize:"85px"}}>
                            {count && <CountUp start={0} end={20} duration={3} delay={0} />}+
                        </h1>
                        <p className='text-white'>Years Of Experience</p>
                    </div>
                </div>
            </div>
            </ScrollTrigger>
        </div>
    )
}
