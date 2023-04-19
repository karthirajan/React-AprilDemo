import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../signup/LandingPage";
import LoginPage from "../signup/LoginPage";
import Login from "./Login";

function Stage(){
    return(
    <div className="stage">
        <Router>
         <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<LandingPage/>}></Route>
         </Routes>
      </Router>
    </div>
    )
}

export default Stage;