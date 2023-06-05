import React from 'react'

export default function ProgressBar({ progress }) {
    return (
        <>
            <div className="progress-bar" style={{borderRadius:"0px"}}>
                <div className="progress d-flex justify-content-end" style={{ width: `${progress}%`,color:"white",fontSize:"15px",borderRadius:"0px" }}> <span style={{marginRight: "15px"}}>{`${progress.toFixed(0)}%`}</span></div>
            </div>
        </>
    )
}
