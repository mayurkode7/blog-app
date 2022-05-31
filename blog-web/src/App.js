
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import React, { useState, useEffect } from 'react'

// pages 
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import CreateBlog from './pages/CreateBlog'
import SignOut from './components/SignOut'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    console.log("User is Authenticated", isAuthenticated)
  }, [isAuthenticated])

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create-blog">Create Blog</Link>
        {!isAuthenticated ? <Link to="/sign-in">Sign In</Link> : <SignOut setIsAuthenticated={setIsAuthenticated}></SignOut>}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/sign-in' element={<SignIn setIsAuthenticated={setIsAuthenticated} />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/create-blog' element={<CreateBlog />} ></Route>
      </Routes>
    </Router >
  );
}

export default App;
