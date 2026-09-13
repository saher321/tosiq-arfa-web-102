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
        
@api_view(['DELETE'])
def delete_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
        
        if customer:
            customer.delete()
            
            # updated records of customers
            customers = Customer.objects.all()
            serialized = CustomerSerializer(customers, many=True)
                    
            return Response({
                "status": True,
                "message": "Customer has been deleted",
                "customers": serialized.data
            })
        else:
            return Response({
                "status": False,
                "message": "Customer does not exist"
            })
    
    except Customer.DoesNotExist():
        return Response({
            "status" : False,
            "message": "Customer not found"
        })