# nota4

paquetes necesario para iniciar el proyecto

pip install django
pip install Pillow
pip install cx_oracle
pip install django-widget-tweaks


se debe crear un ambiente virtual pipenv

SUPERUSUARIO 
user: prueba4
pass : prueba4
 

\RaulGarcia_nota4\webpersonal

Creacion se usar para la base de datos oracle

create user c##prueba4 identified by prueba4;
grant connect, resource to c##prueba4;
alter user c##prueba4 default tablespace users quota unlimited on users;
