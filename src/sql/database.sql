 CREATE DATABASE prestamos;

CREATE TABLE usuario(
	id INT NOT NULL AUTO_INCREMENT,
  dni VARCHAR(8) NOT NULL,
  clave VARCHAR(50) NOT NULL,
  nombreNegocio VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cliente(
	id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
  dni VARCHAR(8) NOT NULL,
  id_usuario INT NOT NULL, -- id del usuario que registró al cliente
  foto VARCHAR(30) NOT NULL, -- url de la imagen
  PRIMARY KEY (id)
);

CREATE TABLE producto(
	id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE prestamo(
	id INT NOT NULL AUTO_INCREMENT,
  fechaRegistrado DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  fechaDePago DATETIME NOT NULL,
  id_producto INT NOT NULL, -- id del producto 
  id_cliente INT NOT NULL, -- id del cliente que hizo el prestamo
  id_usuario INT NOT NULL, -- id del dueño del producto
  pagado TINYINT NOT NULL DEFAULT 0,
  adelanto DECIMAL(6,2) NOT NULL, -- S/ del adelanto
  PRIMARY KEY (id),
  FOREIGN KEY (id_producto) REFERENCES producto(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

