import React, { useState } from "react";

// https://script.google.com/macros/s/AKfycbx0JANf5n31P6IA74EaINz9JLfbSj_xrQYuSuY2GzNkUOC-zFoTV_bjVEvLUCynSePJ/exec

export default function VoDubArtist() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    console.log(formEle);
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbx0JANf5n31P6IA74EaINz9JLfbSj_xrQYuSuY2GzNkUOC-zFoTV_bjVEvLUCynSePJ/exec",

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
      const pdfPath =  "/#/thank-you";
    window.open(pdfPath, '_self');
  }
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

     
      <div className="container w-50 width100 mt-160">
        <h2 className="text-center my-3">Join our freelance team.</h2>

        <form className="form" onSubmit={(e) => Submit(e)}>
          <div className="row my-2">
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">First Name</label>
              <input required type="text" name='Firstname' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
            </div>
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">Last Name</label>
              <input required type="text" name='Lastname' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">Country Code</label>
              <select required className="form-select form-select-lg border-secondary" id="exampleFormControlSelect1" name="Countrycode" >
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
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">Phone Number</label>
              <input required type="text" name='Phonenumber' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" maxLength="10"
                onInput={(event) => {
                  event.target.value = event.target.value.slice(0, 10); // Restrict input to 10 characters
                }} />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">Primary Email</label>
              <input required type="email" name='Primaryemail' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
            </div>
            <div className="col-md-6 col-12">
              <label for="inputEmail4" className="pb-2 normal-text">Alternative Email (Optional)</label>
              <input type="email" name='AlternativeEmail' className="form-control form-control-lg mb-2 w-100 rounded border-secondary" />
            </div>
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Skype / Zoom ID / Hangout / Whatsapp</label>
            <input type="text" name='Skype_Zoom_ID_Hangout_Whatsapp' className="form-control form-control-lg w-100 rounded border-secondary" />
          </div>
          <div className="my-0">
            <label for="inputEmail4" className="pb-2 normal-text">Select Gender</label>
          </div>
          <div className="form-check">
            <input checked className="form-check-input border-secondary" type="radio" name="Gender" id="exampleRadios1" value="Male" />
            <label className="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input border-secondary" type="radio" name="Gender" id="exampleRadios2" value="Female" />
            <label className="form-check-label" for="exampleRadios2" >
              Female
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input border-secondary" type="radio" name="Gender" id="exampleRadios3" value="Other" />
            <label className="form-check-label" for="exampleRadios3">
              Other
            </label>
          </div>
          <br />
          <h2 className="text-center">Educational Details</h2>
          <div className="row my-2">
            <div className="col-12">
              <label for="exampleFormControlSelect1" className="pb-2 normal-text">Qualification<span style={{ color: "red" }}>*</span></label>
              <select required className="form-select form-select-lg border-secondary" id="exampleFormControlSelect1" name="Qualification" >
                <option>Under Graduate</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
                <option>Diploma</option>
              </select>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-12">
              <label for="exampleFormControlSelect1" className="pb-2 normal-text">Stream <span style={{ color: "red" }}>*</span></label>
              <select required className="form-select form-select-lg border-secondary" id="exampleFormControlSelect1" name='Stream' >
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                <option value="IT">IT</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <h2 className="text-center my-3">Language Details</h2>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Native Language </label>
            <select required className="form-select form-select-lg border-secondary" id="exampleFormControlSelect1" name='Native_Language'>
              <option value="Select Language 1">Select Language 1</option>
              <option value="Abkhazian">Abkhazian</option>
              <option value="Achinese">Achinese</option>
              <option value="Acoli">Acoli</option>
              <option value="Adangme">Adangme</option>
              <option value="Adyghe; Adygei">Adyghe; Adygei</option>
              <option value="Afar">Afar</option>
              <option value="Afrihili">Afrihili</option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Afro-Asiatic languages">Afro-Asiatic languages</option>
              <option value="Ainu">Ainu</option>
              <option value="Akan">Akan</option>
              <option value="Akkadian">Akkadian</option>
              <option value="Albanian">Albanian</option>
              <option value="Albanian">Albanian</option>
              <option value="Aleut">Aleut</option>
              <option value="Algonquian languages">Algonquian languages</option>
              <option value="Altaic languages">Altaic languages</option>
              <option value="Amharic">Amharic</option>
              <option value="Angika">Angika</option>
              <option value="Apache languages">Apache languages</option>
              <option value="Arabic">Arabic</option>
              <option value="Aragonese">Aragonese</option>
              <option value="Arapaho">Arapaho</option>
              <option value="Arawak">Arawak</option>
              <option value="Armenian">Armenian</option>
              <option value="Armenian">Armenian</option>
              <option value="Aromanian; Arumanian; Macedo-Romanian">Aromanian; Arumanian; Macedo-Romanian</option>
              <option value="Artificial languages">Artificial languages</option>
              <option value="Assamese">Assamese</option>
              <option value="Asturian; Bable; Leonese; Asturleonese">Asturian; Bable; Leonese; Asturleonese</option>
              <option value="Athapascan languages">Athapascan languages</option>
              <option value="Australian languages">Australian languages</option>
              <option value="Austronesian languages">Austronesian languages</option>
              <option value="Avaric">Avaric</option>
              <option value="Avestan">Avestan</option>
              <option value="Awadhi">Awadhi</option>
              <option value="Aymara">Aymara</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Bahasa">Bahasa</option>
              <option value="Balinese">Balinese</option>
              <option value="Baltic languages">Baltic languages</option>
              <option value="Baluchi">Baluchi</option>
              <option value="Bambara">Bambara</option>
              <option value="Bamileke languages">Bamileke languages</option>
              <option value="Banda languages">Banda languages</option>
              <option value="Bantu languages">Bantu languages</option>
              <option value="Basa">Basa</option>
              <option value="Bashkir">Bashkir</option>
              <option value="Basque">Basque</option>
              <option value="Basque">Basque</option>
              <option value="Batak languages">Batak languages</option>
              <option value="Beja; Bedawiyet">Beja; Bedawiyet</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Bemba">Bemba</option>
              <option value="Bengali">Bengali</option>
              <option value="Berber languages">Berber languages</option>
              <option value="Bhojpuri">Bhojpuri</option>
              <option value="Bihari languages">Bihari languages</option>
              <option value="Bikol">Bikol</option>
              <option value="Bini; Edo">Bini; Edo</option>
              <option value="Bislama">Bislama</option>
              <option value="Blin; Bilin">Blin; Bilin</option>
              <option value="Blissymbols; Blissymbolics; Bliss">Blissymbols; Blissymbolics; Bliss</option>
              <option value="Bokmål, Norwegian; Norwegian Bokmål">Bokmål, Norwegian; Norwegian Bokmål</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Braj">Braj</option>
              <option value="Breton">Breton</option>
              <option value="Buginese">Buginese</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Buriat">Buriat</option>
              <option value="Burmese">Burmese</option>
              <option value="Burmese">Burmese</option>
              <option value="Caddo">Caddo</option>
              <option value="Catalan; Valencian">Catalan; Valencian</option>
              <option value="Caucasian languages">Caucasian languages</option>
              <option value="Cebuano">Cebuano</option>
              <option value="Celtic languages">Celtic languages</option>
              <option value="Central American Indian languages">Central American Indian languages</option>
              <option value="Central Khmer">Central Khmer</option>
              <option value="Chagatai">Chagatai</option>
              <option value="Chamic languages">Chamic languages</option>
              <option value="Chamorro">Chamorro</option>
              <option value="Chechen">Chechen</option>
              <option value="Cherokee">Cherokee</option>
              <option value="Cheyenne">Cheyenne</option>
              <option value="Chibcha">Chibcha</option>
              <option value="Chichewa; Chewa; Nyanja">Chichewa; Chewa; Nyanja</option>
              <option value="Chinese">Chinese</option>
              <option value="Chinese">Chinese</option>
              <option value="Chinook jargon">Chinook jargon</option>
              <option value="Chipewyan; Dene Suline">Chipewyan; Dene Suline</option>
              <option value="Choctaw">Choctaw</option>
              <option value="Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic">Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic</option>
              <option value="Chuukese">Chuukese</option>
              <option value="Chuvash">Chuvash</option>
              <option value="Classical Newari; Old Newari; Classical Nepal Bhasa">Classical Newari; Old Newari; Classical Nepal Bhasa</option>
              <option value="Classical Syriac">Classical Syriac</option>
              <option value="Coptic">Coptic</option>
              <option value="Cornish">Cornish</option>
              <option value="Corsican">Corsican</option>
              <option value="Cree">Cree</option>
              <option value="Creek">Creek</option>
              <option value="Creoles and pidgins">Creoles and pidgins</option>
              <option value="Creoles and pidgins, English based">Creoles and pidgins, English based</option>
              <option value="Creoles and pidgins, French-based">Creoles and pidgins, French-based</option>
              <option value="Creoles and pidgins, Portuguese-based">Creoles and pidgins, Portuguese-based</option>
              <option value="Crimean Tatar; Crimean Turkish">Crimean Tatar; Crimean Turkish</option>
              <option value="Croatian">Croatian</option>
              <option value="Cushitic languages">Cushitic languages</option>
              <option value="Czech">Czech</option>
              <option value="Czech">Czech</option>
              <option value="Dakota">Dakota</option>
              <option value="Danish">Danish</option>
              <option value="Dargwa">Dargwa</option>
              <option value="Delaware">Delaware</option>
              <option value="Dinka">Dinka</option>
              <option value="Divehi; Dhivehi; Maldivian">Divehi; Dhivehi; Maldivian</option>
              <option value="Dogri">Dogri</option>
              <option value="Dogrib">Dogrib</option>
              <option value="Dravidian languages">Dravidian languages</option>
              <option value="Duala">Duala</option>
              <option value="Dutch, Middle (ca.1050-1350)">Dutch, Middle (ca.1050-1350)</option>
              <option value="Dutch; Flemish">Dutch; Flemish</option>
              <option value="Dutch; Flemish">Dutch; Flemish</option>
              <option value="Dyula">Dyula</option>
              <option value="Dzongkha">Dzongkha</option>
              <option value="Eastern Frisian">Eastern Frisian</option>
              <option value="Efik">Efik</option>
              <option value="Egyptian (Ancient)">Egyptian (Ancient)</option>
              <option value="Ekajuk">Ekajuk</option>
              <option value="Elamite">Elamite</option>
              <option value="English">English</option>
              <option value="English, Middle (1100-1500)">English, Middle (1100-1500)</option>
              <option value="English, Old (ca.450-1100)">English, Old (ca.450-1100)</option>
              <option value="Erzya">Erzya</option>
              <option value="Esperanto">Esperanto</option>
              <option value="Estonian">Estonian</option>
              <option value="Ewe">Ewe</option>
              <option value="Ewondo">Ewondo</option>
              <option value="Fang">Fang</option>
              <option value="Fanti">Fanti</option>
              <option value="Faroese">Faroese</option>
              <option value="Fijian">Fijian</option>
              <option value="Filipino; Pilipino">Filipino; Pilipino</option>
              <option value="Finnish">Finnish</option>
              <option value="Finno-Ugrian languages">Finno-Ugrian languages</option>
              <option value="Fon">Fon</option>
              <option value="French">French</option>
              <option value="French">French</option>
              <option value="French, Middle (ca.1400-1600)">French, Middle (ca.1400-1600)</option>
              <option value="French, Old (842-ca.1400)">French, Old (842-ca.1400)</option>
              <option value="Friulian">Friulian</option>
              <option value="Fulah">Fulah</option>
              <option value="Ga">Ga</option>
              <option value="Gaelic; Scottish Gaelic">Gaelic; Scottish Gaelic</option>
              <option value="Galibi Carib">Galibi Carib</option>
              <option value="Galician">Galician</option>
              <option value="Ganda">Ganda</option>
              <option value="Gayo">Gayo</option>
              <option value="Gbaya">Gbaya</option>
              <option value="Geez">Geez</option>
              <option value="Georgian">Georgian</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="German">German</option>
              <option value="German, Middle High (ca.1050-1500)">German, Middle High (ca.1050-1500)</option>
              <option value="German, Old High (ca.750-1050)">German, Old High (ca.750-1050)</option>
              <option value="Germanic languages">Germanic languages</option>
              <option value="Gilbertese">Gilbertese</option>
              <option value="Gondi">Gondi</option>
              <option value="Gorontalo">Gorontalo</option>
              <option value="Gothic">Gothic</option>
              <option value="Grebo">Grebo</option>
              <option value="Greek, Ancient (to 1453)">Greek, Ancient (to 1453)</option>
              <option value="Greek, Modern (1453-)">Greek, Modern (1453-)</option>
              <option value="Greek, Modern (1453-)">Greek, Modern (1453-)</option>
              <option value="Guarani">Guarani</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Gwich'in">Gwich'in</option>
              <option value="Haida">Haida</option>
              <option value="Haitian; Haitian Creole">Haitian; Haitian Creole</option>
              <option value="Hausa">Hausa</option>
              <option value="Hawaiian">Hawaiian</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Herero">Herero</option>
              <option value="Hiligaynon">Hiligaynon</option>
              <option value="Himachali languages; Western Pahari languages">Himachali languages; Western Pahari languages</option>
              <option value="Hindi">Hindi</option>
              <option value="Hiri Motu">Hiri Motu</option>
              <option value="Hittite">Hittite</option>
              <option value="Hmong; Mong">Hmong; Mong</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Hupa">Hupa</option>
              <option value="Iban">Iban</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Ido">Ido</option>
              <option value="Igbo">Igbo</option>
              <option value="Ijo languages">Ijo languages</option>
              <option value="Iloko">Iloko</option>
              <option value="Inari Sami">Inari Sami</option>
              <option value="Indic languages">Indic languages</option>
              <option value="Indo-European languages">Indo-European languages</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Ingush">Ingush</option>
              <option value="Interlingua (International Auxiliary Language Association)">Interlingua (International Auxiliary Language Association)</option>
              <option value="Interlingue; Occidental">Interlingue; Occidental</option>
              <option value="Inuktitut">Inuktitut</option>
              <option value="Inupiaq">Inupiaq</option>
              <option value="Iranian languages">Iranian languages</option>
              <option value="Irish">Irish</option>
              <option value="Irish, Middle (900-1200)">Irish, Middle (900-1200)</option>
              <option value="Irish, Old (to 900)">Irish, Old (to 900)</option>
              <option value="Iroquoian languages">Iroquoian languages</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Judeo-Arabic">Judeo-Arabic</option>
              <option value="Judeo-Persian">Judeo-Persian</option>
              <option value="Kabardian">Kabardian</option>
              <option value="Kabyle">Kabyle</option>
              <option value="Kachin; Jingpho">Kachin; Jingpho</option>
              <option value="Kalaallisut; Greenlandic">Kalaallisut; Greenlandic</option>
              <option value="Kalmyk; Oirat">Kalmyk; Oirat</option>
              <option value="Kamba">Kamba</option>
              <option value="Kannada">Kannada</option>
              <option value="Kanuri">Kanuri</option>
              <option value="Kara-Kalpak">Kara-Kalpak</option>
              <option value="Karachay-Balkar">Karachay-Balkar</option>
              <option value="Karelian">Karelian</option>
              <option value="Karen languages">Karen languages</option>
              <option value="Kashmiri">Kashmiri</option>
              <option value="Kashubian">Kashubian</option>
              <option value="Kawi">Kawi</option>
              <option value="Kazakh">Kazakh</option>
              <option value="Khasi">Khasi</option>
              <option value="Khoisan languages">Khoisan languages</option>
              <option value="Khotanese; Sakan">Khotanese; Sakan</option>
              <option value="Kikuyu; Gikuyu">Kikuyu; Gikuyu</option>
              <option value="Kimbundu">Kimbundu</option>
              <option value="Kinyarwanda">Kinyarwanda</option>
              <option value="Kirghiz; Kyrgyz">Kirghiz; Kyrgyz</option>
              <option value="Klingon; tlhIngan-Hol">Klingon; tlhIngan-Hol</option>
              <option value="Komi">Komi</option>
              <option value="Kongo">Kongo</option>
              <option value="Konkani">Konkani</option>
              <option value="Korean">Korean</option>
              <option value="Kosraean">Kosraean</option>
              <option value="Kpelle">Kpelle</option>
              <option value="Kru languages">Kru languages</option>
              <option value="Kuanyama; Kwanyama">Kuanyama; Kwanyama</option>
              <option value="Kumyk">Kumyk</option>
              <option value="Kurdish">Kurdish</option>
              <option value="Kurukh">Kurukh</option>
              <option value="Kutenai">Kutenai</option>
              <option value="Ladino">Ladino</option>
              <option value="Lahnda">Lahnda</option>
              <option value="Lamba">Lamba</option>
              <option value="Land Dayak languages">Land Dayak languages</option>
              <option value="Lao">Lao</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lezghian">Lezghian</option>
              <option value="Limburgan; Limburger; Limburgish">Limburgan; Limburger; Limburgish</option>
              <option value="Lingala">Lingala</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Lojban">Lojban</option>
              <option value="Low German; Low Saxon; German, Low; Saxon, Low">Low German; Low Saxon; German, Low; Saxon, Low</option>
              <option value="Lower Sorbian">Lower Sorbian</option>
              <option value="Lozi">Lozi</option>
              <option value="Luba-Katanga">Luba-Katanga</option>
              <option value="Luba-Lulua">Luba-Lulua</option>
              <option value="Luiseno">Luiseno</option>
              <option value="Lule Sami">Lule Sami</option>
              <option value="Lunda">Lunda</option>
              <option value="Luo (Kenya and Tanzania)">Luo (Kenya and Tanzania)</option>
              <option value="Lushai">Lushai</option>
              <option value="Luxembourgish; Letzeburgesch">Luxembourgish; Letzeburgesch</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Madurese">Madurese</option>
              <option value="Magahi">Magahi</option>
              <option value="Maithili">Maithili</option>
              <option value="Makasar">Makasar</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malay">Malay</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Manchu">Manchu</option>
              <option value="Mandar">Mandar</option>
              <option value="Mandingo">Mandingo</option>
              <option value="Manipuri">Manipuri</option>
              <option value="Manobo languages">Manobo languages</option>
              <option value="Manx">Manx</option>
              <option value="Maori">Maori</option>
              <option value="Maori">Maori</option>
              <option value="Mapudungun; Mapuche">Mapudungun; Mapuche</option>
              <option value="Marathi">Marathi</option>
              <option value="Mari">Mari</option>
              <option value="Marshallese">Marshallese</option>
              <option value="Marwari">Marwari</option>
              <option value="Masai">Masai</option>
              <option value="Mayan languages">Mayan languages</option>
              <option value="Mende">Mende</option>
              <option value="Mi'kmaq; Micmac">Mi'kmaq; Micmac</option>
              <option value="Minangkabau">Minangkabau</option>
              <option value="Mirandese">Mirandese</option>
              <option value="Mohawk">Mohawk</option>
              <option value="Moksha">Moksha</option>
              <option value="Mon-Khmer languages">Mon-Khmer languages</option>
              <option value="Mongo">Mongo</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Montenegrin">Montenegrin</option>
              <option value="Mossi">Mossi</option>
              <option value="Multiple languages">Multiple languages</option>
              <option value="Munda languages">Munda languages</option>
              <option value="N'Ko">N'Ko</option>
              <option value="Nahuatl languages">Nahuatl languages</option>
              <option value="Nauru">Nauru</option>
              <option value="Navajo; Navaho">Navajo; Navaho</option>
              <option value="Ndebele, North; North Ndebele">Ndebele, North; North Ndebele</option>
              <option value="Ndebele, South; South Ndebele">Ndebele, South; South Ndebele</option>
              <option value="Ndonga">Ndonga</option>
              <option value="Neapolitan">Neapolitan</option>
              <option value="Nepal Bhasa; Newari">Nepal Bhasa; Newari</option>
              <option value="Nepali">Nepali</option>
              <option value="Nias">Nias</option>
              <option value="Niger-Kordofanian languages">Niger-Kordofanian languages</option>
              <option value="Nilo-Saharan languages">Nilo-Saharan languages</option>
              <option value="Niuean">Niuean</option>
              <option value="No linguistic content; Not applicable">No linguistic content; Not applicable</option>
              <option value="Nogai">Nogai</option>
              <option value="Norse, Old">Norse, Old</option>
              <option value="North American Indian languages">North American Indian languages</option>
              <option value="Northern Frisian">Northern Frisian</option>
              <option value="Northern Sami">Northern Sami</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Norwegian Nynorsk; Nynorsk, Norwegian">Norwegian Nynorsk; Nynorsk, Norwegian</option>
              <option value="Nubian languages">Nubian languages</option>
              <option value="Nyamwezi">Nyamwezi</option>
              <option value="Nyankole">Nyankole</option>
              <option value="Nyoro">Nyoro</option>
              <option value="Nzima">Nzima</option>
              <option value="Occitan (post 1500)">Occitan (post 1500)</option>
              <option value="Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)">Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)</option>
              <option value="Ojibwa">Ojibwa</option>
              <option value="Oriya">Oriya</option>
              <option value="Oromo">Oromo</option>
              <option value="Osage">Osage</option>
              <option value="Ossetian; Ossetic">Ossetian; Ossetic</option>
              <option value="Otomian languages">Otomian languages</option>
              <option value="Pahlavi">Pahlavi</option>
              <option value="Palauan">Palauan</option>
              <option value="Pali">Pali</option>
              <option value="Pampanga; Kapampangan">Pampanga; Kapampangan</option>
              <option value="Pangasinan">Pangasinan</option>
              <option value="Panjabi; Punjabi">Panjabi; Punjabi</option>
              <option value="Papiamento">Papiamento</option>
              <option value="Papuan languages">Papuan languages</option>
              <option value="Pedi; Sepedi; Northern Sotho">Pedi; Sepedi; Northern Sotho</option>
              <option value="Persian">Persian</option>
              <option value="Persian">Persian</option>
              <option value="Persian, Old (ca.600-400 B.C.)">Persian, Old (ca.600-400 B.C.)</option>
              <option value="Philippine languages">Philippine languages</option>
              <option value="Phoenician">Phoenician</option>
              <option value="Pohnpeian">Pohnpeian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Prakrit languages">Prakrit languages</option>
              <option value="Provençal, Old (to 1500);Occitan, Old (to 1500)">Provençal, Old (to 1500);Occitan, Old (to 1500)</option>
              <option value="Pushto; Pashto">Pushto; Pashto</option>
              <option value="Quechua">Quechua</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="Rapanui">Rapanui</option>
              <option value="Rarotongan; Cook Islands Maori">Rarotongan; Cook Islands Maori</option>
              <option value="Reserved for local use">Reserved for local use</option>
              <option value="Romance languages">Romance languages</option>
              <option value="Romanian; Moldavian; Moldovan">Romanian; Moldavian; Moldovan</option>
              <option value="Romanian; Moldavian; Moldovan">Romanian; Moldavian; Moldovan</option>
              <option value="Romansh">Romansh</option>
              <option value="Romany">Romany</option>
              <option value="Rundi">Rundi</option>
              <option value="Russian">Russian</option>
              <option value="Salishan languages">Salishan languages</option>
              <option value="Samaritan Aramaic">Samaritan Aramaic</option>
              <option value="Sami languages">Sami languages</option>
              <option value="Samoan">Samoan</option>
              <option value="Sandawe">Sandawe</option>
              <option value="Sango">Sango</option>
              <option value="Sanskrit">Sanskrit</option>
              <option value="Santali">Santali</option>
              <option value="Sardinian">Sardinian</option>
              <option value="Sasak">Sasak</option>
              <option value="Scots">Scots</option>
              <option value="Selkup">Selkup</option>
              <option value="Semitic languages">Semitic languages</option>
              <option value="Serbian">Serbian</option>
              <option value="Serer">Serer</option>
              <option value="Shan">Shan</option>
              <option value="Shona">Shona</option>
              <option value="Sichuan Yi; Nuosu">Sichuan Yi; Nuosu</option>
              <option value="Sicilian">Sicilian</option>
              <option value="Sidamo">Sidamo</option>
              <option value="Sign Languages">Sign Languages</option>
              <option value="Siksika">Siksika</option>
              <option value="Sindhi">Sindhi</option>
              <option value="Sinhala; Sinhalese">Sinhala; Sinhalese</option>
              <option value="Sino-Tibetan languages">Sino-Tibetan languages</option>
              <option value="Siouan languages">Siouan languages</option>
              <option value="Skolt Sami">Skolt Sami</option>
              <option value="Slave (Athapascan)">Slave (Athapascan)</option>
              <option value="Slavic languages">Slavic languages</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Sogdian">Sogdian</option>
              <option value="Somali">Somali</option>
              <option value="Songhai languages">Songhai languages</option>
              <option value="Soninke">Soninke</option>
              <option value="Sorbian languages">Sorbian languages</option>
              <option value="Sotho, Southern">Sotho, Southern</option>
              <option value="South American Indian languages">South American Indian languages</option>
              <option value="Southern Altai">Southern Altai</option>
              <option value="Southern Sami">Southern Sami</option>
              <option value="Spanish; Castilian">Spanish; Castilian</option>
              <option value="Sranan Tongo">Sranan Tongo</option>
              <option value="Standard Moroccan Tamazight">Standard Moroccan Tamazight</option>
              <option value="Sukuma">Sukuma</option>
              <option value="Sumerian">Sumerian</option>
              <option value="Sundanese">Sundanese</option>
              <option value="Susu">Susu</option>
              <option value="Swahili">Swahili</option>
              <option value="Swati">Swati</option>
              <option value="Swedish">Swedish</option>
              <option value="Swiss German; Alemannic; Alsatian">Swiss German; Alemannic; Alsatian</option>
              <option value="Syriac">Syriac</option>
              <option value="Tagalog">Tagalog</option>
              <option value="Tahitian">Tahitian</option>
              <option value="Tai languages">Tai languages</option>
              <option value="Tajik">Tajik</option>
              <option value="Tamashek">Tamashek</option>
              <option value="Tamil">Tamil</option>
              <option value="Tatar">Tatar</option>
              <option value="Telugu">Telugu</option>
              <option value="Tereno">Tereno</option>
              <option value="Tetum">Tetum</option>
              <option value="Thai">Thai</option>
              <option value="Tibetan">Tibetan</option>
              <option value="Tibetan">Tibetan</option>
              <option value="Tigre">Tigre</option>
              <option value="Tigrinya">Tigrinya</option>
              <option value="Timne">Timne</option>
              <option value="Tiv">Tiv</option>
              <option value="Tlingit">Tlingit</option>
              <option value="Tok Pisin">Tok Pisin</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga (Nyasa)">Tonga (Nyasa)</option>
              <option value="Tonga (Tonga Islands)">Tonga (Tonga Islands)</option>
              <option value="Tsimshian">Tsimshian</option>
              <option value="Tsonga">Tsonga</option>
              <option value="Tswana">Tswana</option>
              <option value="Tumbuka">Tumbuka</option>
              <option value="Tupi languages">Tupi languages</option>
              <option value="Turkish">Turkish</option>
              <option value="Turkish, Ottoman (1500-1928)">Turkish, Ottoman (1500-1928)</option>
              <option value="Turkmen">Turkmen</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Tuvinian">Tuvinian</option>
              <option value="Twi">Twi</option>
              <option value="Udmurt">Udmurt</option>
              <option value="Ugaritic">Ugaritic</option>
              <option value="Uighur; Uyghur">Uighur; Uyghur</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Umbundu">Umbundu</option>
              <option value="Uncoded languages">Uncoded languages</option>
              <option value="Undetermined">Undetermined</option>
              <option value="Upper Sorbian">Upper Sorbian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vai">Vai</option>
              <option value="Venda">Venda</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Volapük">Volapük</option>
              <option value="Votic">Votic</option>
              <option value="Wakashan languages">Wakashan languages</option>
              <option value="Walloon">Walloon</option>
              <option value="Waray">Waray</option>
              <option value="Washo">Washo</option>
              <option value="Welsh">Welsh</option>
              <option value="Welsh">Welsh</option>
              <option value="Western Frisian">Western Frisian</option>
              <option value="Wolaitta; Wolaytta">Wolaitta; Wolaytta</option>
              <option value="Wolof">Wolof</option>
              <option value="Xhosa">Xhosa</option>
              <option value="Yakut">Yakut</option>
              <option value="Yao">Yao</option>
              <option value="Yapese">Yapese</option>
              <option value="Yiddish">Yiddish</option>
              <option value="Yoruba">Yoruba</option>
              <option value="Yupik languages">Yupik languages</option>
              <option value="Zande languages">Zande languages</option>
              <option value="Zapotec">Zapotec</option>
              <option value="Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki">Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki</option>
              <option value="Zenaga">Zenaga</option>
              <option value="Zhuang; Chuang">Zhuang; Chuang</option>
              <option value="Zulu">Zulu</option>
              <option value="Zuni">Zuni</option>

            </select>
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text ">Select Your Currency</label>
            <select required className="form-select form-select-lg border-secondary" id="exampleFormControlSelect1" name='Currency'>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBR</option>

            </select>
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">
              Rate for TV Commercials / On Air Promos (Up to 60 sec)</label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_TV_Commercials_On_Air_promos_Upto_60_Sec" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for Radio Commercials / Promos (Up to 60 sec)</label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Radio_Commercials_Promos_Upto_60_Sec" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">
              Rate for Documentary / TV Shows (Up to 45 Min)
            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Documentary_TV_Shows_Upto_45_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for Documentary / TV Shows (Every Extra Minute after 45 Min)
            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Documentary_TV_Shows_Every_Extra_Minute_After_45_min" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">
              Rate for E-Learning Modules (Up to 15 Min)

            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_E_learning_Modules_Upto_15_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for E-Learning Modules (Up to 30 Min)

            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_E_learning_Modules_Upto_30_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for E-Learning Modules (Up to 60 Min)

            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_E_learning_Modules_Upto_60_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">
              Rate for web related / Off Air works ( Up to 5 Min)


            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Web_related_Modules_Off_Air_works_5_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for web related / Off Air works ( Up to 15 Min)


            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Web_related_Modules_Off_Air_works_15_Mins" />
          </div>
          <div className="my-2">
            <label for="inputEmail4" className="pb-2 normal-text">Rate for web related / Off Air works ( Up to 30 Min)


            </label>
            <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name="Rate_For_Web_related_Modules_Off_Air_works_30_Mins" />
          </div>
          <div class="form-group">
            <label for="inputEmail4" className="pb-2 normal-text">Audio Sample 1 </label><br />
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
          <div class="form-group">
            <label for="inputEmail4" className="pb-2 normal-text">Audio Sample 2 </label><br />
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
          <div class="form-group">
            <label for="inputEmail4" className="pb-2 normal-text">Audio Sample 3 </label><br />
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
          <div className="my-0">
            <label for="inputEmail4" className="pb-2 normal-text">Do you work on weekends?</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="Work_On_weekends" id="exampleRadios1" value="Yes" />
            <label class="form-check-label" for="exampleRadios1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="Work_On_weekends" id="exampleRadios2" value="No" />
            <label class="form-check-label" for="exampleRadios2" >
              No
            </label>
          </div>
          <div class="form-group">
            <label for="inputEmail4" className="pb-2 normal-text">Attache Your CV (.Doc, .Docx, .PDF)</label>
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />

          </div>
          <div class="form-group">
            <label for="inputEmail4" className="pb-2 normal-text">Rate Card</label>
            <label for="exampleFormControlFile1">Example file input</label><br />
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />

          </div>
          <div className="my-3">
            <button type="submit" style={btnStyle} className="btn btn-primary">Register <i aria-hidden="true" className="fas fa-location-arrow mx-2">
            </i></button>

          </div>


        </form>

      </div>





    </>

  )
}

