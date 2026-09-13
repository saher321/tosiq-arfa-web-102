from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Customer

from .serializers import CustomerSerializer
# Create your views here.

@api_view(["GET"])
def customers(request):
    try:
        customers = Customer.objects.all()
        serialized = CustomerSerializer(customers, many=True)
        return Response({
            "status": True,
            "customers": serialized.data
        })
    except Customer.DoesNotExist():
        return Response({
            "status": False,
            "message": "Failed to fetch customers"
        })