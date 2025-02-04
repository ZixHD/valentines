"use client"

import { useRef } from 'react';
import "./buttons.css"

export default function MyButton(){

    const yesSoundRef = useRef();
    const noSoundRef = useRef();


    const playSound = (soundRef) => {
        if (soundRef.current) {
            soundRef.current.currentTime = 0; 
            soundRef.current.play();
        }
    };



    return(
        <div className='main-container'>
            
            <div className="button-container">
                <div className="my_button_yes" onClick={() => playSound(yesSoundRef)}>
                    <span className="text">Yes</span>
                </div>
                <div className="my_button_no" onClick={() => playSound(noSoundRef)}>
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

