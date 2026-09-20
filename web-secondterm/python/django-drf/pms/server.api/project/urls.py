
from django.urls import path
from . import views

# http://localhost:8000/customer/add/
urlpatterns = [
    path('', views.projects, name="projects"),
    path('add/', views.add_project, name="add-project"),
    path('edit/<int:id>/', views.edit_project, name="edit-project"),
    path('update/', views.update_project, name="update-project"),
    path('delete/<int:id>/', views.delete_project, name="delete-project"),
    path('customers/', views.customer_names, name="delete-project"),
]