from django.shortcuts import render
from rest_framework import generics
from rest_framework.exceptions import ValidationError as DRFValidationError
from django.core.exceptions import ValidationError as DjangoValidationError
from .serializers import MaterialSerializer,SupplierSerializer,PurchaseSerializer,CustomerSerializer
from .models import Material,Supplierdetail,Purchaserecord,Customerdetail
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication


class materialCreateview(generics.ListCreateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
    

class supplierCreateview(generics.ListCreateAPIView):
    queryset = Supplierdetail.objects.all()
    serializer_class = SupplierSerializer

class purchaseCreateview(generics.ListCreateAPIView):
    queryset = Purchaserecord.objects.all()
    serializer_class = PurchaseSerializer

class customerCreateview(generics.ListCreateAPIView):
    queryset = Customerdetail.objects.all()        
    serializer_class = CustomerSerializer



class materialDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [AllowAny]
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

class supplierDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Supplierdetail.objects.all()
    serializer_class = SupplierSerializer

class purchaseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchaserecord.objects.all()
    serializer_class = PurchaseSerializer

class customerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customerdetail.objects.all()        
    serializer_class = CustomerSerializer    