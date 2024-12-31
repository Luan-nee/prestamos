import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function Navbar({children} : props) {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <nav className="border-black flex flex-col h-screen bg-purple-500 shadow-lg">
          <a href="#" className="text-gray-300 hover:bg-purple-600 hover:text-white block px-3 py-2 text-xl font-medium">Inicio</a>
          <a href="#" className="text-gray-300 hover:bg-purple-600 hover:text-white block px-3 py-2 text-xl font-medium">Servicios</a>
          <a href="#" className="text-gray-300 hover:bg-purple-600 hover:text-white block px-3 py-2 text-xl font-medium">Contacto</a>
      </nav>
      <div className="flex flex-col p-2 text-2xl font-bold">
        {children}
      </div>
    </div>
  );
}

export default Navbar;
