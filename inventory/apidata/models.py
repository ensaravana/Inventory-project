from django.db import models


# Create your models here.

class Material(models.Model):

  name = models.CharField(max_length=100)
  quantity = models.IntegerField()
  quality = models.IntegerField()
  price = models.IntegerField()
  expdata = models.DateField()

  def __str__(self) :
    return self.name
 


class Supplierdetail(models.Model):
  name= models.CharField(max_length=50)
  contact = models.CharField(max_length=50)
  product = models.ForeignKey('Material', on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.name}{self.product}"
  


   
class Customerdetail(models.Model):
  name= models.CharField(max_length=50)
  contact = models.CharField(max_length=50)
  product = models.ForeignKey('Material', on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.name}{self.product}"


class Purchaserecord(models.Model):
  purchasername= models.ForeignKey('Customerdetail', on_delete=models.CASCADE)
  suppliername = models.ForeignKey('Supplierdetail', on_delete=models.CASCADE)
  productname = models.ForeignKey('Material', on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.purchasername}{self.suppliername}"