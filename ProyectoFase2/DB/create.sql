CREATE DATABASE CerberusDB;
USE CerberusDB;

CREATE TABLE `CerberusDB`.`Administrador` (
  `Id` INT NOT NULL,
  `Nombre` VARCHAR(100) NULL,
  `Ocupacion` VARCHAR(100) NULL,
  `Descripcion` VARCHAR(500) NULL,
  PRIMARY KEY (`Id`));

CREATE TABLE `CerberusDB`.`Developer` (
  `Id` INT NOT NULL,
  `Nombre` VARCHAR(100) NULL,
  `Ocupacion` VARCHAR(100) NULL,
  `Descripcion` VARCHAR(500) NULL,
  PRIMARY KEY (`Id`));
