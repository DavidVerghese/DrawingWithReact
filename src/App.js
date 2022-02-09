import './App.css';
import Canvas from './Components/Canvas/Canvas';
import Tools from './Components/Tools/Tools';
import Header from './Components/Header/Header';
function App() {



  
  return (<div className="app">
    <Header/>
        <div className="field">
      <Canvas/>
      <Tools/>
  </div>

    </div>
  );
}

export default App;
