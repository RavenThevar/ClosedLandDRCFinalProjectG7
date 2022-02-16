import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search" element={<LandingPage />}></Route>
        <Route path="/signin" element={<LandingPage />}></Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
