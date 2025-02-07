
"use client"

import { useEffect, useRef, useState } from "react";
import MyButton from "../../components/buttons/buttons";
import Positive from "../../components/decision/positive/positive";
import Negative from "../../components/decision/negative/negative";

export default function Home() {

  const [selection, setSelection] = useState(null);

  const yesSoundRef = useRef();
  const noSoundRef = useRef();

  const playSound = (soundRef) => {
    if (soundRef.current) {
        soundRef.current.currentTime = 0; 
        soundRef.current.play();
    }
  };

  useEffect(()=>{
    if(selection == "yes"){
      playSound(yesSoundRef)
    }else{
      playSound(noSoundRef)
    }
  }, [selection])

  return (
    <div>
       {!selection ? (
      <div className="positioning">
        <img className="image-valentine" src="image/new_valentines.png"/>
        <MyButton onSelection={setSelection}></MyButton>
        </div>
      ) : (
        <div className="gif-container">
            {selection === "yes" ? (
              <div>
                <Positive></Positive>
                <audio ref={yesSoundRef}>
                  <source src="/audio/yes-sound.mp3" type="audio/mpeg" />
                </audio>
              </div>
            
            ) : (
              <div>
                <Negative></Negative>
                <audio ref={noSoundRef}>
                  <source src="/audio/no-sound.mp3" type="audio/mpeg" />
                </audio>
              </div>
            )}
        </div> 
    )}
    </div>
    
  );
}
