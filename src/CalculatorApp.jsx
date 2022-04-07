import React, { useState }  from 'react'
import './CalculatorApp.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function CalculatorApp() {
  return (
    <div className='calcApp border-gradient border-gradient-purple'>
      <form action="">
      <h4>Sign up to our mailing list</h4>
      {/* <input id='first-name' type="text"></input>
      <label htmlFor="first-name"></label> */}

                  
                      <div className='p-float-label'>
                <InputText className='tags' id='first-name' />
                <label htmlFor="in">First Name</label>
                </div>
                <div className='p-float-label'>
                <InputText className='tags' id='second-name' />
                <label htmlFor="in">Second Name</label>
                </div>
                <div id='bottom' className='p-float-label'>
                <InputText className='tags' id='email' />
                <label htmlFor="in">Email</label>

                </div>
                <Button id='submit-button' typeof='submit'>Submit</Button>

              



      </form>

    </div>
  )
}

export default CalculatorApp