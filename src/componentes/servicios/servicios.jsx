import React,{ useState, useEffect } from 'react';
import './servicios.css';
import ideas from '../../assets/imagenes/ideas.png';
import { Link } from 'react-router-dom';
import { Button} from "react-bootstrap";




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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sit qui, labore molestiae perspiciatis quasi rerum ullam ratione, velit ipsam atque! Modi iure laborum nobis aut itaque ullam. Quibusdam, alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolor itaque. Facilis nisi veritatis officiis, quas corrupti nemo, architecto odio atque reprehenderit quaerat impedit explicabo placeat, fugit ipsa vitae dolore!</p>
        <Button
              as={Link}
              to="/nosotros"
              variant="primary"
              className="boton-info"
            >
              Quiero más información
            </Button>
      </div>
    </div>
  );
};

export default Servicios;
