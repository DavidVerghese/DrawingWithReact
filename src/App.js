import './App.css';
import Canvas from './Components/Canvas/Canvas';
import Tools from './Components/Tools/Tools';
import Header from './Components/Header/Header';
function App() {



  
  return (<div className="app">
    
    <Header />
 
      <Canvas/>
      <Tools/>

    </div>
  );
}

export default App;
