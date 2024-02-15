import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname ==='/'){
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
      </Routes>
    </>
  );
}

export default App;
