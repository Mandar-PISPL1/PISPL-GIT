import React from 'react'

export default function FAQ(props)  {

  return (
    <>
        <div class="accordion-item">
            <h2 class="accordion-header border" id={`heading${props.no}`}>
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.no}`} aria-expanded="true" aria-controls={`collapse${props.no}`}>
                <strong>{props.que}</strong>
            </button>
            </h2>
            <div id={`collapse${props.no}`} class="accordion-collapse collapse" aria-labelledby={`heading${props.no}`} data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>{props.ans}</p>
            </div>
            </div>
        </div>
    </>
  )
}