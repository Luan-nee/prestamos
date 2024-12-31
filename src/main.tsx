import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Navbar from './layout/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Navbar>
        <h1 className='text-center'>Prestaciones</h1>
        <table className="w-full bg-primary-100 divide-y">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Producto
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Adelanto
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Precio Nominal
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monto a Pagar
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ajustes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2023-10-01
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Producto A
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                S/1.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                S/10.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                S/10.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex gap-1">
                  <button className="btn p-1 bg-blue-500 text-white rounded-md">editar</button>
                  <button className="btn p-1 bg-green-600 text-white rounded-md">modificar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Navbar>
  </StrictMode>
)
