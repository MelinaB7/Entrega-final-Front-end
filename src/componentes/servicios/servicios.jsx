import React,{ useState, useEffect } from 'react';
import './servicios.css';
import ideas from '../../assets/imagenes/ideas.png';
import  Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';




const Servicios = () => {

const [comentario, setComentario] = useState([]);
const [nuevoComentario, setNuevoComentario] = useState('');

const manejarCambioInput = (evento) => {
  setNuevoComentario(evento.target.value);
};

const manejarAgregarComentario= () => {
  if (nuevoComentario.trim()) {
    const comentarioConComillas = `"${nuevoComentario}"`;
    setComentario([...comentario, comentarioConComillas]);
    setNuevoComentario('');
  }
};

const manejarBorrarComentario = (index) => {
  const comentariosActualizados = comentario.filter((_, i) => i !== index);
  setComentario(comentariosActualizados);
};

return (
  <div className="servicios-container">
      <h1 className='titulo'>Dinos qué necesita tu web</h1>
      <p className='parrafo'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti laborum fugiat aperiam quibusdam perferendis delectus aspernatur accusantium deserunt, praesentium magnam consectetur, at veritatis dolorum a quas nesciunt voluptatem quia!
      </p>
      <img src={ideas} className='imagen' alt="Ideas" />
      <h2 className='titulo2'>Escribe tu Comentario</h2>
      <div className='input-container'>
        <input
          type="text"
          value={nuevoComentario}
          onChange={manejarCambioInput}
          placeholder="Escribe tu comentario"
        />
        <button className='boton-agregar' onClick={manejarAgregarComentario}>Agregar</button>
      </div>
      <ul className='comentarios-lista'>
        {comentario.map((comentario, index) => (
          <li key={index}>
            {comentario}
            <button className='boton-eliminar' onClick={() => manejarBorrarComentario(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className='div-boton'>
        <h2>Por más información, déjanos tu consulta y nos comunicaremos</h2>
        <button className='boton-info' onClick={() => window.location.href = '/nosotros'}>
          Quiero más información
        </button>
      </div>
    </div>
  );
};

export default Servicios;
