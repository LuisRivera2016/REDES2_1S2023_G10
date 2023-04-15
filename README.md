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

- **OSPF** : Es un protocolo de enrutamiento de red de estado de enlace (Link State Routing) que se utiliza para determinar la mejor ruta para enviar paquetes de datos a través de una red IP..



- **LACP** : Es un protocolo de control de agregación de enlaces utilizado para combinar múltiples enlaces de red en un solo canal lógico de mayor ancho de banda y redundancia.

## Glosario de Comandos utilizados 

- **_config t_** : este comando permite acceder al modo configuración global desde el modo privilegiado.

- **_int f#/#_** : este comando permite seleccionar algun puerto de un switch para aplicarle alguna configuración.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.

- **_int port-channel #_** : este comando crea un port-channel con el id especificado si no existe y entra a su modo de configuración.

- **_channel-group # mode <on/active>_** : este comando debe aplicarse a una interfaz fisica o a un rango de interfaces fisicas, y se añadiran las interfaces al port-channel en el modo especificado, el modo on es el modo default que es pasivo y el active hace negociaciones con otro switch de forma automatica.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.


## Topologia


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
