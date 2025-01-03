import React, { useState, useRef } from 'react';
import Camera from '../prestamos/svg/Camera.jsx';
import Webcam from 'react-webcam';

function Registrar() {
  const [formData, setFormData] = useState({
    producto: '',
    adelanto: '',
    costo: '',
    montoAPagar: ''
  });

  const [errors, setErrors] = useState({});
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.producto) tempErrors.producto = "Producto es requerido";
    if (!formData.adelanto) tempErrors.adelanto = "Adelanto es requerido";
    if (!formData.costo) tempErrors.costo = "Costo es requerido";
    if (!formData.montoAPagar) tempErrors.montoAPagar = "Monto a pagar es requerido";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      // Aquí puedes agregar la lógica para enviar los datos del formulario a tu backend o manejarlos según sea necesario
    }
  };

  const handleCameraClick = () => {
    setShowCamera(!showCamera);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setShowCamera(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-5 text-center">Registrar Producto</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="producto">
            Producto
          </label>
          <input
            type="text"
            name="producto"
            id="producto"
            value={formData.producto}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.producto ? 'border-red-500' : ''}`}
            placeholder="Nombre del producto"
          />
          {errors.producto && <p className="text-red-500 text-xs italic">{errors.producto}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adelanto">
            Adelanto
          </label>
          <input
            type="number"
            name="adelanto"
            id="adelanto"
            value={formData.adelanto}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.adelanto ? 'border-red-500' : ''}`}
            placeholder="Monto del adelanto"
          />
          {errors.adelanto && <p className="text-red-500 text-xs italic">{errors.adelanto}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costo">
            Costo
          </label>
          <input
            type="number"
            name="costo"
            id="costo"
            value={formData.costo}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.costo ? 'border-red-500' : ''}`}
            placeholder="Costo del producto"
          />
          {errors.costo && <p className="text-red-500 text-xs italic">{errors.costo}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="montoAPagar">
            Monto a Pagar
          </label>
          <input
            type="number"
            name="montoAPagar"
            id="montoAPagar"
            value={formData.montoAPagar}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.montoAPagar ? 'border-red-500' : ''}`}
            placeholder="Monto a pagar"
          />
          {errors.montoAPagar && <p className="text-red-500 text-xs italic">{errors.montoAPagar}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Registrar
          </button>
          <button
            type="button"
            id="camera"
            onClick={handleCameraClick}
            className="bg-blue-200 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Camera width={24} />
          </button>
        </div>
      </form>
      {showCamera && (
        <div className="flex flex-col items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full max-w-xs"
          />
          <button
            onClick={capture}
            className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Capturar
          </button>
        </div>
      )}
    </div>
  );
}

export default Registrar;