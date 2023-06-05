import React from 'react'

export default function Pg6() {
    return (
        <>
            
            <div className="my-0">
                <label for="inputEmail4" className="pb-2 normal-text">Do you work on weekends?</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" />
                <label class="form-check-label" for="exampleRadios1">
                    Yes
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" />
                <label class="form-check-label" for="exampleRadios2" >
                    No
                </label>
            </div>
            <div class="form-group">
                <label for="inputEmail4" className="pb-2 normal-text">Attache Your CV (.Doc, .Docx, .PDF)</label>
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />

            </div>

        </>
    )
}
