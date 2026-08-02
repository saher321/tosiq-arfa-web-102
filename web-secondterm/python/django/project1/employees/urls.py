from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.EmployeePage, name="employees"),

    path('details/<int:id>', views.EmployeeDetailsPage, name="employee-details"),

    path('delete/<int:id>', views.DeleteEmployee, name="delete-employee"),
]
