import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>

        <Route path="/" element={<Home/> } />
        <Route path="/Dashboard" element={<Dashboard/> } />
        <Route path="/About" element={ <About/>} />
        <Route path="/Login" element={ <Login/>} />
        <Route path="/SignUp" element={ <SignUp/>} />
        <Route path="/Projects" element={ <Projects/>} />
     
    </Routes>
    </BrowserRouter>
    
  )
}
