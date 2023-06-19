import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import axios from "axios";
const ReactForm = () => {


    const btnStyle = {
        width: "100%",
        fontSize: " 24px",
        fontWeight: " 500",
        backgroundColor: "#0d3266",
        borderRadius: "5px",
        border: "none"
    }

    function Submit(e) {
        const formEle = document.querySelector("form");
        console.log(formEle);
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbzMi7ToquiCMEg9sXNF9uqzEWrfhkPB5WOvdVRSUqURScD4kK8lnnzd_3PhNm2xeV04yA/exec",

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





    // const form = useRef();

    // const Submit = (e) => {
    //     const formEle = document.querySelector("form");
    // const formDatab = new FormData(formEle);
    // fetch(
    //     // before deploying 2nd time
    //     // https://script.google.com/macros/s/AKfycbyqIZRlJ5-oTjSQt8qy1uordtapR7MJ72JwxZXZdZuamhpcT1dfTNPOgiHpC6hM8PH1Gg/exec
    //   "https://script.google.com/macros/s/AKfycbzfA_gBHnfD70FzwMCs6CVHmLQFmUqSqnN9YhCj7cYAfzKNoIAOIAwtPYMFj0yqR8rXMQ/exec", //
    // //   "https://script.google.com/macros/s/AKfycbzWCrlI1kWJW1fCzTwvaFGaCqyAu9ZDR0BE7v07leuOSSogl-IhinDCiblfowkCGl2rfw/exec",
    // //   after deploy again
    // //   https://script.google.com/macros/s/AKfycbzfA_gBHnfD70FzwMCs6CVHmLQFmUqSqnN9YhCj7cYAfzKNoIAOIAwtPYMFj0yqR8rXMQ/exec
    //   {
    //     method: "POST",
    //     body: formDatab
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


    //     //email
    //     // axios.post('https://sheet.best/api/sheets/962023ab-672e-41c9-b86e-be6e23e381a0',formValue).then((response)=>{
    //     //     console.log(response);

    //     // })


    //     // emailjs.sendForm('service_a2bethb', 'template_nek1mvm', form.current, '5sH2SEGLWixZ3RicY')
    //     //     .then((result) => {
    //     //         console.log(result.text);
    //     //         console.log("Email Sent Succesfully.");
    //     //     }, (error) => {
    //     //         console.log(error.text);
    //     //         console.log("Email Not Sent.");
    //     // });



    // };



    return (
        <div className="container-sm" style={{ marginTop: "50px", width: "100%", color: "#0d2366" }}>
            <form className="form" onSubmit={(e) => Submit(e)}>
                <h5 className="mb-3" style={{ fontWeight: "600" }}>Get free support and quote on your email. Please submit the form to get in touch with us.</h5>
                <div className="mb-3 normal-text">
                    <label htmlFor="email" className="form-label">
                        Email address *
                    </label>
                    <input
                        type="email"
                        name="Email"
                        autoComplete="off"
                        className="form-control"
                        id="email"
                        required="required"

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="Name"
                        autoComplete="off"
                        // id="full_name"
                        className="form-control"

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        name="Companyname"
                        autoComplete="off"
                        className="form-control"

                    />
                </div>
                <div className=" mb-3 d-flex">
                    <div className="col-md-4">
                        <label htmlFor="country_code" className="form-label">
                            County Code
                        </label>
                        <select className="form-select" aria-label="Default select example" name="Countrycode" >
                            <option value="India (+91)">India (+91)</option>
                            <option value="UK (+44)">UK (+44)</option>
                            <option value="USA (+1)">USA (+1)</option>
                            <option value="Algeria (+213)">Algeria (+213)</option>
                            <option value="Andorra (+376)">Andorra (+376)</option>
                            <option value="Angola (+244)">Angola (+244)</option>
                            <option value="Anguilla (+1264)">Anguilla (+1264)</option>
                            <option value="Antigua &amp; Barbuda (+1268)">Antigua &amp; Barbuda (+1268)</option>
                            <option value="Argentina (+54)">Argentina (+54)</option>
                            <option value="Armenia (+374)">Armenia (+374)</option>
                            <option value="Aruba (+297)">Aruba (+297)</option>
                            <option value="Australia (+61)">Australia (+61)</option>
                            <option value="Austria (+43)">Austria (+43)</option>
                            <option value="Azerbaijan (+994)">Azerbaijan (+994)</option>
                            <option value="2Bahamas (+1242)">2Bahamas (+1242)</option>
                            <option value="Bahrain (+973)">Bahrain (+973)</option>
                            <option value="Bangladesh (+880)">Bangladesh (+880)</option>
                            <option value="6Barbados (+1246)">6Barbados (+1246)</option>
                            <option value="Belarus (+375)">Belarus (+375)</option>
                            <option value="Belgium (+32)">Belgium (+32)</option>
                            <option value="Belize (+501)">Belize (+501)</option>
                            <option value="Benin (+229)">Benin (+229)</option>
                            <option value="1Bermuda (+1441)">1Bermuda (+1441)</option>
                            <option value="Bhutan (+975)">Bhutan (+975)</option>
                            <option value="Bolivia (+591)">Bolivia (+591)</option>
                            <option value="Bosnia Herzegovina (+387)">Bosnia Herzegovina (+387)</option>
                            <option value="Botswana (+267)">Botswana (+267)</option>
                            <option value="Brazil (+55)">Brazil (+55)</option>
                            <option value="Brunei (+673)">Brunei (+673)</option>
                            <option value="Bulgaria (+359)">Bulgaria (+359)</option>
                            <option value="Burkina Faso (+226)">Burkina Faso (+226)</option>
                            <option value="Burundi (+257)">Burundi (+257)</option>
                            <option value="Cambodia (+855)">Cambodia (+855)</option>
                            <option value="Cameroon (+237)">Cameroon (+237)</option>
                            <option value="Canada (+1)">Canada (+1)</option>
                            <option value="Cape Verde Islands (+238)">Cape Verde Islands (+238)</option>
                            <option value="5Cayman Islands (+1345)">5Cayman Islands (+1345)</option>
                            <option value="Central African Republic (+236)">Central African Republic (+236)</option>
                            <option value="Chile (+56)">Chile (+56)</option>
                            <option value="China (+86)">China (+86)</option>
                            <option value="Colombia (+57)">Colombia (+57)</option>
                            <option value="Comoros (+269)">Comoros (+269)</option>
                            <option value="Congo (+242)">Congo (+242)</option>
                            <option value="Cook Islands (+682)">Cook Islands (+682)</option>
                            <option value="Costa Rica (+506)">Costa Rica (+506)</option>
                            <option value="Croatia (+385)">Croatia (+385)</option>
                            <option value="Cuba (+53)">Cuba (+53)</option>
                            <option value="92Cyprus North (+90392)">92Cyprus North (+90392)</option>
                            <option value="Cyprus South (+357)">Cyprus South (+357)</option>
                            <option value="Czech Republic (+42)">Czech Republic (+42)</option>
                            <option value="Denmark (+45)">Denmark (+45)</option>
                            <option value="Djibouti (+253)">Djibouti (+253)</option>
                            <option value="Dominica (+1809)">Dominica (+1809)</option>
                            <option value="Dominican Republic (+1809)">Dominican Republic (+1809)</option>
                            <option value="Ecuador (+593)">Ecuador (+593)</option>
                            <option value="Egypt (+20)">Egypt (+20)</option>
                            <option value="El Salvador (+503)">El Salvador (+503)</option>
                            <option value="Equatorial Guinea (+240)">Equatorial Guinea (+240)</option>
                            <option value="Eritrea (+291)">Eritrea (+291)</option>
                            <option value="Estonia (+372)">Estonia (+372)</option>
                            <option value="Ethiopia (+251)">Ethiopia (+251)</option>
                            <option value="Falkland Islands (+500)">Falkland Islands (+500)</option>
                            <option value="Faroe Islands (+298)">Faroe Islands (+298)</option>
                            <option value="Fiji (+679)">Fiji (+679)</option>
                            <option value="Finland (+358)">Finland (+358)</option>
                            <option value="France (+33)">France (+33)</option>
                            <option value="French Guiana (+594)">French Guiana (+594)</option>
                            <option value="French Polynesia (+689)">French Polynesia (+689)</option>
                            <option value="Gabon (+241)">Gabon (+241)</option>
                            <option value="Gambia (+220)">Gambia (+220)</option>
                            <option value="0Georgia (+7880)">0Georgia (+7880)</option>
                            <option value="Germany (+49)">Germany (+49)</option>
                            <option value="Ghana (+233)">Ghana (+233)</option>
                            <option value="Gibraltar (+350)">Gibraltar (+350)</option>
                            <option value="Greece (+30)">Greece (+30)</option>
                            <option value="Greenland (+299)">Greenland (+299)</option>
                            <option value="3Grenada (+1473)">3Grenada (+1473)</option>
                            <option value="Guadeloupe (+590)">Guadeloupe (+590)</option>
                            <option value="Guam (+671)">Guam (+671)</option>
                            <option value="Guatemala (+502)">Guatemala (+502)</option>
                            <option value="Guinea (+224)">Guinea (+224)</option>
                            <option value="Guinea - Bissau (+245)">Guinea - Bissau (+245)</option>
                            <option value="Guyana (+592)">Guyana (+592)</option>
                            <option value="Haiti (+509)">Haiti (+509)</option>
                            <option value="Honduras (+504)">Honduras (+504)</option>
                            <option value="Hong Kong (+852)">Hong Kong (+852)</option>
                            <option value="Hungary (+36)">Hungary (+36)</option>
                            <option value="Iceland (+354)">Iceland (+354)</option>
                            <option value="India (+91)">India (+91)</option>
                            <option value="Indonesia (+62)">Indonesia (+62)</option>
                            <option value="Iran (+98)">Iran (+98)</option>
                            <option value="Iraq (+964)">Iraq (+964)</option>
                            <option value="Ireland (+353)">Ireland (+353)</option>
                            <option value="Israel (+972)">Israel (+972)</option>
                            <option value="Italy (+39)">Italy (+39)</option>
                            <option value="5Ivory Coast (+225)">5Ivory Coast (+225)</option>
                            <option value="6Jamaica (+1876)">6Jamaica (+1876)</option>
                            <option value="Japan (+81)">Japan (+81)</option>
                            <option value="Jordan (+962)">Jordan (+962)</option>
                            <option value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                            <option value="Kenya (+254)">Kenya (+254)</option>
                            <option value="Kiribati (+686)">Kiribati (+686)</option>
                            <option value="Korea North (+850)">Korea North (+850)</option>
                            <option value="Korea South (+82)">Korea South (+82)</option>
                            <option value="Kuwait (+965)">Kuwait (+965)</option>
                            <option value="Kyrgyzstan (+996)">Kyrgyzstan (+996)</option>
                            <option value="Laos (+856)">Laos (+856)</option>
                            <option value="Latvia (+371)">Latvia (+371)</option>
                            <option value="Lebanon (+961)">Lebanon (+961)</option>
                            <option value="Lesotho (+266)">Lesotho (+266)</option>
                            <option value="Liberia (+231)">Liberia (+231)</option>
                            <option value="Libya (+218)">Libya (+218)</option>
                            <option value="Liechtenstein (+417)">Liechtenstein (+417)</option>
                            <option value="Lithuania (+370)">Lithuania (+370)</option>
                            <option value="Luxembourg (+352)">Luxembourg (+352)</option>
                            <option value="Macao (+853)">Macao (+853)</option>
                            <option value="Macedonia (+389)">Macedonia (+389)</option>
                            <option value="Madagascar (+261)">Madagascar (+261)</option>
                            <option value="Malawi (+265)">Malawi (+265)</option>
                            <option value="Malaysia (+60)">Malaysia (+60)</option>
                            <option value="Maldives (+960)">Maldives (+960)</option>
                            <option value="Mali (+223)">Mali (+223)</option>
                            <option value="Malta (+356)">Malta (+356)</option>
                            <option value="Marshall Islands (+692)">Marshall Islands (+692)</option>
                            <option value="Martinique (+596)">Martinique (+596)</option>
                            <option value="Mauritania (+222)">Mauritania (+222)</option>
                            <option value="Mayotte (+269)">Mayotte (+269)</option>
                            <option value="Mexico (+52)">Mexico (+52)</option>
                            <option value="Micronesia (+691)">Micronesia (+691)</option>
                            <option value="Moldova (+373)">Moldova (+373)</option>
                            <option value="Monaco (+377)">Monaco (+377)</option>
                            <option value="Mongolia (+976)">Mongolia (+976)</option>
                            <option value="4Montserrat (+1664)">4Montserrat (+1664)</option>
                            <option value="Morocco (+212)">Morocco (+212)</option>
                            <option value="Mozambique (+258)">Mozambique (+258)</option>
                            <option value="Myanmar (+95)">Myanmar (+95)</option>
                            <option value="Namibia (+264)">Namibia (+264)</option>
                            <option value="Nauru (+674)">Nauru (+674)</option>
                            <option value="Nepal (+977)">Nepal (+977)</option>
                            <option value="Netherlands (+31)">Netherlands (+31)</option>
                            <option value="New Caledonia (+687)">New Caledonia (+687)</option>
                            <option value="New Zealand (+64)">New Zealand (+64)</option>
                            <option value="Nicaragua (+505)">Nicaragua (+505)</option>
                            <option value="Niger (+227)">Niger (+227)</option>
                            <option value="Nigeria (+234)">Nigeria (+234)</option>
                            <option value="Niue (+683)">Niue (+683)</option>
                            <option value="Norfolk Islands (+672)">Norfolk Islands (+672)</option>
                            <option value="Northern Marianas (+670)">Northern Marianas (+670)</option>
                            <option value="Norway (+47)">Norway (+47)</option>
                            <option value="Oman (+968)">Oman (+968)</option>
                            <option value="Palau (+680)">Palau (+680)</option>
                            <option value="0Palestine (+970)">0Palestine (+970)</option>
                            <option value="Panama (+507)">Panama (+507)</option>
                            <option value="Papua New Guinea (+675)">Papua New Guinea (+675)</option>
                            <option value="Paraguay (+595)">Paraguay (+595)</option>
                            <option value="Peru (+51)">Peru (+51)</option>
                            <option value="Philippines (+63)">Philippines (+63)</option>
                            <option value="Poland (+48)">Poland (+48)</option>
                            <option value="Portugal (+351)">Portugal (+351)</option>
                            <option value="7Puerto Rico (+1787)">7Puerto Rico (+1787)</option>
                            <option value="Qatar (+974)">Qatar (+974)</option>
                            <option value="Reunion (+262)">Reunion (+262)</option>
                            <option value="Romania (+40)">Romania (+40)</option>
                            <option value="Russia (+7)">Russia (+7)</option>
                            <option value="Rwanda (+250)">Rwanda (+250)</option>
                            <option value="San Marino (+378)">San Marino (+378)</option>
                            <option value="Sao Tome &amp; Principe (+239)">Sao Tome &amp; Principe (+239)</option>
                            <option value="Saudi Arabia (+966)">Saudi Arabia (+966)</option>
                            <option value="Senegal (+221)">Senegal (+221)</option>
                            <option value="Serbia (+381)">Serbia (+381)</option>
                            <option value="Seychelles (+248)">Seychelles (+248)</option>
                            <option value="Sierra Leone (+232)">Sierra Leone (+232)</option>
                            <option value="Singapore (+65)">Singapore (+65)</option>
                            <option value="Slovak Republic (+421)">Slovak Republic (+421)</option>
                            <option value="Slovenia (+386)">Slovenia (+386)</option>
                            <option value="Solomon Islands (+677)">Solomon Islands (+677)</option>
                            <option value="Somalia (+252)">Somalia (+252)</option>
                            <option value="South Africa (+27)">South Africa (+27)</option>
                            <option value="Spain (+34)">Spain (+34)</option>
                            <option value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                            <option value="St. Helena (+290)">St. Helena (+290)</option>
                            <option value="9St. Kitts (+1869)">9St. Kitts (+1869)</option>
                            <option value="8St. Lucia (+1758)">8St. Lucia (+1758)</option>
                            <option value="Sudan (+249)">Sudan (+249)</option>
                            <option value="Suriname (+597)">Suriname (+597)</option>
                            <option value="Swaziland (+268)">Swaziland (+268)</option>
                            <option value="Sweden (+46)">Sweden (+46)</option>
                            <option value="Switzerland (+41)">Switzerland (+41)</option>
                            <option value="Syria (+963)">Syria (+963)</option>
                            <option value="Taiwan (+886)">Taiwan (+886)</option>
                            <option value="Tajikstan (+7)">Tajikstan (+7)</option>
                            <option value="Thailand (+66)">Thailand (+66)</option>
                            <option value="Togo (+228)">Togo (+228)</option>
                            <option value="Tonga (+676)">Tonga (+676)</option>
                            <option value="8Trinidad &amp; Tobago (+1868)">8Trinidad &amp; Tobago (+1868)</option>
                            <option value="Tunisia (+216)">Tunisia (+216)</option>
                            <option value="Turkey (+90)">Turkey (+90)</option>
                            <option value="Turkmenistan (+7)">Turkmenistan (+7)</option>
                            <option value="Turkmenistan (+993)">Turkmenistan (+993)</option>
                            <option value="9Turks &amp; Caicos Islands (+1649)">9Turks &amp; Caicos Islands (+1649)</option>
                            <option value="Tuvalu (+688)">Tuvalu (+688)</option>
                            <option value="Uganda (+256)">Uganda (+256)</option>
                            <option value="UK (+44)">UK (+44)</option>
                            <option value="Ukraine (+380)">Ukraine (+380)</option>
                            <option value="United Arab Emirates (+971)">United Arab Emirates (+971)</option>
                            <option value="Uruguay (+598)">Uruguay (+598)</option>
                            <option value="USA (+1)">USA (+1)</option>
                            <option value="Uzbekistan (+7)">Uzbekistan (+7)</option>
                            <option value="Vanuatu (+678)">Vanuatu (+678)</option>
                            <option value="Vatican City (+379)">Vatican City (+379)</option>
                            <option value="Venezuela (+58)">Venezuela (+58)</option>
                            <option value="Vietnam (+84)">Vietnam (+84)</option>
                            <option value="Virgin Islands - British (+1284)">Virgin Islands - British (+1284)</option>
                            <option value="Virgin Islands - US (+1340)">Virgin Islands - US (+1340)</option>
                            <option value="Wallis &amp; Futuna (+681)">Wallis &amp; Futuna (+681)</option>
                            <option value="Yemen (North)(+969)">Yemen (North)(+969)</option>
                            <option value="Yemen (South)(+967)">Yemen (South)(+967)</option>
                            <option value="Zambia (+260)">Zambia (+260)</option>
                            <option value="Zimbabwe (+263)">Zimbabwe (+263)</option>
                        </select>
                    </div>
                    <div className="col-md-8 mx-1" >
                        <label htmlFor="mobilenumber" className="form-label">
                            Mobile/Whatsapp Number
                        </label>
                        <input
                            type="name"
                            id="phone_number"
                            name="Mobilenumber"
                            autoComplete="off"
                            className="form-control"

                        />
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor="Briefdetails" className="form-label">
                        Please give brief details about your requirements *
                    </label>
                    <div >
                        <textarea className="form-control" required="required" style={{ height: "100px" }} name="Projectdetails" autoComplete="off"  ></textarea>

                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" style={btnStyle} className="btn btn-primary">Send Enquiry
                        <i aria-hidden="true" className="fas fa-location-arrow mx-2
                        "></i></button>

                </div>
            </form>
        </div>
    )
}

export default ReactForm