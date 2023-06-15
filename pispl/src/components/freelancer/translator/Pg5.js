import React from 'react'

export default function Pg5({formValue,handleInputChange}) {
    return (
        <>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Adaptation Rate (Per Word)
                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name='Adaptation_rate_per_word' value={formValue.Adaptation_rate_per_word} onChange={handleInputChange}/>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text" >Book Translation Rate (Per Page)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary"
                name='Book_Translation_rate_per_rate' value={formValue.Book_Translation_rate_per_rate} onChange={handleInputChange}/>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">
                    Proofreading Rate (Per Word)</label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name='Proofreading_rate_per_word' value={formValue.Proofreading_rate_per_word} onChange={handleInputChange}/>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">QA / Review Rate (Per Hour)
                </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name='Qa_Review_rate_per_word' value={formValue.Qa_Review_rate_per_word} onChange={handleInputChange}/>
            </div>
            <div className="my-2">
                <label for="inputEmail4" className="pb-2 normal-text">Your daily translation output (Number of Words Per Day) </label>
                <input type="text" className="form-control form-control-lg w-100 rounded border-secondary" name='Your_daily_translation_output_number_of_words_per_day' value={formValue.Your_daily_translation_output_number_of_words_per_day} onChange={handleInputChange}/>
            </div>
        </>
    )
}
