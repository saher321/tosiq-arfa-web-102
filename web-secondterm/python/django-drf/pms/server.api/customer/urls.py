
from django.urls import path
from . import views

# http://localhost:8000/customer/add/
urlpatterns = [
    path('', views.customers, name="customers"),
    path('add/', views.add_customer, name="add-customer"),
    path('delete/<int:id>/', views.delete_customer, name="delete-customer")
]