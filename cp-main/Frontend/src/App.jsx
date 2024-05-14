import React from 'react'
import Home from "./home/Home";

import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses';

import Aboutus from './about/Aboutus'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white" >
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
      
    </>
  
  )
}

export default App

