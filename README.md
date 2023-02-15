## Practica 1 Redes de Computadoras 2 Grupo #10

| Grupo| Carnet | Nombre |
| --- | --- | --- |
| Coordinador | 201602813 | Luis Enrique Rivera Najera |
| Compañero 2 | 201602880 | Bryan Alexander Portillo Alvarado  |
| Compañero 3 | 201709073 | Walter Alexander Guerra Duque |
| Compañero 4 | 201602988	| Ozmar René Escobar Avila |


## Glosario de Comandos utilizados 

- **_config t_** : este comando permite acceder al modo configuración global desde el modo privilegiado.

- **_int f#/#_** : este comando permite seleccionar algun puerto de un switch para aplicarle alguna configuración.

- **_vtp domain_** : este comando permite asignar un dominio a un switch. Los switches que se encuentren en el mismo dominio de VTP comparten su información de VLAN entre sí, y un switch puede participar en solo un dominio de administración de VTP.

- **_vtp password_** : este comando protege las actualizaciones de VTP estableciendo una contraseña segura.

- **_vtp mode client_** : este comando hace que el switch este en modo cliente, este modo no permite a un switch cambiar su configuración de VLAN. Eso significa que un switch cliente VTP no puede crear ni eliminar VLAN. Sin embargo, las actualizaciones de VTP recibidas se procesan y reenvían.

- **_vtp mode server_** : este comando permite que un switch anuncie sus configuraciones de VLAN a otros switches en el mismo dominio VTP y sincronizar sus configuraciones de VLAN con otros switches en función de los anuncios recibidos a través de enlaces troncales. Estos switches si pueden crear y eliminar VLANs.

- **_vtp mode transparent_** : este comando permite que un switch no sincronice la configuracion de las VLAN con otros switches aunque, puede enviar la informacion de las VLAN. Estos switches si pueden crear y eliminar VLANs pero solo locales no del VTP server.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.

- **_switchport mode trunk_** : este comando pone la interfaz en modo de enlace troncal permanente y negocia para convertir el enlace vecino en un enlace troncal.

- **_sh spanning-tree_** : muestra la configuracion asociada a protocolo STP que funciona en el nivel de la capa 2 del modelo OSI

- **_spanning-tree mode pvst_** : asigna el tipo de spanning-tree asociado al protocolo

## Topologia
![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/Topologia.jpg)

## Configuracion Topologia
### SW3 (Server)

```sh
enable
configure terminal
```
Configurar Interfaces en Modo Trunk
```sh
interface range fastethernet 0/1-2
switchport mode trunk
switchport trunk allowed vlan all
exit
```

Configurar VTP
```sh
vtp version 2
vtp domain g10
vtp password g10
vtp mode server
exit
```

Configuracion de VLANS
```sh
vlan 20
name PRIMARIA
exit

vlan 30
name BASICOS
exit

vlan 40
name DIVERSIFICADO
exit
```

Configuracion de Interfaces en Modo Acces
```sh
interface fastEthernet 0/5
switchport mode access 
switchport access vlan 30
exit

interface fastEthernet 0/4
switchport mode access 
switchport access vlan 20
exit

interface fastEthernet 0/3
switchport mode access 
switchport access vlan 40
exit
```

### SW1
Configuracion de Interfaces en Modo Trunk
```sh
interface range fastethernet 0/1-4
switchport mode trunk
switchport trunk allowed vlan all
exit
```

Configuracion del VTP
```sh
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit
```

Configuracion de Interfaces en Modo Acces
```sh
interface fastEthernet 0/5
switchport mode access 
switchport access vlan 20
exit
```

### SW2
Configuracion de Interfaces en Modo Trunk
```sh
interface range fastethernet 0/1-2
switchport mode trunk
switchport trunk allowed vlan all
exit
```

Configuracion del VTP
```sh
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit
```

Configuracion de Interfaces en Modo Acces
```sh
interface range fastEthernet 0/3-4
switchport mode access 
switchport access vlan 40
exit
```

### SW4
Configuracion de Interfaces en Modo Trunk
```sh
interface range fastethernet 0/1-2
switchport mode trunk
switchport trunk allowed vlan all
exit
```

Configuracion del VTP
```sh
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit
```

Configuracion de Interfaces en Modo Acces
```sh
interface range fastEthernet 0/3-4
switchport mode access 
switchport access vlan 30
exit
```

### SW5
Configuracion de Interfaces en Modo Trunk
```sh
interface range fastethernet 0/1-4
switchport mode trunk
switchport trunk allowed vlan all
exit
```

Configuracion del VTP
```sh
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit
```

Configuracion de Interfaces en Modo Acces
```sh
interface fastEthernet 0/5
switchport mode access 
switchport access vlan 20
exit
```

## Elección de escenario con mejor resultado de convergencia

1.  Escenario PVST

para la prueba de convergencia se realizo un ping extendido
```sh
ping -t 192.168.20.3
```
desde la maquina con direccion ip 192.168.20.2 perteneciente al grupo de PRIMARIA
hacia la maquina con direccion 192.168.20.3
se tomo como referencia el SW3 y se apago la interfaz 0/1; 
el tiempo que tomo el protocolo en escoger una ruta alternativa fue de 
de un aproximado de 38 segundos

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/convergencia%202.png)

2. Escenario Rapid PVST

Para la prueba de Convergencia primero se cambio el modo spanning-tree de todos los switch
con el comando:

```sh
spanning-tree mode rapid-pvst
```

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/SW1_Rpvst.jpg)

Luego de eso se procedio a hacer ping entre dos computadoras de la misma VLAN para posteriormente 
apagar un puerto del switch seleccionado para poder ver en cuanto tiempo escoge una ruta alternativa.

```sh
conf t
int f0/1
shutdown
no shutdown
```
### Vlan Primaria

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/PRIMARIA_SHUTDOWN.jpg)
![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/PRIMARIA_RPVST.jpg)

### Vlan Basicos

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/basicos_SHUTDOWN.jpg)
![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/BASICOS_RPVST.jpg)

### Vlan Diversificado

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/DIVERSIFICADO_shutdown.jpg)
![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/documentation/img/DIVERSIFICADO_PVST.jpg)

El tiempo que les tomo en los tres casos fue de aproximadamente 1 segundo.
Por lo que se eligio este protocolo para implementarlo en la practica.
