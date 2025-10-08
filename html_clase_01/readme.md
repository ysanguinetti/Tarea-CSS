# COMANDOS GIT

- git init: inicializa git en un proyecto.
- git remote add origin [enlace repo]: Conecta un proyecto con un repositorio.
- git remote set-url origin [enlace nuevo repo]: Resvincula el proyecto de un repo, y lo vinculo al nuevo.

## Preparamos nuestros cambios para ser enviados al repositrio.
- git add [nombre achivo]: Registra un archivo para ser enviado al repo.
- git add . : Registra todos los archivos.

## Preparamos el backup
- git commit -m [nombre commit]: Prepara una version segura a la cual podemos volver (un backup).

## Enviamos las actualizaciones al repo
- git push: Envia las actualizaciones a una rama generica
- git push origin [nombre rama]: Envia las actualizacions a una rama origen (default)

## Para revisar informacion
- git status: Revisamos que esta registrado y que no. (rojo: no registrado. Verde: Registrado)
- git log: revisamos la lista de commits realizados. (El que tiene el HEAD es el ultimo y apunta a la rama en la cual se realizó.)

## Descargar de repo a PC
- git clone [enlace repo]: Clona el proyecto del repo a la PC

## Cambiar de rama
- git checkout [nombre rama]

## Actualizar el proyecto de repo a PC
- git pull: Arrastra cambios que existen en el repo pero no en la PC, del repo a la PC.

## Establecer tus datos de username e email
- git config --global user.email "aldanacapoble@gmail.com"
- git config --global user.name "Aldana Capoble"

# Dar colaborador
Entran al repo -> Settings -> Collaborators -> Add people -> Buscan a "lirico" (Matias Dominguez) avatar de atomo.
