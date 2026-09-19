from rest_framework import serializers
from .models import Project


# Serializers allow complex data such as querysets and 
# model instances to be converted to native Python datatypes that can then be easily understandables
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
