import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cadastre from "../pages/Cadastre"
import Login from "../pages/Login"

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastre' element={<Cadastre/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Router