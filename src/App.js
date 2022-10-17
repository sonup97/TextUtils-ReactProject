// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TestFrom from './components/TestFrom';

function App() {
  return (
   <>
<Navbar title ="TestUtils1" />
<div className='container my-3'>
<TestFrom heading="Enter the text to analyze"></TestFrom>  
{/* <About></About> */}
</div>


    </>
  );
}

export default App;
