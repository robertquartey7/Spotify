import React, { useEffect } from "react";
import { Spinner } from "loading-animations-react";
import { useNavigate } from "react-router-dom";
function Callback() {

  const navigate = useNavigate()

  useEffect(()=>{
      const hash = window.location.hash
      if(hash){
        const token = hash.substring(1).split('&')[0].split('=')[1]
        
        console.log(token);
      }
  }, [])



  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <Spinner
        color1="green"
        color2="#fff"
        textColor="white"
        text="Connecting to the App.."
      />
    </div>
  );
}

export default Callback;
