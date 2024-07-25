
import './nosotros.css';
import reunion from '../../assets/imagenes/reunion.png';
import lenguajes from '../../assets/imagenes/lenguajes.png';
import React, {useState} from 'react';



function Nosotros() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        comentario: ''
      });
    
      const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const manejoEnvio= (e) => {
        e.preventDefault();
        alert('Formulario enviado');
        setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            comentario: ''
          });
      };
    
    
    return (
<div className="container-fluid my-5">
<h1 className='titulo'>Sobre Nosotros</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse placeat pariatur commodi illo minus asperiores iste necessitatibus quidem ipsum. Necessitatibus facilis voluptas voluptates animi similique nam, a quis assumenda.</p>
<img src={reunion} className='imagen'></img>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur voluptatibus voluptas vero possimus libero magni similique provident iste perferendis. Quibusdam, vitae sed laboriosam iure ipsum facere ad fugit ab?</p>
<img src={lenguajes} className='imagen'></img>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure inventore ullam. Distinctio rem velit voluptas harum ab. Praesentium totam excepturi tempore sunt laboriosam quia est quam accusantium optio sequi.</p>

{/*formulario*/}
<div className="form-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={manejoEnvio}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Introduce tu nombre"
            value={formData.nombre}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Introduce tu correo electrónico"
            value={formData.correo}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Introduce tu número de teléfono"
            value={formData.telefono}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comentario">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            placeholder="Introduce tu comentario"
            value={formData.comentario}
            onChange={manejarCambio}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
</div>
    );
}
export default Nosotros;