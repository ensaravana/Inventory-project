# Generated by Django 5.1.1 on 2024-11-27 22:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apidata', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customerdetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('contact', models.CharField(max_length=50)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apidata.material')),
            ],
        ),
        migrations.CreateModel(
            name='Supplierdetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('contact', models.CharField(max_length=50)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apidata.material')),
            ],
        ),
        migrations.CreateModel(
            name='Purchaserecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apidata.material')),
                ('purchasername', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apidata.customerdetail')),
                ('suppliername', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apidata.supplierdetail')),
            ],
        ),
    ]