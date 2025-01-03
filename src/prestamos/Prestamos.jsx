import Registro from "./components/Registros";

function Prestamos() {
  return (
    <div>
      <h1 className='text-center text-2xl'>Prestamos</h1>
      <table className="w-full bg-primary-100 divide-y">
        <thead>
          <tr>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              {/* Columna de los checkbox */}
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Adelanto
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Costo
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Monto a Pagar
            </th>
            <th scope="col" className="text-center py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              {/* Columan de los botones Ver y Eliminar */}
            </th>
            
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <Registro />
        </tbody>
      </table>
    </div>
  )
}

export default Prestamos;