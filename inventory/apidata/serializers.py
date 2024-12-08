from rest_framework import serializers
from .models import Material,Supplierdetail,Customerdetail,Purchaserecord

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material  # Link the serializer to the Material model
        fields = '__all__'  # Include all fields from the Material model

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplierdetail
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customerdetail
        fields = '__all__'

class PurchaseSerializer (serializers.ModelSerializer):
    class Meta:
        model = Purchaserecord
        fields = '__all__'              



