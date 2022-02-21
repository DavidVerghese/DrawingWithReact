import './App.css';
import Studio from './Screens/Studio/Studio';
import Homepage from './Screens/Homepage/Homepage';
import Test from './Screens/Test/Test';
import { Route } from "react-router-dom";
function App() {

  return (<div className="app">
    <Route exact path="/">
      <Homepage/>
    </Route>
    <Route exact path="/test">
      <Test/>
    </Route>
    <Route exact path="/canvas">
      <Studio/>
    </Route>
    </div>
  );
}

export default App;
