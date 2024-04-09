import './App.css';
import Login from './Components/Login';
import Nav from './Components/Nav';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Nav/>
   <Routes>
   {/* <Route path='/home' element={</>}/> */}
    <Route path='/login' element={<Login/>}/>
    {/* <Route path='/login' element={</>}/> */}
   </Routes>
    </div>
  );
}

export default App;
