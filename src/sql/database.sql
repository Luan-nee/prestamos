CREATE DATABASE tienda;

USE tienda;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255),
  telefono VARCHAR(20)
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  producto_id INT,
  cantidad INT NOT NULL,
  fecha_prestamo DATE NOT NULL,
  fecha_devolucion DATE,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);