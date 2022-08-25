import React from 'react'
import { obj } from '../../object/object'
import { Link } from 'react-router-dom'
import style from './Table.module.css'

export default function Table() {
  const objeto = obj
  console.log(objeto)
  return (
    <>
        <Link to='/'>
          <button className={style.boton}>Regresar</button>
        </Link>
        <table className={style.contenedorTabla}>
          <thead>
            <tr >
              <th>Nombre</th>
              <th>Edad</th>
              <th>Carrera</th>
              <th>Hobbie</th>
            </tr>
          </thead>
          <tbody >
            {objeto.map((e)=>(            
            <tr>
                <td>{e.nombre}</td>
                <td> {e.edad} </td>
                <td> {e.carrera} </td>
                <td> {e.hobbie} </td>
            </tr>
              ))}
          </tbody>
        </table>
    </>
  )
}
