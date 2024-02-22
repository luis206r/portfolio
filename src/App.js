import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname ==='/' || ''){
      navigate("/home")
    }
  },[])

  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="home"
            element={
              <Home/>
            }
          />
          <Route path="projects"
            element={
              <Projects/>
            }
          />
          <Route path="about"
            element={
              <About/>
            }
          />
      </Routes>
    </>
  );
}

export default App;
