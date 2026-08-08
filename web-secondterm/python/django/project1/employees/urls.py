from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [

    path('', views.EmployeePage, name="employees"),
    path('details/<int:id>', views.EmployeeDetailsPage, name="employee-details"),
    path('add/', views.AddEmployeePage, name="add-employee"),
    path('edit/<int:id>', views.EditEmployeePage, name="edit-employee"),
    path('delete/<int:id>', views.DeleteEmployee, name="delete-employee"),
]
