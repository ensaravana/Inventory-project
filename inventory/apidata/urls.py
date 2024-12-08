from django.urls import path
from .views import materialCreateview,supplierCreateview,purchaseCreateview,customerCreateview,customerDetailView,purchaseDetailView,supplierDetailView,materialDetailView

urlpatterns = [
    path('material/',materialCreateview.as_view(),name="material name"),
    path('suppiler/',supplierCreateview.as_view(),name="material name"),
    path('purchase/',purchaseCreateview.as_view(),name="material name"),
    path('customer/',customerCreateview.as_view(),name="material name"),
 
    path('materialdetail/<int:pk>',materialDetailView.as_view(),name="material name"),
    path('suppilerdetail/<int:pk>',supplierDetailView.as_view(),name="material name"),
    path('purchasedetail/<int:pk>',purchaseDetailView.as_view(),name="material name"),
    path('customerdetail/<int:pk>',customerDetailView.as_view(),name="material name")



]