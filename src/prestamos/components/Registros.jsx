import React, { useState, useEffect } from "react";
import prestamosData from "../json/prestamos.json";
import Ojo from "../svg/Ojo";
import Delete from "../svg/Delete";

function Registros() {
  const [prestamos, setPrestamos] = useState(prestamosData);

  useEffect(() => {
    setPrestamos(ordenar(prestamosData));
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedPrestamos = [...prestamos];
    updatedPrestamos[index].pagado = !updatedPrestamos[index].pagado;
    setPrestamos(ordenar(updatedPrestamos));
  };

  const ordenar = (data) => {
    return data.sort((a, b) => a.pagado - b.pagado);
  };

  return (
    <>
      {prestamos.map((prestamo, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={prestamo.pagado}
              onChange={() => handleCheckboxChange(index)}
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prestamo.fecha}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prestamo.nombreDelProducto}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S/{prestamo.adelanto}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S/{prestamo.costo}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S/{prestamo.montoAPagar}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex flex-row gap-1">
              <button className="btn p-1 bg-blue-500 text-white rounded-md">
                <Ojo width={30} />
              </button>
              { 
                prestamo.pagado ? (
                  <button className="btn p-1 bg-red-500 text-white rounded-md">
                    <Delete width={30} />
                  </button>
                ) : (
                  <span></span>
                )
              }
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Registros;
