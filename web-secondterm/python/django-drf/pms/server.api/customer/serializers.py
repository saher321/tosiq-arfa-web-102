from rest_framework import serializers
from .models import Customer


# Serializers allow complex data such as querysets and 
# model instances to be converted to native Python datatypes that can then be easily understandables
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'full_name', 'email', 'phone', 'address']
