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

class SoftSkill(models.Model):
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

class Education(models.Model):
    DEGREE_CHOICES = [
        ('10TH', 'Matriculation'),
        ('12TH', 'Intermediate'),
        ('DIPLOMA', 'Diploma'),
        ('BTECH', 'Bachelor of Technology (B.Tech)'),
        ('OTHER', 'Other'),
    ]
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=50, choices=DEGREE_CHOICES) 
    field_of_study = models.CharField(max_length=200, blank=True, null=True)
    percentage = models.CharField(max_length=10, blank=True, null=True)
    cgpa = models.CharField(max_length=10, blank=True, null=True)
    start_year = models.IntegerField()
    end_year = models.IntegerField(blank=True, null=True)
    ongoing = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.get_degree_display()} from {self.institution}"


class PersonalInfo(models.Model):
    name=models.CharField(max_length=100)
    profile_img=models.URLField(max_length=500, blank=True, null=True)
    title=models.CharField(max_length=200)
    bio=models.TextField()
    technologies = models.ManyToManyField(TechnicalSkill, related_name="personalinfo")
    softskills = models.ManyToManyField(SoftSkill, related_name="personalinfo")
    whatido = models.ManyToManyField(WhatIDo, related_name="personalinfo")
    education = models.ManyToManyField(Education, related_name="personalinfo")

    def __str__(self):
        return self.name
  
