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
    # Aap yahan icon ya category bhi add kar sakte hain

    def __str__(self):
        return self.skill