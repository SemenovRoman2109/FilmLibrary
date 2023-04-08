from django.db import models

# Create your models here.
class Film(models.Model):
    name = models.CharField(max_length=255)
    year = models.IntegerField()
    image = models.ImageField()