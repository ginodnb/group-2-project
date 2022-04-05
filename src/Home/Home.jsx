import React from 'react';
import "./HomeStyle.css";

function Home() {
    const num = 2;
    const calc = () => {
        return ({num} * 39)
    };
    // console.log(calc);
    return (
    <div>
        Home
        <label htmlFor="result"></label>
        <span id='result'>{2 * {num}}</span>
        <p>Hi</p>
        
        


    </div>
    )
}

export default Home