## Practica 2 Redes de Computadoras 2 Grupo #10

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


## Glosario de Comandos utilizados 

- **_config t_** : este comando permite acceder al modo configuración global desde el modo privilegiado.

- **_int f#/#_** : este comando permite seleccionar algun puerto de un switch para aplicarle alguna configuración.

- **_switchport mode access_** : este comando establece el puerto en modo acceso.

- **_int port-channel #_** : este comando crea un port-channel con el id especificado si no existe y entra a su modo de configuración.

- **_channel-group # mode <on/active>_** : este comando debe aplicarse a una interfaz fisica o a un rango de interfaces fisicas, y se añadiran las interfaces al port-channel en el modo especificado, el modo on es el modo default que es pasivo y el active hace negociaciones con otro switch de forma automatica.


## Configuracion Topologia

### MSW1

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit

vlan 20
name VENTAS
exit
```

Configuración de Interfaces VLAN
```sh
int vlan 70
ip address 192.168.11.1 255.255.255.0
no shutdown
exit

int vlan 20
ip address 1.1.1.2 255.0.0.0
no shutdown
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/2-3
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit

int f 0/4
switchport mode access
switchport access vlan 20
description ACC_VLAN20
exit
```

### MSW2

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit

vlan 20
name VENTAS
exit

vlan 30
name DISTRIBUCION
exit
```

Configuración de Interfaces VLAN
```sh
int vlan 70
ip address 192.168.12.1 255.255.255.0
no shutdown
exit

int vlan 20
ip address 1.1.1.3 255.0.0.0
no shutdown
exit

int vlan 30
ip address 10.0.0.2 255.0.0.0
no shutdown
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/3-4
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit

int f 0/2
switchport mode access
switchport access vlan 20
description ACC_VLAN20
exit

int f 0/5
switchport mode access
switchport access vlan 30
description ACC_VLAN30
exit
```

### MSW3

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit

vlan 30
name DISTRIBUCION
exit
```

Configuración de Interfaces VLAN
```sh
int vlan 70
ip address 192.168.13.1 255.255.255.0
no shutdown
exit

int vlan 30
ip address 10.0.0.3 255.0.0.0
no shutdown
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/3-4
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit


int f 0/2
switchport mode access
switchport access vlan 30
description ACC_VLAN30
exit
```

### SW1

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/2-6
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit
```

### SW2

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/2-4
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit
```

### SW3

```sh
enable
configure terminal
```

Configuración de VLANS
```sh
vlan 70
name CORPORATIVO
exit
```

Configuración de Interfaces en Modo Access
```sh
int range f 0/2-5
switchport mode access
switchport access vlan 70
description ACC_VLAN70
exit
```

#Configuracion LACP
Para configurar el link-aggregation, la definición del port-channel debe coincidir con la configuración de las interfaces físicas, en este caso del switchport y del modo acceso.

##Huehuetenango
###MSW1

```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access
switchport nonegotiate

int range f0/2-3
channel-group 1 mode active
```

###SW1
```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access

int range f0/5-6
channel-group 1 mode active
```


##Petén
###MSW2

```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access
switchport nonegotiate

int range f0/3-4
channel-group 1 mode active
```

###SW2
```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access

int range f0/3-4
channel-group 1 mode active
```

##Alta Verapaz
###MSW3

```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access
switchport nonegotiate

int range f0/3-4
channel-group 1 mode active
```

###SW3
```sh
ena
conf t
int port-channel 1
switchport access vlan 70
switchport mode access

int range f0/4-5
channel-group 1 mode active
```
