from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer
from customer.models import Customer
from customer.serializers import CustomerSerializer
# Create your views here.

# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def project(request)

#     if request.method == 'GET':

@api_view(["GET"])
def customer_names(request):
    try:
        customers = Customer.objects.all()
        serialized = CustomerSerializer(customers, many=True)
        return Response({
            "status": True,
            "customers": [
                { "id": customer["id"], "text": customer["full_name"] }
                for customer in serialized.data
            ]
        })
    except Customer.DoesNotExist():
        return Response({
            "status": False,
            "message": "Failed to fetch customers"
        })

@api_view(["GET"])
def projects(request):
    try:
        projects = Project.objects.all()
        serialized = ProjectSerializer(projects, many=True)
        return Response({
            "status": True,
            "projects": serialized.data
        })
    except Project.DoesNotExist():
        return Response({
            "status": False,
            "message": "Failed to fetch projects"
        })
        
@api_view(['POST'])
def add_project(request):
    
    project_serializer = ProjectSerializer(data=request.data)
    if project_serializer.is_valid():
        project_serializer.save()
        return Response({
            "status": True,
            "message": "Project has been added"
        })
    else:
        return Response({
            "status": False,
            "message": "Failed to add new project"
        })

@api_view(['GET'])
def edit_project(request, id):
    if not id:
        return Response({
            "status": False,
            "message": "ID not found"
        })
    
    try:
        project = Project.objects.get(id=id)
        serializer = ProjectSerializer(project)
    except Project.DoesNotExist:
        return Response({
            "status": False,
            "message": "Project not found"
        })
    
    return Response({
        "status": True,
        "project": serializer.data
    })

@api_view(['PUT'])
def update_project(request):
    try:
        id = request.data.get("id")
        project = Project.objects.get(id=id)
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "status": True,
                "message": "Record has been updated"
            })
        else:
            return Response({
                "status": False,
                "message": "Failed to update project"
            })
    except Project.DoesNotExist():
        return Response({
            "status": False,
            "message": "Project not found"
        })

@api_view(['DELETE'])
def delete_project(request, id):
    try:
        project = Project.objects.get(id=id)
        
        if project:
            project.delete()
            
            # updated records of projects
            projects = Project.objects.all()
            serialized = ProjectSerializer(projects, many=True)
                    
            return Response({
                "status": True,
                "message": "Project has been deleted",
                "projects": serialized.data
            })
        else:
            return Response({
                "status": False,
                "message": "Project does not exist"
            })
    
    except Project.DoesNotExist():
        return Response({
            "status" : False,
            "message": "Project not found"
        })