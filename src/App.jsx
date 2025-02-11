import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from "./Pages/Add"
import View from "./Pages/View"
import './app.css'
import Edit from "./Pages/Edit"
import Register from "./Pages/Register"
import Login from "./Pages/Login"




function App() {


  return (
   <>
   <BrowserRouter>
    <Routes>
            
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Register/>}></Route>
            <Route path="/view" element={<View/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            
            
            

          
           
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
