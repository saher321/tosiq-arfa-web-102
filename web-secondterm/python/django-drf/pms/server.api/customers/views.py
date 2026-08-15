from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def test_server(request):
    return Response({
        'status': True,
        'message': 'Testing api'
    })