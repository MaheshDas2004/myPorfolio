from django.db import models

# Create your models here.

class SocialLinks(models.Model):
    github = models.URLField(max_length=300, blank=True, null=True)
    linkedin = models.URLField(max_length=300, blank=True, null=True)
    instagram = models.URLField(max_length=300, blank=True, null=True)

    def __str__(self):
        # Agar GitHub available hai, wahi dikhe, nahi to LinkedIn, phir Instagram
        return self.github

class TechnicalSkill(models.Model):
    skill = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.skill

class WhatIDo(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon_name = models.CharField(
        max_length=50, 
        help_text="Lucide React icon name (e.g., 'Code', 'Database', 'Server')"
    )

    def __str__(self):
        return self.title
    
class PersonalInfo(models.Model):
    name=models.CharField(max_length=100)
    profile_img=models.URLField(max_length=500, blank=True, null=True)
    title=models.CharField(max_length=200)
    bio=models.TextField()
    technologies = models.ManyToManyField(TechnicalSkill, related_name="personalinfo")
    whatido = models.ManyToManyField(WhatIDo, related_name="personalinfo")

    def __str__(self):
        return self.name