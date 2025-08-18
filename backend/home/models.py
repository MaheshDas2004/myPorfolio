from django.db import models

# Create your models here.
class HeroSection(models.Model):
    Firstname = models.CharField(max_length=100)
    Lastname = models.CharField(max_length=100)
    hero_img=models.URLField(max_length=500, blank=True, null=True)
    tagLine = models.CharField(max_length=200)
    description = models.TextField()
    def __str__(self):
        return self.Firstname
