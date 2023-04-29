# Resolución de los primeros 3 desafíos

## Desafío 1

El primer desafío consiste en crear un nuevo repositorio remoto en GitHub y agregar el archivo _README.md_

El link del repositorio es el siguiente: [tps_bootcamp](https://github.com/briangibarra/tps_bootcamp)

El link al archivo _README.md_ es el siguiente: [README.md](https://github.com/briangibarra/tps_bootcamp/blob/main/README.md)

## Desafío 2

El Desafío 2 consistía en agregar el código fuente de _Nest.js_ a nuestro repositorio de GitHub para tenerlo disponible sin usar el comando `git clone` ya que este solo clonaba el repositorio en modo lectura. Por lo que decidí descargar el repositorio de _Nest.js_ en un .zip y agregarlo a la carpeta del proyecto. Luego ejecuté el comando `git add` para agregar el repositorio, luego `git commit -m "agrego la carpeta nestjs"` para tenerlo disponible en nuestro repositorio local. Para finalizar, ejecuté el comando `git push` para subir los cambios del repositorio local al remoto.

La carpeta del proyecto _Nest.js_ se puede ver aquí: [nest-master](https://github.com/briangibarra/tps_bootcamp/tree/main/nest-master) 

## Desafío 3
### Ejercicio 1
Para pausar el trabajo en curso realizaría un `git commit` en el branch _custom-navbar_ en el que estoy trabajando en el repositorio local. Luego me movería al branch _master_ con el comando `git switch master` 

Para traer los cambios ejecutaría `git pull` y eliminaría el archivo _status.js_ del repositorio. Luego de eso, haría un `git commit` para guardar los cambios y haría un `git push` para guardar los cambios en el repositorio remoto. Para seguir trabajando en el branch _custom-navbar_ ejecutaría el comando `git switch custom-navbar`

### Ejercicio 2
Para subir los cambios al branch _master_ estando en el branch _front-react_ hay que ejecutar el comando `git merge master` estando en el branch _front-react_
