import logo from './logo.svg';
import './App.css';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
