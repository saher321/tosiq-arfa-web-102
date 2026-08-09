from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
# def testProject(request):
#     data = "Server is running..."
#     return HttpResponse(data)

@api_view[('GET')]
def testProject(request):
    projects = [
        {"id": 101, "name": "School LMS", "customer_name": "Alice"},
        {"id": 102, "name": "ERP", "customer_name": "John"},
        {"id": 103, "name": "E-commerce", "customer_name": "Samith"}
    ]
    return Response(projects)