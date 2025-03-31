import React, {useState} from "react";
import "./Welcome.css";
export function Welcome({name, imgUrl}){

    const [style,setStyle] = useState("card");
    const [times,setTimes] = useState(0);
       function toggleClass(){
        console.log("change the card class!")
        if (style==="card"){
            setStyle("active-card");
        }else{setStyle("card")}
       }
       

       function addOne(ev){
        setTimes(times + 1);
        ev.stopPropagation();
       }

    return <section className={style} onClick={toggleClass}>
       <h2> Hello, {name} </h2>
       <img src={imgUrl} />
       <button onClick={addOne}>This has been clicked {times} times.</button>
        </section>
}