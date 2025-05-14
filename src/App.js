
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
    <>
    <Navbar title="First App1"/>
    <div className="container my-3">
      <Textform headling="Enter the text to analyze"/>
    </div>
    </>
    
  );
}




export default App;
