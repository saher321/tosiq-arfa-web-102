from django.contrib import admin
from django.urls import path
from . import views

# http://localhost:8000/test/server
urlpatterns = [
    path('server/', views.test_server, name="testing-server"),
]