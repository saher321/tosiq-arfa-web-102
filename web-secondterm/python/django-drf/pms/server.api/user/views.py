from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['POST'])
def register(request):
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not first_name or not last_name or not username or not email or not password:
        return Response({
            "status": False,
            "message": "Please fill the remaining fields"
        })

    if User.objects.filter(username=username).exists():
        return Response({
            "status": False,
            "message": "Username already exist, try new one"
        })
    
    if User.objects.filter(email=email).exists():
        return Response({
            "status": False,
            "message": "Email already exist, try new one"
        })

    new_user = User.objects.create_user(
        first_name = first_name,
        last_name = last_name,
        username = username,
        email = email,
        password = password,
    )
    if new_user:
        return Response({
            'status': True,
            'message': "Account has been created"
        })
    else:
        return Response({
            'status': False,
            'message': "Failed to create an account!"
        })

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not email or not password:
        return Response({
            "status": False,
            "message": "Please fill the remaining fields"
        })
    
    if not User.objects.filter(email=email).exists():
        return Response({
            "status": False,
            "message": "User not found"
        })
    
    user = authenticate(email=email, password=password) 
    
    if user is None:
        return Response({
            "status": False,
            "message": "Credentials didn't matched"
        })    
        
    
    return Response({
        "status": True,
        "message": "User loggedin sucessfully",
        "user": user
    })    
    