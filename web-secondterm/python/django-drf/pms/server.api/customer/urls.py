
from django.urls import path
from . import views

# http://localhost:8000/test/server
urlpatterns = [
    path('', views.customers, name="customers"),
    path('delete/<int:id>/', views.delete_customer, name="delete-customer")
]