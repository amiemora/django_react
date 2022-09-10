from django.db import models

# Create your models here.

class Character(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    age = models.IntegerField()
    relation = models.CharField(max_length=50)
    image = models.CharField(max_length=2000)