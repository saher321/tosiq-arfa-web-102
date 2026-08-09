from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('testProject/', views.testProject, name="test-project"),
]
