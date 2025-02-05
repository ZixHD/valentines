"use client"

import { useRef, useState } from 'react';
import "./buttons.css"

export default function MyButton(){

    const yesSoundRef = useRef();
    const noSoundRef = useRef();
    const [isChecked, setIsChecked] = useState(false);

    const playSound = (soundRef) => {
        if (soundRef.current) {
            soundRef.current.currentTime = 0; 
            soundRef.current.play();
        }
    };



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
                    <a href="/terms" target="_blank" className='target-link'>
                    terms
                    </a>
                </label>
            </div>
            <div className="button-container">
                <div  className={`my_button_yes ${!isChecked ? "disabled" : ""}`} onClick={() => isChecked && playSound(yesSoundRef)}>
                    <span className="text">Yes</span>
                </div>
                <div  className={`my_button_no ${!isChecked ? "disabled" : ""}`} onClick={() =>  isChecked && playSound(noSoundRef)}>
                    <span className="text">No</span>
                </div>
            </div>

            <audio ref={yesSoundRef}>
                <source src="/audio/yes-sound.mp3" type="audio/mpeg" />
            </audio>
            <audio ref={noSoundRef}>
                <source src="/audio/no-sound.mp3" type="audio/mpeg" />
            </audio>
        
        </div>

    )
}

