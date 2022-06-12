import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'
import { useSelector } from 'react-redux'

export default function Header(){
    const reserveSize = useSelector(state => state.reserve.length)

    return(
        <header className='container'>
          
          <Link to='/'>
                <img className='logo' src={logo} alt='Logo do projeto'/>
          </Link>
          <Link to='/reservas' className='reserva'>
              <div>
                  <strong>Minhas Reservas</strong>
                  <strong>{reserveSize} Reservas</strong>
              </div>
          </Link>
        </header>
    )
}