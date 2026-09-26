from rest_framework import serializers
from .models import Project
from customer.serializers import CustomerSerializer
from customer.models import Customer
# Serializers allow complex data such as querysets and 
# model instances to be converted to native Python datatypes that can then be easily understandables
class ProjectListSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)
    class Meta:
        model = Project
        fields = ['id', 'title', 'customer', 'start_date', 'dead_line', 'status', 'notes']


class ProjectSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        queryset= Customer.objects.all(),
        write_only=True
    )
    class Meta:
        model = Project
        fields = ['id', 'title', 'customer', 'start_date', 'dead_line', 'status', 'notes']
