import React from "react";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
       <Header/>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignIn" element={<SignInPage/>}/>
      <Route path="/SignUp" element={<SignUpPage/>}/>
      <Route path="/About" element={ <AboutPage/>}/>
        </Routes>
      </BrowserRouter>
     
     
  )
}

export default App;
