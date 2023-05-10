from django.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.IntegerField()
    field3 = models.DateTimeField(auto_now_add=True)

class MyModel(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.IntegerField()

    def calculate_value(self):
        return self.field1 + str(self.field2)

from django.contrib import admin
from .models import MyModel

admin.site.register(MyModel)
