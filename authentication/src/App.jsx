import React from "react";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <h1> Hello man!!</h1>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignIn" element={<SignInPage/>}/>
      <Route path="/SignIn" element={<SignUpPage/>}/>
      <Route path="/SignUp" element={ <AboutPage/>}/>
       </Routes>
      </BrowserRouter>
     
     
  )
}

export default App;
