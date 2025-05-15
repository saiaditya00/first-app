
import './App.css';
import Navbar from './components/Navbar';

import About from './components/About';



function App() {
  return (
    <>
    <Navbar title="First App1"/>
    <div className="container my-3">
      {/* <Textform headling="Enter the text to analyze"/> */}
      <About/>
    </div>
    </>
    
  );
}




export default App;
