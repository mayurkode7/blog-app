
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


// pages 
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import CreateBlog from './pages/CreateBlog'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/sign-in' element={<SignIn />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/create-blog' element={<CreateBlog />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
