import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./containers/login"
import SignUp from "./containers/signup"
function App() {
  return (
    //  <BrowserRouter>
    //    <Routes>
    //      <Route path="/containers/signu" element={<Login />} />
    //   </Routes>
    //  </BrowserRouter>
    
        <div>
        <Login/>
        </div>
    
  )
}

export default App
