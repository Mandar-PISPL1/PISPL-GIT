import React from 'react'

export default function Pg4() {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Select Your Currency</label>
                <select class="form-select form-select-lg" id="exampleFormControlSelect1" name='Currency'>
                    <option>INR</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBR</option>

                </select>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Translation Rate From EN {'>'} Native (Per Word)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" />
            </div>
            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text" >Translation Rate From EN {'>'} Language 1 (Per Word)</label>
                    <input type="text" className="form-control form-control-lg mb-2 w-100 rounded border-secondary" name="Translation_Rate_From_EN_to_Language_1_Per_Word"/>
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Translation Rate From EN {'>'} Language 2 (Per Word)</label>
                    <input type="text" className="form-control form-control-lg mb-2 w-100 rounded border-secondary" name="Translation_Rate_From_EN_to_Language_2_Per_Word"/>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Translation Rate From EN {'>'} Language 3 (Per Word)</label>
                    <input type="text" className="form-control form-control-lg mb-2 w-100 rounded border-secondary"name="Translation_Rate_From_EN_to_Language_3_Per_Word"/>
                </div>
                <div class="col-md-6 col-12">
                    <label for="inputEmail4" className="pb-2 normal-text">Translation Rate From EN {'>'} Language 4 (Per Word)</label>
                    <input type="text" className="form-control form-control-lg mb-2 w-100 rounded border-secondary" name="Translation_Rate_From_EN_to_Language_4_Per_Word"/>
                </div>
            </div>
        </>
    )
}
