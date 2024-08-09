import React, { useState } from 'react';
import './datosApi.css';

const DatosApi = () => {
  const [datos, setDatos] = useState(null); // Estado para almacenar los datos

  // Función para hacer la llamada a la API
  const obtenerDatos = async () => {
    try {
      const respuesta = await fetch('https://criptoya.com/api/dolar'); // URL de la API
      const datos = await respuesta.json(); // Parsear los datos a JSON
      setDatos(datos.blue); // Actualizar el estado con los datos obtenidos
    } catch (error) {
      console.error('Error al obtener los datos:', error); // Manejar errores
    }
  };

  return (
    <div className='api'>
      <h2>Cotización del Dólar Blue</h2>
      <div className='parrafo'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia perferendis consequuntur, dignissimos iure dolorem tempore accusamus, sunt similique quod sit praesentium enim facere eligendi ratione, ad facilis. Officia, itaque.</p>
      </div>
      <button onClick={obtenerDatos} className='boton-obtener-datos'>
        Obtener Precios
      </button>
      {datos && (
        <div>
          <h3>Precio de venta: {datos.ask}</h3>
          <h3>Precio de compra: {datos.bid}</h3>
        </div>
      )}
    </div>
  );
};

export default DatosApi;
