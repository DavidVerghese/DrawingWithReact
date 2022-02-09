import './App.css';
import Canvas from './Components/Canvas/Canvas';
import Tools from './Components/Tools/Tools';
import Header from './Components/Header/Header';
import Cursor from './Components/Cursor/Cursor';
function App() {



  
  return (<div className="app">
    
    <Cursor/>
    <Header />
 
      <Canvas/>
      <Tools/>

    </div>
  );
}

export default App;
