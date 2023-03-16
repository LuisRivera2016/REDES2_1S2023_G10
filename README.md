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