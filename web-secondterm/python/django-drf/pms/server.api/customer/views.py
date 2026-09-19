from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Customer

from .serializers import CustomerSerializer
# Create your views here.

# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def customer(request)

#     if request.method == 'GET':


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
        
@api_view(['POST'])
def add_customer(request):
    
    old_customer = Customer.objects.filter(email=request.data.get("email")).exists()
    if old_customer:
        return Response({
            "status": False,
            "message": "Customer is already exist with this email"
        })
    
    customer_serializer = CustomerSerializer(data=request.data)
    if customer_serializer.is_valid():
        customer_serializer.save()
        return Response({
            "status": True,
            "message": "Customer has been added"
        })
    else:
        return Response({
            "status": False,
            "message": "Failed to add new customer"
        })

@api_view(['GET'])
def edit_customer(request, id):
    if not id:
        return Response({
            "status": False,
            "message": "ID not found"
        })
    
    try:
        customer = Customer.objects.get(id=id)
        serializer = CustomerSerializer(customer)
    except Customer.DoesNotExist:
        return Response({
            "status": False,
            "message": "Customer not found"
        })
    
    return Response({
        "status": True,
        "customer": serializer.data
    })

@api_view(['PUT'])
def update_customer(request):
    try:
        id = request.data.get("id")
        customer = Customer.objects.get(id=id)
        serializer = CustomerSerializer(customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "status": True,
                "message": "Record has been updated"
            })
        else:
            return Response({
                "status": False,
                "message": "Failed to update customer"
            })
    except Customer.DoesNotExist():
        return Response({
            "status": False,
            "message": "Customer not found"
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