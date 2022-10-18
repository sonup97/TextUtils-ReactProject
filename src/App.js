// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TestFrom from './components/TestFrom';

function App() {
  const [ mode , setMode]  = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () =>{
    if (mode ===  'light')
    {setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }
    else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
<Navbar title ="TestUtils" mode = {mode} toggleMode ={toggleMode} />
<div className='container my-3'>
<TestFrom heading="Enter the text to analyze" mode = {mode} ></TestFrom>  
{/* <About></About> */}
</div>


    </>
  );
}

export default App;
