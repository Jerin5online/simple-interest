import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
function App() {

const [interest,setInterest]=useState(0)
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [isPrinciple,setIsPrinciple] = useState(true)
const [isRate,setIsRate] = useState(true)
const [isYear,setIsYear] = useState(true)



const setValidate=(e)=>{
const {name,value}=e.target
if(!!value.match(/^[0-9]+$/)){

if(name==='principle'){

setPrinciple(value)
setIsPrinciple(true)
}
else if(name==='rate'){
  setRate(value)
  setIsRate(true)
}
else if(name==='year'){
  setYear(value)
  setIsYear(true)
}
}
else{
  if(name==='principle'){
  setPrinciple(value)
  setIsPrinciple(false)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else if(name==='year'){
    setYear(value)
    setIsYear(false)
  }
}
}
const handleCalculate = (e)=>{
e.preventDefault()
if(!principle || !rate || !year){
  alert('Please fill the form')
}
else{
  setInterest(principle*rate*year/100)
}
}

const handleReset=(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)

}

  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div className='bg-light p-5 rounded' style={{width:"500px"}}><h1>Simple Interest App</h1>
    <p>Calculate Simple Interest Easily</p>
    <div className='d-flex justify-content-center align-items-center w-100 flex-column rounded bg-info p-4'>
    <h1>₹ {''}{interest}</h1>
    <p>Total Simple Interest</p>


    </div>
    <form className='mt-5' onSubmit={handleCalculate}>
    <div>
      <TextField name='principle' value={principle || ""} onChange={(e)=>setValidate(e)} className='w-100 mb-4' id="outlined-basic" label="Principle Amount" variant="outlined" /></div>
      {
      !isPrinciple &&
        <div>
          <p className='text-danger'>Invalid Input</p>
        </div>
      }
      <div>  
      <TextField name='rate' value={rate || ""}  onChange={(e)=>setValidate(e)} className='w-100 mb-4' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
      {
      !isRate &&
        <div>
          <p className='text-danger'>Invalid Input</p>
        </div>
      }
      <TextField name='year' value={year || ""}  onChange={(e)=>setValidate(e)} className='w-100 mb-4' id="outlined-basic" label="Year (Yr)" variant="outlined" />

      {
      !isYear &&
        <div>
          <p className='text-danger'>Invalid Input</p>
        </div>
      }

      </div>


  <Stack direction="row" spacing={2}>
<Button type='submit' className='bg-success' style={{width:"200px",height:"50px"}} disabled={isPrinciple && isRate && isYear?false:true} variant="contained">CALCULATE</Button>
<Button style={{width:"200px",height:"50px"}} onClick={handleReset}  className='bg-danger text-light ' variant="outlined">RESET</Button> 
</Stack>
    </form>
    </div>

    
    </div>
  )
}

export default App;
