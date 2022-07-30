import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RenderEj1 from './components/RenderEj1';
import RenderEj2 from './components/RenderEj2';
import RenderEj3 from './components/RenderEj3';
import Styling from './components/Styling';
import Classes from './components/Classes';
import MultiClasses from './components/MultiClasses';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<h1>Bienvenidos al Afterclass!</h1>}/>
        <Route path="/rend1" element={<RenderEj1/>}/>
        <Route path="/rend2" element={<RenderEj2/>}/>
        <Route path="/rend3" element={<RenderEj3/>}/>
        <Route path="/styling" element={<Styling/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/multiclasses" element={<MultiClasses/>}/>
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
