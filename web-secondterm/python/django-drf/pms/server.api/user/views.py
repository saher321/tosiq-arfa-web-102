from django.shortcuts import render
from django.contrib.auth.models import User
from django.core.mail import send_mail
from .models import UserPasswordOtp
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import random
from django.utils import timezone
from datetime import timedelta
from django.conf import settings
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
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({
            "status": False,
            "message": "User not found"
        })
    
    auth_user = authenticate(
        username=user.username, 
        password=password
    ) 
    
    if auth_user is None:
        return Response({
            "status": False,
            "message": "Credentials didn't matched"
        })  

    token = RefreshToken.for_user(auth_user)  
        
    
    return Response({
        "status": True,
        "message": "User loggedin sucessfully",
        "user": {
            "username": auth_user.username,
            "email": auth_user.email,
            "first_name": auth_user.first_name,
            "last_name": auth_user.last_name
        },
        "token": str(token.access_token)
    })    

@api_view(['POST'])
def forgot_password(request):
    userEmail = request.data.get("email")
    if not userEmail:
        return Response({
            "status": False,
            "message": "Email is not provided yet",
        })
    
    try:
        user = User.objects.get(email=userEmail)
    except User.DoesNotExist:
        return Response({
            "status": False,
            "message": "User not found"
        })
        
    # Delete old otps
    UserPasswordOtp.objects.filter(user=user).delete()
    # 6 digits otp
    otp = random.randint(100000, 999999)
    
    otp_expires_at = timezone.now() + timedelta(minutes=10)
    
    saved_otp = UserPasswordOtp.objects.create(
        user = user,
        otp = otp,
        expires_at = otp_expires_at,
    )
    # if saved_otp.is_expired():
    #     return Response({
    #         'status': True,
    #         'message': "otp has been expired"
    #     })
    send_mail(
        subject="PMS Resetting password [OTP]",
        message=(
            f"Hi {user.username},\n\n"
            f"Your password reset OTP is: {otp}\n\n"
            "Please do not share this OTP with anyone.\n"
            "This OTP will expire after 10 minutes.\n\n"
            "If you did not request a password reset, please ignore this email."
        ),
        from_email= settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False,
    )

    if saved_otp:
        return Response({
            'status': True,
            'message': "Otp has been sent to your email"
        })
    else:
        return Response({
            'status': False,
            'message': "Failed to create an account!"
        })
    
    
    
@api_view(['POST'])
def reset_password(request):
    pass