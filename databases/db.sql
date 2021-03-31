--creando la base de datos
CREATE DATABASE nodemysql1;

--usando la base de datos
USE nodemysql1;

--Crear la tabla
CREATE TABLE clientes (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

SHOW TABLES;

DESCRIBE clientes;
