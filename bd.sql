/*
CREAMOS LA BASE DE DATOS cap21
*/
DROP DATABASE IF EXISTS cap21;
CREATE DATABASE cap21;
USE cap21;


/* CREAMOS LA TABLA rol */
create table rol
(
    idRol int not null auto_increment primary key,
    nombreRol varchar(20) not null
);
/* Insertamos datos a la tabla rol */
INSERT INTO rol VALUE(null, "Administrador");
INSERT INTO rol VALUE(null, "Directiva");
INSERT INTO rol VALUE(null, "Socio");



/* CREAMOS LA TABLA usuario */
create table usuario
(
	idUsuario int not null auto_increment primary key,
    idRol int not null,
	email varchar(255),
	contrasena text not null,
    estado bool not null,
    FOREIGN KEY(idRol)REFERENCES rol(idRol)ON UPDATE CASCADE ON DELETE CASCADE
);
/* Insertamos datos a la tabla usuario */
insert into usuario(idUsuario,idRol,usuario,email,contrasena) value (null, 1,"admin@gmail.com","admin",1);
insert into usuario(idUsuario,idRol,usuario,email,contrasena) value (null, 2,"directivan@gmail.com","directiva",1);
insert into usuario(idUsuario,idRol,usuario,email,contrasena) value (null, 3,"socio@gmail.com","socio",0);



/* CREAMOS LA TABLA medidor */
create table medidor
(
    /* Ponemos UNIQUE porque nosotros ingresaremos el numero del medidor como llabe primaria */
    numeroMedidor int UNIQUE not null,
    ordenMedidor varchar(50) not null,
    fechaInstalacion date not null,
    direccionMedidor varchar(50) not null,
    medidaInicial int not null
);

/* Insertamos datos a la tabla medidor */
insert into medidor(numeroMedidor,idRol,usuario,email,contrasena) value (1, "LAO-010OX","24/07/2019","Teniente Venabides",0);
insert into medidor(numeroMedidor,idRol,usuario,email,contrasena) value (2, "LAO-020OX","24/07/2019","21 de Septiembre",0);
insert into medidor(numeroMedidor,idRol,usuario,email,contrasena) value (3, "LAO-030OX","24/07/2019","Primavera",0);


/* CREAMOS LA TABLA socio */
create table socio
(
    idSocio int not null auto_increment primary key,
    numeroMedidor int not null,
    avatar varchar(50) not null,
    compraAcción double not null,
    tipoPago varchar(30) not null,
    primerNombre varchar(15) not null,
    segundoNombre varchar(15) not null,
    primerApellido varchar(15) not null,
    segundoApellido varchar(15) not null,
    fechaNacimiento date not null,
    genero int not null,
    direccion varchar(50),
    telefono int not null,
    telefonoAuxiliar int,
    ci varchar(15) not null,
    expedido varchar(15) not null,
    /* Segun la UI puse dos roles 1-Directiva 2-Socio deberia poner FK de rol o la tabla usuario..¿? */
    FOREIGN KEY(numeroMedidor)REFERENCES medidor(numeroMedidor)ON UPDATE CASCADE ON DELETE CASCADE
);

/* Insertamos datos a la tabla socio */
insert into socio(idSocio,numeroMedidor,compraAcción,tipoPago,primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,genero,direccion,telefono,telefonoAuxiliar,ci,expedido) value (1,1,"girl.png",4000.00,"Bolivianos","Saul","","Mamani","Choque","06/04/1995",1,"Teniente Venabides",65504799,65504799,"6963761","La Paz");
insert into socio(idSocio,numeroMedidor,compraAcción,tipoPago,primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,genero,direccion,telefono,telefonoAuxiliar,ci,expedido) value (2,2,"boy.png",3000.00,"Bolivianos","Gustavo","Angel","Cerezo","Mamani","06/03/1995",1,"Primavera",666,999,"696376d1","Oruro");


/*====================================================================================================================================================================*/

/*=============================================================== Tablero.html =======================================================================================*/

/*====================================================================================================================================================================*/


/* CREAMOS LA TABLA aportePozo */
create table aportePozo
(
    idAportePozo int not null auto_increment primary key,
    numeroMedidor int not null,
    monto double not null,
    FOREIGN KEY(numeroMedidor)REFERENCES medidor(numeroMedidor)ON UPDATE CASCADE ON DELETE CASCADE
);



/* CREAMOS LA TABLA cuboAgua */
create table cuboAgua
(
    idCuboAgua int not null auto_increment primary key,
    monto double not null
    /* No estoy seguro si debamos relacionarlo con la tabla lectura para que la logica funcione ahi o en la tabla recivo */
);



/* CREAMOS LA TABLA multaConsumoAgua */
create table multaConsumoAgua
(
    idMultaConsumoAgua int not null auto_increment primary key,
    monto double not null
     /* No estoy seguro si debamos relacionarlo con la tabla lectura para que la logica funcione ahi o en la tabla recivo */
);



/* CREAMOS LA TABLA cambioNombre */
create table cambioNombre
(
    idCambioNombre int not null auto_increment primary key,
    idSocio int not null,
    monto double not null,
    FOREIGN KEY(idSocio)REFERENCES socio(idSocio)ON UPDATE CASCADE ON DELETE CASCADE
);


/*====================================================================================================================================================================*/

/*=============================================================== cobroAgua.html =======================================================================================*/

/*====================================================================================================================================================================*/


/* CREAMOS LA TABLA recivo */
create table recivo
(
    idRecivoe int not null auto_increment primary key,
    idSocio int not null,
    lecturaActual int,
    numeroRecivo int not null,
    fechaRecivo date not null,
    monto double,
    multa double,
    /* Esas multas hay que jalar de las tablas de multas */
    FOREIGN KEY(idSocio)REFERENCES socio(idSocio)ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(lecturaActual)REFERENCES lecturaMedidor(lecturaActual)ON UPDATE CASCADE ON DELETE CASCADE
);

