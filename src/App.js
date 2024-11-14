import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'; 
import About from './components/About';
import Home from './components/Home';

import Support from './components/Support';
import NotFound from './components/NotFound';
import Labs from './components/Labs';

import { Link, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>

      <Routes>
        {/* <Route path="/" element = {<div>Home Page</div>}></Route> */}

        {/* Here: I created Home as parent route and rest as child route */}

        <Route path="/" element = {<MainHeader/>}>
            {/* Default Route */}
            <Route index element={<Home/>}/>
            <Route path="/support" element = {<Support/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/labs" element = {<Labs/>}/>
            <Route path="*" element = {<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
