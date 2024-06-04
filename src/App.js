import './App.css';
import Navbar from"./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Lunch  from './Pages/Lunch';
import Contact from "./Pages/Contact";
import Dinner from "./Pages/Dinner";
import Dessert from "./Pages/Dessert";
import {BrowseRouter as Router, Route,Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" exact Component={Home}/>
          <Route path="/Menu" exact Component={Menu}/>
          <Route path="/About" exact Component={About}/>
          <Route path="/Contact" exact Component={Contact}/>
          <Route path="/Dinner" exact Component={Dinner}/>
          <Route path="/Lunch" exact Component={Lunch}/>
          <Route path="/Dessert" exact Component={Dessert}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
