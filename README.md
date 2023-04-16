## Proyecto 1 Redes de Computadoras 2 Grupo #10

| Grupo| Carnet | Nombre |
| --- | --- | --- |
| Coordinador | 201602813 | Luis Enrique Rivera Najera |
| Compañero 2 | 201602880 | Bryan Alexander Portillo Alvarado  |
| Compañero 3 | 201709073 | Walter Alexander Guerra Duque |
| Compañero 4 | 201602988	| Ozmar René Escobar Avila |

## Glosario de Conceptos

- **Switch** : Es un dispositivo que permite que la conexión de computadoras y periféricos a la red para que puedan comunicarse entre sí y con otras redes.

- **Switch Multicapa**: Es un dispositivo que integra funciones de conmutación y enrutamiento basado en hardware dentro de una misma plataforma.

- **VLAN** :  También conocidas como Virtual LAN nos permite crear redes lógicamente independientes dentro de la misma red física, haciendo uso de switches gestionables que soportan VLANs para segmentar adecuadamente la red.

- **Modo Access** : Es un tipo de configuración en el puerto que permite pasar solo una Vlan, los paquetes no van etiquetados, y por lo general se usa para conectar dispositivos finales.

- **Modo Trunk** : Permite manejar el tráfico de distintas VLAN en un mismo puerto.

- **Inter-VLAN Routing** : Nos brinda la facilidad de utilizar solo una interfaz para enrrutar los paquetes de varias VLANs que viajan a través del switch conectado a esa interfaz.

- **OSPF** : Es un protocolo de enrutamiento de red de estado de enlace (Link State Routing) que se utiliza para determinar la mejor ruta para enviar paquetes de datos a través de una red IP..


- **LACP** : Es un protocolo de control de agregación de enlaces utilizado para combinar múltiples enlaces de red en un solo canal lógico de mayor ancho de banda y redundancia.

## Glosario de Comandos utilizados 

- **_config t_** : este comando permite acceder al modo configuración global desde el modo privilegiado.

- **_int f#/#_** : este comando permite seleccionar algun puerto de un switch para aplicarle alguna configuración.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.

- **_int port-channel #_** : este comando crea un port-channel con el id especificado si no existe y entra a su modo de configuración.

- **_channel-group # mode <on/active>_** : este comando debe aplicarse a una interfaz fisica o a un rango de interfaces fisicas, y se añadiran las interfaces al port-channel en el modo especificado, el modo on es el modo default que es pasivo y el active hace negociaciones con otro switch de forma automatica.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.


# Topologia

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/main/img/Proyecto1/topo.jpg)

# Configuración Servidores

### DHCP1
Se le asigno al primer servidor DHCP la ip 192.168.10.2 con gateway 192.168.10.1 y mascara 255.255.255.0 y finalmente se activo el servicio DHCP que permite un total 200 usuarios en la red de la VLAN 10. 

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/main/img/Proyecto1/DHCP1.PNG)

### DHCP2
Se le asigno al primer servidor DHCP la ip 192.168.20.2 con gateway 192.168.20.1 y mascara 255.255.255.0 y finalmente se activo el servicio DHCP que permite un total 200 usuarios en la red de la VLAN 20. 

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/main/img/Proyecto1/DHCP2.PNG)

### WEB

Se le asigno al primer servidor DHCP la ip 192.168.30.2 con gateway 192.168.30.1 y mascara 255.255.255.0 y se le activo el servicio HTTP para poder acceder a este servidor web donde se muestra la información de los integrantes del grupo.

# Configuración VLAN

### MSW1
```sh
#Configuracion de VLANS
vlan 10
name INFORMATICA
exit

vlan 20
name VENTAS
exit

vlan 30
name CONEXION
exit

vlan 5
name WEB
exit

#Configuracion de VTP server
vtp version 2
vtp domain g10
vtp password g10
vtp mode server
exit

#Configuracion puertos modo trunk
interface range gigabitEthernet 1/1/1-2
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
interface gigabitEthernet 1/0/1
switchport mode access
switchport access vlan 10
description ACC_VLAN10
exit

interface gigabitEthernet 1/0/2
switchport mode access
switchport access vlan 20
description ACC_VLAN20
exit

#Configuración de Interfaces VLAN
interface vlan 10
ip address 192.168.10.1 255.255.255.0
no shutdown
exit

interface vlan 20
ip address 192.168.20.1 255.255.255.0
no shutdown
exit

interface vlan 30
ip address 10.0.0.1 255.0.0.0
no shutdown
exit
```

### MSW2
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range gigabitEthernet 1/0/1-3
switchport mode trunk
switchport trunk allowed vlan all
exit

interface range gigabitEthernet 1/1/1-3
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.2 255.0.0.0
no shutdown
exit

```

### MSW3
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range gigabitEthernet 1/1/1-2
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
interface gigabitEthernet 1/0/1
switchport mode access
switchport access vlan 5
description ACC_VLAN5
exit

#Configuración de Interfaces VLAN
int vlan 5
ip address 192.168.30.1 255.255.255.0
no shutdown
exit

interface vlan 30
ip address 10.0.0.4 255.0.0.0
no shutdown
exit

```

### MSW4
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range gigabitEthernet 1/0/1-3
switchport mode trunk
switchport trunk allowed vlan all
exit

interface range gigabitEthernet 1/1/1-3
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.3 255.0.0.0
no shutdown
exit
```

### MSW5
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-5
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.5 255.0.0.0
no shutdown
exit
```

### MSW6
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.6 255.0.0.0
no shutdown
exit
```

### MSW7
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

interface range fastethernet 0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,5,10,1002-1005
exit

interface range fastethernet 0/4
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,5,20,1002-1005
exit

#Configuración de Interfaces VLAN
interface vlan 10
ip address 192.168.10.1 255.255.255.0
no shutdown
exit

interface vlan 20
ip address 192.168.20.1 255.255.255.0
no shutdown
exit

interface vlan 30
ip address 10.0.0.7 255.0.0.0
no shutdown
exit

int vlan 5
ip address 192.168.30.1 255.255.255.0
no shutdown
exit
```

### MSW8
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.8 255.0.0.0
no shutdown
exit
```

### MSW9
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-5
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.9 255.0.0.0
no shutdown
exit

```

### MSW10
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.10 255.0.0.0
no shutdown
exit
```

### MSW11
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

interface range fastethernet 0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,5,20,1002-1005
exit

interface range fastethernet 0/4
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,5,10,1002-1005
exit

#Configuración de Interfaces VLAN
interface vlan 10
ip address 192.168.10.1 255.255.255.0
no shutdown
exit

interface vlan 20
ip address 192.168.20.1 255.255.255.0
no shutdown
exit

interface vlan 30
ip address 10.0.0.11 255.0.0.0
no shutdown
exit

int vlan 5
ip address 192.168.30.1 255.255.255.0
no shutdown
exit
```

### MSW12
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface range fastethernet 0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuración de Interfaces VLAN
interface vlan 30
ip address 10.0.0.12 255.0.0.0
no shutdown
exit
```

### SW1
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface fastethernet 0/1
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
int range fastethernet 0/2-3
switchport mode access
switchport access vlan 10
description ACC_VLAN10
exit
```

### SW2
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface fastethernet 0/1
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
int range fastethernet 0/2-3
switchport mode access
switchport access vlan 20
description ACC_VLAN20
exit
```

### SW3
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface fastethernet 0/1
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
int range f 0/2-3
switchport mode access
switchport access vlan 20
description ACC_VLAN20
exit
```

### SW4
```sh
#Configuracion de VTP client
vtp version 2
vtp domain g10
vtp password g10
vtp mode client
exit

#Configuración puertos modo trunk
interface fastethernet 0/1
switchport mode trunk
switchport trunk allowed vlan all
exit

#Configuracion de puertos modo access
int range f 0/2-3
switchport mode access
switchport access vlan 10
description ACC_VLAN10
exit
```
# Configuracion OSPF
Se configuro el protocolo OSPF en cada Switch capa 3.

![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/main/img/Proyecto1/OspfComandos.jpg)

### configuracion SW1
```sh
#Router Activo
enable
config t
interface vlan 30
standby 5 ip 10.0.0.13
standby 5 priority 150
standby 5 preempt
```

# Protocolo HRSP
HSRP funciona en un esquema Activo/Pasivo (Active/Standby) donde el dispositivo Activo se encarga de rutear todo el tráfico, mientras que el router Pasivo sólo está esperando.

Si el dispositivo Activo falla, el router Pasivo dejaría de recibir los mensajes del Activo y, asumiría que dejo de funcionar o se apago, etc. por lo que tomaría el rol de Activo para seguir rutenado todo el tráfico y no causar una disrupción en el servicio

##  cómo se elige al router Activo?

Cada dispositivo dentro de HSRP se le asigna una prioridad que puede ir desde 0 hasta 255, entre más alta sea la prioridad, mejor. Si dicha prioridad no se asigna de manera manual, automáticamente será asignada la prioridad por defecto

## Configuracion HRSP
![](https://github.com/LuisRivera2016/REDES2_1S2023_G10/blob/main/img/Proyecto1/HRSP.png)

el protocolo sera configurado en 2 edificios donde el cuadro azul identifica a los SW que tomaran parte del funcionamiento de este, para ello el rol de Activo lo tomaran los SW que se encuentran en la izq y los de la derecha formaran parte del standby

### configuracion del edificio 1 
```sh
#Router Activo
enable
config t
interface vlan 30
standby 5 ip 10.0.0.13
standby 5 priority 150
standby 5 preempt
```
el activo tendra una prioridad de 150 mientras que el secundario tendra la prioridad por defecto, ambos dispositivos perteneceran al grupo 5 que fue elegido arbitrariamente

```sh
#Router Pasivo
enable
config t
interface vlan 30
standby 5 ip 10.0.0.13
standby 5 preempt
```

### configuracion del edificio 2

```sh
#Router Activo
enable
config t
interface vlan 30
standby 6 ip 10.0.0.14
standby 6 priority 150
standby 6 preempt
```
el activo tendra una prioridad de 150 mientras que el secundario tendra la prioridad por defecto, ambos dispositivos perteneceran al grupo 6 que fue elegido arbitrariamente

```sh
#Router Pasivo
enable
config t
interface vlan 30
standby 6 ip 10.0.0.14
standby 6 preempt
```
