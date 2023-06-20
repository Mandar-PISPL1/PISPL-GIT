import React from 'react'

export default function Newform() {
    function Submit(e) {
        const formEle = document.querySelector("form");
        console.log(formEle);
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbwz_vEkM-KM-8gevM3nESxR2IrhUFgk8u38QczFG4rHT17qYmduzuR3albjuIPntFpZhQ/exec",

            {
                method: "POST",
                body: formDatab
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <form className="form" onSubmit={(e) => Submit(e)}>
                <div className="col-md-6 col-12">
                    <label  className="pb-2 normal-text">Email Address<span style={{ color: "red" }}>*</span></label>
                    <input required type="email" name='Email' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
                <button type="submit"  className="btn btn-primary">Register <i aria-hidden="true" className="fas fa-location-arrow mx-2">
                </i></button>
            </form>
        </div>
    )
}
