import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

export default function Header() {
  return (
    <div className={style.contenedorPrincipal}>
      <Link to='/form'>
        <button className={style.botonForm}>Formulario</button>
      </Link>
      <Link to='/table'>
        <button className={style.botonTable}>Tabla</button>
      </Link>
    </div>
  )
}
