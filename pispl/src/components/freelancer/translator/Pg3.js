import React from 'react'

export default function Pg3({formValue,handleInputChange}) {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Native Language </label>
                <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Native_Language'>
                    <option>Under Graduate</option>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                    <option>Diploma</option>
                </select>
            </div>
            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Other Language 1
                    </label>
                    <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Other_language_1'>
                        <option>select Language 1</option>
                        <option>Graduate</option>
                        <option>Post Graduate</option>
                        <option>Diploma</option>
                    </select>
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Other Language 2
                    </label>
                    <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Other_language_2'>
                        <option>select Language 2</option>
                        <option>Graduate</option>
                        <option>Post Graduate</option>
                        <option>Diploma</option>
                    </select>
                </div>
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Other Language 3
                    </label>
                    <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Other_language_3'>
                        <option>select Language 3</option>
                        <option>Graduate</option>
                        <option>Post Graduate</option>
                        <option>Diploma</option>
                    </select>
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Other Language 4
                    </label>
                    <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Other_language_4'>
                        <option>select Language 4</option>
                        <option>Graduate</option>
                        <option>Post Graduate</option>
                        <option>Diploma</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail4" className="pb-2 normal-text">Expertise (Max 4)
                </label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option value="Adevertising">Adevertising</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Arts">Arts</option>
                    <option value="Education">Education</option>
                    <option value="eLearning">eLearning</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="IT">IT</option>
                    <option value="Legal">Legal</option>
                    <option value="Literature">Literature</option>
                    <option value="Media">Media</option>
                    <option value="Medical">Medical</option>
                    <option value="Software">Software</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Technical">Technical</option>
                    <option value="Telecom">Telecom</option>
                    <option value="Finance">Finance</option>
                    <option value="General">General</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
        </>



    )
}
