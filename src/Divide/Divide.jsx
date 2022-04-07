import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import "./DivideStyle.css";
import { Button } from 'primereact/button';

function Divide() {

    const reset = () => {
        setNumberOne(0)
        setNumberTwo(0)
        setResult(0)

    }


    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(0);

    const divide = () => {
        setResult(numberOne / numberTwo)
    }

    const handleChange = (par1) => {
        if(par1.id === 'num1'){
            setNumberOne(Number(par1.value))
        }else {setNumberTwo(Number(par1.value))
    }}


    return (
        <>
        <Navbar />
    <div className='first'>
        <div className='title'>
            <h1>Division Arena</h1>
            <h3>{result}</h3>
        </div>
        <div className='left-box'>
            
            <input type='number' onChange={(e) => handleChange(e.target)} value={numberOne} id='num1' ></input>
            <label   id='num1' htmlFor='num1'></label>

            

        </div>
        <div className='right-box'>
        <input type='number' onChange={(e) => handleChange(e.target)} value={numberTwo} id='num2'></input>
            <label  id='num2' htmlFor='num2' />
            

        </div>
        <div className='btn'>
        <Button id='divide' onClick={divide}>Divide</Button>
        </div>

    </div>
    </>
    )
}

export default Divide