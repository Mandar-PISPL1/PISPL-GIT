import React from 'react'

export default function Pg1() {
    const btnStyle = {
        width: "100%",
        fontSize: "24px",
        color: "#0d2366",
        fontWeight: " 500",
        backgroundColor: "#49dab5",
        borderRadius: "0",
        border: "none"
    }
    return (
        <>

            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">First Name</label>
                    <input type="text" name='Firstname' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Last Name</label>
                    <input type="text" name='Lastname' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Country Code</label>
                    <input type="text" name='Countrycode' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Phone Number</label>
                    <input type="text" name='Phonenumber' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Primary Email</label>
                    <input type="text" name='Primaryemail' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Alternative Email (Optional)</label>
                    <input type="text" name='AlternativeEmail' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
                </div>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Skype / Zoom ID / Hangout / Whatsapp</label>
                <input type="text" name='Skype_Zoom_ID_Hangout_Whatsapp' className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="my-0">
                <label for="inputEmail4" className="pb-2 normal-text">Select Gender</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="exampleRadios1" value="Male" />
                <label class="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="exampleRadios2" value="Female" />
                <label class="form-check-label" for="exampleRadios2" >
                    Female
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="exampleRadios3" value="Other" />
                <label class="form-check-label" for="exampleRadios3">
                    Other
                </label>
            </div>


        </>
    )
}
