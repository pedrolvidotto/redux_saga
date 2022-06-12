import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Reservas from './pages/reserva'

export default function RoutesApp(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/reservas' element={<Reservas/>}/>
        </Routes>
    )
}