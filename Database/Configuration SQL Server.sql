-- ACTIVAR USUARIO sa
-- 1. Activar usuario sa
alter login sa enable

-- 2. En propiedades de inicio de sesión con windows, ir a security y activar SQL Server and Windows authentication 
-- reiniciar servicio de SQL Server

-- 3. Cambiar contraseña si es que no se recuerda
alter login sa with password = 'pipelandia'

-- CREACIÓN DE LOGIN Y USUARIOS
-- 1. Crear login
create login [pipedev] with password = '12345678' must_change, default_database=master, check_expiration=on

-- 2. Crear usuario
create database tv_shows
use tv_shows
alter database tv_shows set multi_user
create user tv_show for login pipedev with default_schema=dbo

create database finances
use finances
alter database finances set multi_user
create user finances for login pipedev with default_schema=dbo

-- CREACIÓN DE TABLAS CON RELACIONES
CREATE TABLE serie(
	id BIGINT PRIMARY KEY IDENTITY(1,1),
	name VARCHAR(50) NOT NULL,
	release INT NOT NULL
);

CREATE TABLE personage(
	id BIGINT PRIMARY KEY IDENTITY(1,1),
	name VARCHAR(50) NOT NULL,
	gender VARCHAR(2) NOT NULL,
	id_serie BIGINT FOREIGN KEY REFERENCES serie(id)
);

CREATE TABLE admin(
	id BIGINT PRIMARY KEY IDENTITY(1,1),
	name VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL
);
