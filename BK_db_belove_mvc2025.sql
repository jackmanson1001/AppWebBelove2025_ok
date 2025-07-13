CREATE DATABASE  IF NOT EXISTS `db_belove_mvc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_belove_mvc`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_belove_mvc
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autor`
--

DROP TABLE IF EXISTS `autor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `autor` varchar(150) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autor`
--

LOCK TABLES `autor` WRITE;
/*!40000 ALTER TABLE `autor` DISABLE KEYS */;
INSERT INTO `autor` VALUES (1,'ultima prueba','logo.png',1),(2,'cambiar el nombre llll','20210514132528.jpg',1),(3,'popoiipippi','logo.png',1);
/*!40000 ALTER TABLE `autor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `IDCargo` int NOT NULL AUTO_INCREMENT,
  `NombreCargo` varchar(50) DEFAULT NULL,
  `Estado` int DEFAULT '1',
  `UsuarioCreacionCargo` varchar(50) DEFAULT NULL,
  `FechaCreacionCargo` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioModificacionCargo` varchar(50) DEFAULT NULL,
  `FechaModificacionCargo` datetime DEFAULT NULL,
  PRIMARY KEY (`IDCargo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (1,'BARBERO',1,'DVERGARA','2025-01-01 15:29:52','admin','2025-01-19 19:25:10'),(2,'ASISTENTE',1,'admin','2025-01-03 20:34:28','admin','2025-01-04 08:46:09'),(3,'SECRETARIA',1,'admin','2025-01-03 20:34:50','admin','2025-01-04 08:46:14'),(4,'PELUQUERA',1,'admin','2025-01-03 21:13:36','admin','2025-01-04 08:46:19'),(6,'ESTILISTA',1,'admin','2025-02-07 21:29:23',NULL,NULL),(7,'JEFE',1,'admin','2025-07-08 22:34:41',NULL,NULL);
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `IDcliente` int NOT NULL AUTO_INCREMENT,
  `IDPersona` int DEFAULT NULL,
  `IDTipoPersona` int DEFAULT NULL,
  `Estado` int DEFAULT NULL,
  PRIMARY KEY (`IDcliente`),
  KEY `R_47` (`IDPersona`),
  KEY `R_48` (`IDTipoPersona`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`IDPersona`) REFERENCES `persona` (`IDPersona`),
  CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`IDTipoPersona`) REFERENCES `tipopersona` (`IDTipoPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracion`
--

DROP TABLE IF EXISTS `configuracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configuracion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `direccion` text NOT NULL,
  `correo` varchar(100) NOT NULL,
  `foto` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracion`
--

LOCK TABLES `configuracion` WRITE;
/*!40000 ALTER TABLE `configuracion` DISABLE KEYS */;
INSERT INTO `configuracion` VALUES (1,'Vida Informático','925491523','Lima - Perú','angelsifuentes@gmail.com','logo.png');
/*!40000 ALTER TABLE `configuracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_permisos`
--

DROP TABLE IF EXISTS `detalle_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_permiso` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_permiso` (`id_permiso`),
  CONSTRAINT `detalle_permisos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `detalle_permisos_ibfk_2` FOREIGN KEY (`id_permiso`) REFERENCES `permisos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_permisos`
--

LOCK TABLES `detalle_permisos` WRITE;
/*!40000 ALTER TABLE `detalle_permisos` DISABLE KEYS */;
INSERT INTO `detalle_permisos` VALUES (10,2,1),(11,2,2),(12,2,3),(13,2,5),(14,2,8),(15,2,10),(17,2,10),(18,2,11),(69,3,1),(70,3,2),(71,3,3),(72,3,4),(73,3,5),(74,3,6),(75,3,7),(76,3,8),(77,3,9),(78,3,10),(79,3,11),(80,3,12),(81,3,13),(82,4,11);
/*!40000 ALTER TABLE `detalle_permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editorial`
--

DROP TABLE IF EXISTS `editorial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editorial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `editorial` varchar(150) NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editorial`
--

LOCK TABLES `editorial` WRITE;
/*!40000 ALTER TABLE `editorial` DISABLE KEYS */;
INSERT INTO `editorial` VALUES (1,'Ninguna',1),(2,'Toribio anyarin',0);
/*!40000 ALTER TABLE `editorial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `IDPersona` int DEFAULT NULL,
  `IDCargo` int DEFAULT NULL,
  `IdEmpleado` int NOT NULL AUTO_INCREMENT,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`IdEmpleado`),
  KEY `R_44` (`IDPersona`),
  KEY `R_46` (`IDCargo`),
  CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`IDPersona`) REFERENCES `persona` (`IDPersona`),
  CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`IDCargo`) REFERENCES `cargo` (`IDCargo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,7,1,1),(2,2,2,1),(3,1,3,1),(4,1,4,1),(5,1,5,NULL),(6,2,6,NULL),(7,6,7,NULL),(8,3,8,NULL),(9,3,9,NULL),(10,6,10,NULL),(11,4,11,NULL),(12,2,12,NULL),(13,6,13,NULL);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(20) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `carrera` varchar(255) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1,'12345','74589745','Angel sifuentes2','Ingenieria de sistemas','Lima peru','925491523',1),(2,'465','9779879','Prueba','Ingenieria','Lima','987978456',1),(3,'123','44890202','Daniel','Sistemas','comas','984257626',1),(4,'2','123131','dadsd','dsada','dsad','2123131',1);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libro`
--

DROP TABLE IF EXISTS `libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `cantidad` int NOT NULL,
  `id_autor` int NOT NULL,
  `id_editorial` int NOT NULL,
  `anio_edicion` date NOT NULL,
  `id_materia` int NOT NULL,
  `num_pagina` int NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_autor` (`id_autor`),
  KEY `id_materia` (`id_materia`),
  KEY `id_editorial` (`id_editorial`),
  CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`id_autor`) REFERENCES `autor` (`id`),
  CONSTRAINT `libro_ibfk_2` FOREIGN KEY (`id_editorial`) REFERENCES `editorial` (`id`),
  CONSTRAINT `libro_ibfk_3` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libro`
--

LOCK TABLES `libro` WRITE;
/*!40000 ALTER TABLE `libro` DISABLE KEYS */;
INSERT INTO `libro` VALUES (1,'la casa',50,3,1,'2021-05-08',4,1335,'si','logo.png',1),(2,'Javascript',69,1,1,'2021-05-08',2,1478,'Domina javascript','20210514132615.jpg',1),(3,'python para todos',23,1,1,'2021-05-08',1,258,'anaconda','logo.png',1),(4,'ultima prueba',23,1,1,'2021-05-14',1,569,'','20210514132757.jpg',1);
/*!40000 ALTER TABLE `libro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `materia` text NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'Base de Datos',1),(2,'Ingenieria de Software',1),(3,'Algebra',1),(4,'Matematica',1),(5,'Power BI',1),(6,'SQL',1),(7,'Historia',1),(8,'Comunicación',1),(9,'fisica2',1),(10,'Religion',1),(11,'Otros',1),(12,'otros2',1),(13,'otro3',1),(14,'Materia2',1),(15,'fisica4',1),(16,'Fisica5',1),(17,'Politca',1);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `tipo` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,'Libros',1),(2,'Autor',2),(3,'Editorial',3),(4,'Usuarios',4),(5,'Configuracion',5),(6,'Estudiantes',6),(7,'Materias',7),(8,'Reportes',8),(9,'Prestamos',9),(10,'Sexo',10),(11,'Cargo',11),(12,'Documento',12),(13,'Producto',12);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `IDPersona` int NOT NULL AUTO_INCREMENT,
  `NombrePersona` varchar(100) NOT NULL,
  `ApellidoPaternoPersona` varchar(100) NOT NULL,
  `TelefonoPersona` varchar(15) DEFAULT NULL,
  `DocumentoPersona` varchar(20) DEFAULT NULL,
  `DireccionPersona` varchar(200) DEFAULT NULL,
  `Estado` int DEFAULT '1',
  `FechaCreacionPersona` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCreacionPersona` varchar(50) DEFAULT NULL,
  `FechaModificacionPersona` datetime DEFAULT NULL,
  `UsuarioModificacionPersona` varchar(100) DEFAULT NULL,
  `FechaNacimientoPersona` date DEFAULT NULL,
  `CorreoPersona` varchar(100) DEFAULT NULL,
  `IDTipoDocumento` int DEFAULT NULL,
  `IDSexo` int DEFAULT NULL,
  `ApellidoMaternoPersona` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`IDPersona`),
  KEY `R_12` (`IDTipoDocumento`),
  KEY `R_22` (`IDSexo`),
  CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`IDTipoDocumento`) REFERENCES `tipodocumento` (`IDTipoDocumento`),
  CONSTRAINT `persona_ibfk_2` FOREIGN KEY (`IDSexo`) REFERENCES `sexo` (`IDSexo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'DANIEL ENRIQUE','Vergara','99999999','44890202','comas',1,'2025-02-07 20:27:39',NULL,NULL,'admin','2020-01-21','daniel',1,2,'Medrano'),(2,'DAS','SA',NULL,NULL,NULL,1,'2025-02-07 22:02:51',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Samuel','Vergara','','44890202','comas',1,'2025-02-08 10:17:31',NULL,NULL,'admin','2020-02-20','N00159437@upn.pe',1,15,'medrano'),(4,'Katty','Vergara',NULL,NULL,NULL,1,'2025-02-08 10:20:26',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Milagros','Vergara','122112','11111111','comas',1,'2025-02-08 15:28:22',NULL,NULL,NULL,NULL,'danielhotmail',1,1,'Medrano'),(6,'CARLOS ERNESTO','VERGARA','1221','12121121','COMAS',1,'2025-02-08 15:31:50',NULL,NULL,NULL,NULL,'COMAS',2,1,'MEDRANO'),(7,'Eduardo','Vergara','122112','','comas',1,'2025-02-08 16:07:38',NULL,NULL,'admin','2020-01-01','danielhotmail',3,2,'Medrano'),(8,'JASSON','POLO','1212','12345678','COMAS',1,'2025-02-08 16:18:40',NULL,NULL,NULL,'1992-02-01','DANIEL@HOTMAIL.COM',1,1,'CAMPOS'),(9,'JULIA','APATA','121212','1212','COMAS',1,'2025-02-08 16:29:11','1',NULL,NULL,'1988-01-21','DANIEL_VERGARA',1,1,'MEDRANO'),(10,'TRAICWIIOOOUUUU','TRACY1','12344678','11111111','AV.EL PINAR',1,'2025-02-08 16:30:52','admin',NULL,'DVERGARA','1992-01-01','TRACY@HOTMAIL.COM',1,1,'TRACY2'),(11,'JASSON POLO','POLO','1212','','COMAS',1,'2025-02-10 10:45:54','admin',NULL,'admin','2020-01-21','JASSON@HOTMAIL.COM',1,6,'POLO'),(12,'SOFI','GOMERO','123','12212312','COMAS',1,'2025-02-14 15:14:57','admin',NULL,NULL,'1992-01-21','COMAS',3,1,'VERGARA'),(13,'JUAN','VERGARA','112121','44890202','COMAS',1,'2025-07-08 22:53:00','admin',NULL,NULL,'1992-02-21','N00159437@upn.pe',1,2,'APATA');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamo`
--

DROP TABLE IF EXISTS `prestamo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestamo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_estudiante` int NOT NULL,
  `id_libro` int NOT NULL,
  `fecha_prestamo` date NOT NULL,
  `fecha_devolucion` date NOT NULL,
  `cantidad` int NOT NULL,
  `observacion` text NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_libro` (`id_libro`),
  CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id`),
  CONSTRAINT `prestamo_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamo`
--

LOCK TABLES `prestamo` WRITE;
/*!40000 ALTER TABLE `prestamo` DISABLE KEYS */;
INSERT INTO `prestamo` VALUES (1,1,1,'2021-05-11','2021-05-11',5,'',0),(2,1,2,'2021-05-11','2021-05-11',15,'',0);
/*!40000 ALTER TABLE `prestamo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `IDProducto` int NOT NULL AUTO_INCREMENT,
  `NombreProducto` varchar(100) DEFAULT NULL,
  `Estado` int DEFAULT '1',
  `FechaRegistroProducto` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioRegistroProducto` varchar(20) DEFAULT NULL,
  `FechaModificacionProducto` datetime DEFAULT NULL,
  `UsuarioModificacionProducto` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`IDProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'TINTE 2025',1,'2025-01-01 17:26:50','admin','2025-01-09 18:26:40','admin'),(2,'TINTE 2024',1,'2025-01-09 17:42:03','admin','2025-01-09 18:24:43','admin'),(3,'TINTE2025',1,'2025-01-13 09:39:01','admin',NULL,NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productosporcliente`
--

DROP TABLE IF EXISTS `productosporcliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productosporcliente` (
  `IDProductoCliente` int NOT NULL,
  `CantidadProductoCliente` int DEFAULT NULL,
  `PrecioUnitarioProductoCliente` decimal(18,2) DEFAULT NULL,
  `PrecioTotalProductoCliente` decimal(18,2) DEFAULT NULL,
  `FechaRegistroProductosClie` datetime DEFAULT NULL,
  `UsuarioRegistroProductosClie` varchar(50) DEFAULT NULL,
  `EstadoProducClie` int DEFAULT NULL,
  `IDPersona` int NOT NULL,
  PRIMARY KEY (`IDProductoCliente`,`IDPersona`),
  KEY `R_32` (`IDPersona`),
  CONSTRAINT `productosporcliente_ibfk_1` FOREIGN KEY (`IDProductoCliente`) REFERENCES `producto` (`IDProducto`),
  CONSTRAINT `productosporcliente_ibfk_2` FOREIGN KEY (`IDPersona`) REFERENCES `persona` (`IDPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productosporcliente`
--

LOCK TABLES `productosporcliente` WRITE;
/*!40000 ALTER TABLE `productosporcliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `productosporcliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programacionhorarios`
--

DROP TABLE IF EXISTS `programacionhorarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programacionhorarios` (
  `IDHorario` int NOT NULL AUTO_INCREMENT,
  `EstadoProgramacion` varchar(20) DEFAULT NULL,
  `Fechaprogramacion` datetime DEFAULT NULL,
  `Horainicio` time DEFAULT NULL,
  `HoraFin` time DEFAULT NULL,
  `Estado` int DEFAULT NULL,
  `IDPersona` int DEFAULT NULL,
  `UsuarioCreacionHorario` varchar(20) DEFAULT NULL,
  `FechaCreacionHorario` datetime DEFAULT NULL,
  `UsuarioModificacionHorario` varchar(20) DEFAULT NULL,
  `FechaModificacionHorario` datetime DEFAULT NULL,
  PRIMARY KEY (`IDHorario`),
  KEY `R_40` (`IDPersona`),
  CONSTRAINT `programacionhorarios_ibfk_1` FOREIGN KEY (`IDPersona`) REFERENCES `persona` (`IDPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programacionhorarios`
--

LOCK TABLES `programacionhorarios` WRITE;
/*!40000 ALTER TABLE `programacionhorarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `programacionhorarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio` (
  `IDServicio` int NOT NULL AUTO_INCREMENT,
  `DescripcionServicio` varchar(200) DEFAULT NULL,
  `PrecioBaseServicio` decimal(18,2) DEFAULT NULL,
  `FechaCreacionServicio` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCreacionServicio` varchar(50) DEFAULT NULL,
  `UsuarioModificacionServicio` varchar(50) DEFAULT NULL,
  `FechaModificacionServicio` datetime DEFAULT NULL,
  `Estado` int DEFAULT '1',
  PRIMARY KEY (`IDServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'Manicure',25.00,'2025-01-13 14:19:01','admin','admin','2025-01-13 15:47:47',1),(2,'Cepillados',50.00,'2025-01-13 14:40:53','admin','admin','2025-04-16 18:25:53',1),(3,'Corte + Cepillado o Planchado',81.00,'2025-01-13 15:45:54','admin','admin','2025-01-13 15:46:07',1);
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicioporpersona`
--

DROP TABLE IF EXISTS `servicioporpersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicioporpersona` (
  `IDServicioPersona` int NOT NULL,
  `FechaCreacionServPersona` datetime DEFAULT NULL,
  `PrecioFinal` decimal(18,2) DEFAULT NULL,
  `UsuarioCreacionServPersona` varchar(20) DEFAULT NULL,
  `FechaModificacionServPersona` datetime DEFAULT NULL,
  `UsuarioModificacionServPersona` varchar(20) DEFAULT NULL,
  `EstadoAtencion` varchar(20) DEFAULT NULL,
  `FechaReserva` datetime DEFAULT NULL,
  `HoraAtencion` varchar(10) DEFAULT NULL,
  `IDTipoReserva` int DEFAULT NULL,
  `IDPersona` int NOT NULL,
  `EmpleadoAtencion` int DEFAULT NULL,
  `ObservacionServPersona` varchar(500) DEFAULT NULL,
  `EstadoServicioXpersona` int DEFAULT NULL,
  PRIMARY KEY (`IDServicioPersona`,`IDPersona`),
  KEY `R_15` (`IDTipoReserva`),
  KEY `R_38` (`IDPersona`),
  CONSTRAINT `servicioporpersona_ibfk_1` FOREIGN KEY (`IDServicioPersona`) REFERENCES `servicio` (`IDServicio`),
  CONSTRAINT `servicioporpersona_ibfk_2` FOREIGN KEY (`IDTipoReserva`) REFERENCES `tiporeserva` (`IDTipoReserva`),
  CONSTRAINT `servicioporpersona_ibfk_3` FOREIGN KEY (`IDPersona`) REFERENCES `persona` (`IDPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicioporpersona`
--

LOCK TABLES `servicioporpersona` WRITE;
/*!40000 ALTER TABLE `servicioporpersona` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicioporpersona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexo` (
  `IDSexo` int NOT NULL AUTO_INCREMENT,
  `DescripcionSexo` varchar(100) DEFAULT NULL,
  `FechaCreacionSexo` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCreacionSexo` varchar(100) DEFAULT NULL,
  `estado` int DEFAULT '1',
  PRIMARY KEY (`IDSexo`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Femenino2025','2025-01-01 12:46:23','admin',1),(2,'Masculino2',NULL,'admin',1),(3,'Cabro1',NULL,'Dvergara',1),(4,'Lesliaba22',NULL,NULL,1),(5,'Hibrido',NULL,NULL,1),(6,'Hibrido2',NULL,NULL,1),(7,'Hibrido3',NULL,NULL,1),(8,'HIBRIDO4',NULL,'',1),(9,'HIBRIDO5',NULL,'',1),(10,'OTROS2',NULL,'',1),(11,'hibrido6',NULL,'DVERGARA',1),(12,'HBRIDO7',NULL,'1',1),(13,'hibrido8',NULL,'admin',1),(14,'Hibrido9',NULL,'Dvergara',1),(15,'Hibrido10',NULL,'Dvergara',1),(16,'HIBRIDO11','2025-01-03 07:43:01','Dvergara',1),(17,'hibrido12','2025-01-03 08:17:02','Dvergara',1),(18,'Hibrido13','2025-01-03 15:18:32','admin',1),(19,'hibrido14','2025-01-03 15:18:55','admin',1),(20,'HIDDEN21','2025-01-03 15:23:25','admin',1),(21,'HIDDEN12','2025-01-03 15:33:40','admin',1),(22,'Hibrido16','2025-01-03 15:43:53','admin',1),(23,'MASCULINO2025','2025-01-13 18:45:51','admin',1),(24,'123','2025-02-01 14:14:26','admin',1),(25,'ee','2025-02-01 14:24:17','admin',1),(26,'SEXO2026','2025-07-08 22:32:38','admin',1);
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipodocumento`
--

DROP TABLE IF EXISTS `tipodocumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipodocumento` (
  `IDTipoDocumento` int NOT NULL AUTO_INCREMENT,
  `DescripcionDocumento` varchar(50) DEFAULT NULL,
  `Estado` int DEFAULT '1',
  `UsuarioCreacionDocumento` varchar(50) DEFAULT NULL,
  `FechaCreacionDocumento` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioModificacionDocumento` varchar(50) DEFAULT NULL,
  `FechaModificacionDocumento` datetime DEFAULT NULL,
  PRIMARY KEY (`IDTipoDocumento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipodocumento`
--

LOCK TABLES `tipodocumento` WRITE;
/*!40000 ALTER TABLE `tipodocumento` DISABLE KEYS */;
INSERT INTO `tipodocumento` VALUES (1,'DNI',1,'admin','2025-01-01 15:51:37','DVERGARA','2025-01-01 15:51:37'),(2,'BREVETE',1,'admin','2025-01-04 16:57:04','admin','2025-01-09 18:31:15'),(3,'CARNET EXTRANJERIA1',1,'admin','2025-01-09 16:17:22','admin','2025-01-09 18:31:37'),(4,'CEDULA',1,'admin','2025-02-07 17:32:54',NULL,NULL);
/*!40000 ALTER TABLE `tipodocumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipopersona`
--

DROP TABLE IF EXISTS `tipopersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipopersona` (
  `IDTipoPersona` int NOT NULL AUTO_INCREMENT,
  `DescripcionTipoPersona` varchar(100) DEFAULT NULL,
  `EstadoTipoPersona` char(1) DEFAULT NULL,
  `UsuarioCreacionTipoPersona` varchar(20) DEFAULT NULL,
  `FechaCreacionTipoPersona` datetime DEFAULT NULL,
  PRIMARY KEY (`IDTipoPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipopersona`
--

LOCK TABLES `tipopersona` WRITE;
/*!40000 ALTER TABLE `tipopersona` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipopersona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiporeserva`
--

DROP TABLE IF EXISTS `tiporeserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiporeserva` (
  `IDTipoReserva` int NOT NULL AUTO_INCREMENT,
  `DescripcionTipoReserva` varchar(50) DEFAULT NULL,
  `estado` int DEFAULT '1',
  `FechaCreacionReserva` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCreacionReserva` varchar(50) DEFAULT NULL,
  `FechaModificacionReserva` datetime DEFAULT NULL,
  `UsuarioModificacionReserva` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDTipoReserva`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiporeserva`
--

LOCK TABLES `tiporeserva` WRITE;
/*!40000 ALTER TABLE `tiporeserva` DISABLE KEYS */;
INSERT INTO `tiporeserva` VALUES (1,'RESERVA2',1,'2025-01-09 19:35:29','admin','2025-01-13 09:38:11','admin'),(2,'RESERVA',1,'2025-01-09 19:39:43','admin','2025-01-09 21:57:23','admin'),(3,'E',1,'2025-01-09 19:44:05','admin',NULL,NULL),(4,'d',1,'2025-01-09 19:45:34','admin',NULL,NULL),(5,'asaa',1,'2025-01-09 19:51:24','admin',NULL,NULL),(6,'sda',1,'2025-01-09 19:51:38','admin',NULL,NULL),(7,'jhjk',1,'2025-01-09 20:07:38','admin',NULL,NULL),(8,'sasa',1,'2025-01-09 20:14:51','admin',NULL,NULL),(9,'RESERVA1',1,'2025-01-09 20:41:04','admin',NULL,NULL),(10,'RESERVA1',1,'2025-01-09 20:54:45','admin',NULL,NULL),(11,'FFF',0,'2025-01-09 21:00:18','admin',NULL,NULL),(12,'SSS',0,'2025-01-09 21:13:39','admin',NULL,NULL),(13,'lklk',1,'2025-01-09 21:15:03','admin',NULL,NULL),(14,'DSA',1,'2025-01-09 21:17:45','admin',NULL,NULL),(15,'QWERT',1,'2025-01-09 21:19:55','admin',NULL,NULL),(16,'123',1,'2025-01-09 21:25:48','admin',NULL,NULL),(17,'DANIEL',1,'2025-01-09 21:26:02','admin',NULL,NULL),(18,'DANIEL',1,'2025-01-09 21:26:03','admin',NULL,NULL),(19,'DANIEL2',1,'2025-01-09 21:27:40','admin',NULL,NULL),(20,'SSS',1,'2025-01-09 21:30:39','admin',NULL,NULL),(21,'SSS123',1,'2025-01-09 21:30:43','admin',NULL,NULL),(22,'asdfg',1,'2025-01-09 21:40:34','admin',NULL,NULL),(23,'fd',1,'2025-01-09 21:43:21','admin',NULL,NULL),(24,'L',1,'2025-01-09 21:57:29','admin',NULL,NULL),(25,'SAAA',1,'2025-01-09 22:02:04','admin',NULL,NULL),(26,'rrr',1,'2025-01-13 09:04:44','admin',NULL,NULL),(27,'pepelucho',1,'2025-01-13 09:05:05','admin','2025-01-13 09:05:28','admin'),(28,'daniela',1,'2025-01-13 09:05:58','admin',NULL,NULL),(29,'daniela',1,'2025-01-13 09:25:12','admin',NULL,NULL),(30,'SAMUEL',1,'2025-01-13 09:27:16','admin',NULL,NULL),(31,'SAMUEL',1,'2025-01-13 09:27:21','admin',NULL,NULL),(32,'SAMUEL',1,'2025-01-13 09:27:24','admin',NULL,NULL),(33,'PEPELUCHO',1,'2025-01-13 09:37:44','admin',NULL,NULL),(34,'PEPELUCHO',1,'2025-01-13 09:37:55','admin',NULL,NULL),(35,'SAMUEL',1,'2025-01-13 09:38:36','admin',NULL,NULL),(36,'E',1,'2025-01-13 09:39:21','admin',NULL,NULL),(37,'PAULA',1,'2025-01-13 09:44:03','admin',NULL,NULL);
/*!40000 ALTER TABLE `tiporeserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `estado` int NOT NULL DEFAULT '1',
  `IdEmpleado` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','Elena Tingal','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',1,0),(2,'angel','Vida Informatico','519ba91a5a5b4afb9dc66f8805ce8c442b6576316c19c6896af2fa9bda6aff71',1,0),(3,'Dvergara','Daniel Vergara','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',1,0),(4,'JASSON','JASSON','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',1,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_belove_mvc'
--
/*!50003 DROP PROCEDURE IF EXISTS `SP_INSERTARPERSONA_EMPLEADO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_INSERTARPERSONA_EMPLEADO`(
    IN P_NombrePersona VARCHAR(100),
    IN P_ApellidoPaternoPersona VARCHAR(100),
    IN P_ApellidoMaternoPersona VARCHAR(100),
    IN P_TelefonoPersona VARCHAR(100),
    IN P_DocumentoPersona VARCHAR(20),
    IN P_DireccionPersona VARCHAR(200),
    IN P_CorreoPersona VARCHAR(100),
    IN P_IDSexo INT,
    IN P_IDTipoDocumento INT,
    IN P_IDCargo INT,
    IN P_FechaNacimientoPersona DATE,
    IN P_UsuarioCreacion VARCHAR(50)

)
BEGIN
    DECLARE V_ID_PERSONA INT;

    -- Iniciar transacción
    START TRANSACTION;

    -- Verificar si la fecha de nacimiento es vacía, nula o incorrecta y asignar NULL si es necesario
   

    -- Insertar en la tabla PERSONA
    INSERT INTO PERSONA(
        NombrePersona,
        ApellidoPaternoPersona,
        ApellidoMaternoPersona,
        TelefonoPersona,
        DocumentoPersona,
        DireccionPersona,
        CorreoPersona,
        IDSexo,
        IDTipoDocumento,
        FechaNacimientoPersona,
        UsuarioCreacionPersona
    )
    VALUES (
        P_NombrePersona,
        P_ApellidoPaternoPersona,
        P_ApellidoMaternoPersona,
        P_TelefonoPersona,
        P_DocumentoPersona,
        P_DireccionPersona,
        P_CorreoPersona,
        P_IDSexo,
        P_IDTipoDocumento,
        P_FechaNacimientoPersona,
        P_UsuarioCreacion
    );

    -- Obtener el ID de la persona recién insertada
    SET V_ID_PERSONA = LAST_INSERT_ID();

    -- Verificar si la inserción fue exitosa
    IF V_ID_PERSONA IS NULL THEN
        ROLLBACK;  -- Si no se insertó correctamente, revertir los cambios
    ELSE
        -- Insertar en la tabla EMPLEADO
        INSERT INTO EMPLEADO(IDPersona, IDCargo)
        VALUES (V_ID_PERSONA, P_IDCargo);
        
        COMMIT;  -- Si todo fue exitoso, confirmar la transacción
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_MODIFICARPERSONA_EMPLEADO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICARPERSONA_EMPLEADO`(
    IN P_IDPersona INT,  
    IN P_NombrePersona VARCHAR(100),
    IN P_ApellidoPaternoPersona VARCHAR(100),
    IN P_ApellidoMaternoPersona VARCHAR(100),
    IN P_TelefonoPersona VARCHAR(100),
    IN P_DocumentoPersona VARCHAR(20),
    IN P_DireccionPersona VARCHAR(200),
    IN P_CorreoPersona VARCHAR(100),
    IN P_IDSexo INT,
    IN P_IDTipoDocumento INT,
    IN P_IDCargo INT,
    IN P_FechaNacimientoPersona DATE,
    IN P_UsuarioModificacion VARCHAR(50)
)
BEGIN
    -- Iniciar transacción

    -- Actualizar en la tabla PERSONA
    UPDATE PERSONA
    SET 
        NombrePersona = P_NombrePersona,
        ApellidoPaternoPersona = P_ApellidoPaternoPersona,
        ApellidoMaternoPersona = P_ApellidoMaternoPersona,
        TelefonoPersona = P_TelefonoPersona,
        DocumentoPersona = P_DocumentoPersona,
        DireccionPersona = P_DireccionPersona,
        CorreoPersona = P_CorreoPersona,
        IDSexo = P_IDSexo,
        IDTipoDocumento = P_IDTipoDocumento,
        FechaNacimientoPersona = P_FechaNacimientoPersona,
        UsuarioModificacionPersona = P_UsuarioModificacion
    WHERE IDPersona = P_IDPersona;
    -- Verificar si la actualización fue exitosa
   
        -- Actualizar en la tabla EMPLEADO
        UPDATE EMPLEADO
        SET IDCargo = P_IDCargo
        WHERE IDPersona = P_IDPersona;
        -- Verificar si la actualización en EMPLEADO fue exitosa
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-08 23:13:36
