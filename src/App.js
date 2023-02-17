import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { Topnav } from './Components/Topnav';
import Productlist from './Components/Productlist';
function App() {
  return (
    <div className="App">
      <Router>
            <Topnav/>
        <Routes>
            <Route path='/' element={<Productlist />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
      </Router>
      {/* <header className="App-header">
        Welcome to Redux with saga Middleware
      </header> */}
    </div>
  );
}

export default App;
