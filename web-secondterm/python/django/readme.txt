Django web framework

cmd
pip install django
django-admin startproject projectname


django first project
venv

*************** STEPS *************
Step #1:
    -> create prject folder

Step #2:
    -> create a virtual env
        cmd: python -m venv env
Step #3:
    -> activate this venv
        cmd: ./env/Scripts/activate.ps1

Step #4:
    -> to install django pkg
     cmd: pip install django

Step #5:
    -> to install django framework
     cmd: django-admin startproject projectname .

Step #6:
    -> run project
     cmd: python manage.py runserver

Step #7: (if you are done with your work)
    -> to stop / close / De-activate venv
     cmd: deactivate

Step #8:
    -> to create application in django project
     cmd: django-admin startapp app_name

Step #9:
    -> add schema in related model.py file
     create class of related app
     E.G: class Employee():
     ref: see my project1 folder

Step #10:
    -> make sure that your app has been added or not in project folder (settings.py)
    -> to make migration
     cmd: python manage.py makemigrations
     Then, cmd: pythone manage.py migrate