from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['POST'])
def register(request):
    f_name = request.POST['f_name']
    l_name = request.POST['l_name']
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']

    if not f_name or not l_name or not username or not email or not password:
        return Response({
            "status": False,
            "message": "Please fill the remaining fields"
        })

    user = User.objects.filter({username:username})
    if (user):
        return Response({
            "status": False,
            "message": "User already exist, try new one"
        })

    user = User.objects.filter({email:email})
    
    if (user):
        return Response({
            "status": False,
            "message": "User already exist, try new one"
        })

    new_user = User.objects.create_user(
        first_name = f_name,
        last_name = l_name,
        username = username,
        email = email,
        password = password,
    )
    if (new_user):
        return Resonse({
            'status': True,
            'message': "Account has been created"
        })
    else:
        return Resonse({
            'status': False,
            'message': "Failed to create an account!"
        })

