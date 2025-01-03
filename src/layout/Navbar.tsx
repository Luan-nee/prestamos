import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

function Navbar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">MiApp</Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:space-x-4 lg:items-center`}
          >
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Prestamos
              </Link>
            </li>
            <li>
              <Link to="/pagina2" className="text-white hover:text-gray-300">
                Registrar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </article>
  );
}

export default Navbar;