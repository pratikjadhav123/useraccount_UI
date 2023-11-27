import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Login from './Componants/Login/Login';
import SignUp from './Componants/Register/SignUp';
 

function App() {
  return (
    <>
    <Router>
        <Routes>
         <Route path='/' exact Component={Login} />
         <Route path='/signup' exact Component={SignUp} />
         </Routes>
      </Router>
    </>
  );
}

export default App;

 
