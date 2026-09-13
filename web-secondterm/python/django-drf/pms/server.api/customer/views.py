from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Customer
# Create your views here.

@api_view(["GET"])
def customers(request):
    try:
        all_customers = Customer.objects.all()
        return Response({
            "status": True,
            "customers": all_customers
        })
    except Customer.DoesNotExist():
        return Response({
            "status": False,
            "message": "Failed to fetch customers"
        })