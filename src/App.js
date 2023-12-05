
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
 import "./App.css"
import Services from "./routes/Services";

function App() {
  return (
    <>
    <Router>
        <Routes>
         <Route path='/' exact Component={Home} />
         <Route path='/services' exact Component={ Services } />
         <Route path='/about' exact Component={About } />
         <Route path='/contact' exact Component={ Contact } />
         </Routes>
      </Router>
    </>
  );
}

export default App;

 
