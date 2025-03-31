import React from "react";
import {Welcome} from "./Welcome.jsx";
import "./App.css";

export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <Welcome name="Colton"
                    imgUrl={"https:picsum.photos/200?a=5"}/>
                
                <Welcome name="Chloe"
                    imgUrl={"https:picsum.photos/200?a=5"}/>

                <Welcome name="Landen"
                    imgUrl={"https:picsum.photos/200?a=5"}/>
                
            </main>
        </>
    );
}