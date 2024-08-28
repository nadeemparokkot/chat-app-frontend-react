import Login from "./Components/Login";
import Navigate from "./Components/Navigate";
import Register from "./Components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigate/>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
