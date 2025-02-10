"use client"

import { useState } from 'react';
import "./buttons.css"

export default function MyButton({onSelection}){


    const [isChecked, setIsChecked] = useState(false);


    const handleYesClick = () => {
        if (isChecked) {
            onSelection("yes");
        }
    };

    const handleNoClick = () => {
        if (isChecked) {
            onSelection("no");
        }
    };

   

    console.log("onSelection", onSelection)

    return(
        <div className='main-container'>
             <div className="checkbox-container">
                <input className="checkbox"
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <label className="agree-check" htmlFor="terms">I agree to the {" "}
                    <a href="terms" target="_blank" className='target-link'>
                    terms
                    </a>
                </label>
            </div>
            <div className="button-container">
                <div  className={`my_button_yes ${!isChecked ? "disabled" : ""}`} onClick={handleYesClick} aria-disabled={!isChecked} >
                    <span className="text">Yes</span>
                </div>
                <div  className={`my_button_no ${!isChecked ? "disabled" : ""}`} onClick={handleNoClick} aria-disabled={!isChecked}>
                    <span className="text">No</span>
                </div>
            </div>

            
        
        </div>

    )
}

