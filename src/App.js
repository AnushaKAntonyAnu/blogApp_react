import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import LogIn from './components/LogIn';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBlog/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
