import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import style from './Form.module.css'


export default function Form() {

  const [botonActivo, setBotonActivo] = useState(false)
  const [resultadoInput, setResultadoInput] = useState(false)
  
  const [input,setInput]= useState({
    nombre: "",
    edad: "",
    email: "",
    })

    function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      });
      setBotonActivo(true)
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(input)
    setResultadoInput(true) 
    setBotonActivo(false) 
  }
  return (
    <div>
      <Link to='/'>
        <button className={style.botonRegresar} >Regresar</button>
      </Link>
      <div className={style.flexConteiner}>
      <div className={style.form}>
        <form 
          className={style.contenedorForm}
          onSubmit={e=>{handleSubmit(e)}}
        >
        <div>

          <input
            className={style.input}
            placeholder='Nombre'
            type='text'
            value={input.nombre}
            name='nombre'
            onChange={(e)=> {handleChange(e)}} 
          />
        </div>
        <div>
          <input
            className={style.input}
            placeholder='Edad'
            type='number'
            value={input.edad}
            name='edad'
            onChange={(e)=> {handleChange(e)}}
          />
        </div>
        <div>

          <input
            className={style.input}
            placeholder='Correo electronico'
            type='email'
            value={input.email}
            name='email'
            onChange={(e)=> {handleChange(e)}}
          />
        </div>
          <button  type="submit" disabled={!botonActivo} className={style.botonEnviar}>Enviar</button> 
        </form>
      </div>
      {resultadoInput === true? (
      <div className={style.respuesta}>
      <div>
        <label>Nombre : {input.nombre}</label>
      </div>
      <div>
        <label>Edad : {input.edad}</label>
      </div>
      <div>
        <label>Email : {input.email}</label>
      </div>
      </div>

      ) :
      <div className={style.respuesta}>
       <label >Esperando que envie datos...</label> 
      </div>
      }
      
      </div>
    </div>
    )
  }
