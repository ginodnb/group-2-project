import React, { useState, useForm } from 'react';
import "./HomeStyle.css";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';


function Home() {
    const ops = ['*', '/'];

    // const textInput = React.useRef();
    // const clearInput = () => (textInput.current.value = 0);

    // const {reset } = useForm<FormValues>({
    //     defaultValues: {
    //         numberOne: 0,
    //         numberTwo: 0
    //     }
    // })

    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    const [result, setResult] = useState(0);
    // const [reset, setReset] = useState();

    const multiply = () => {
      setResult(numberOne * numberTwo)

    }

    const handleChange = (par1) => {
        if (par1.id === 'num1') {
        setNumberOne(Number(par1.value)) 
        }     else {
        setNumberTwo(Number(par1.value))
        } 
    
    }

    // console.log(calc);
    return (
    <div className='main'>


        <div className='main-2'>
        <div className='header-div'>
        <h1>The Multiplier Machine</h1>
        </div>

        <div className='main-3'>

        <p>Your number is {result}</p>

            <input type='number' onChange={(e) => handleChange(e.target)} value={numberOne} id='num1' ></input>
            <label   id='num1' htmlFor='num1'></label>
            <input type='number' onChange={(e) => handleChange(e.target)} value={numberTwo} id='num2'></input>
            <label  id='num2' htmlFor='num2' />

            <Button id='multiply' onClick={multiply}>Multiply</Button>
            <br />
            <input type='button' value="Reset" id='restter'></input>
            {/* <label htmlFor="resetter"></label> */}


            

        </div>
    
        </div>
        
    </div>
    )
}

export default Home