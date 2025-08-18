from django.db import models
from about.models import TechnicalSkill
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    project_image = models.URLField(max_length=500, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    github_link = models.URLField(max_length=200)
    demo_link = models.URLField(max_length=200, blank=True, null=True)
    
    technologies = models.ManyToManyField(TechnicalSkill, related_name="projects")

    def __str__(self):
        return self.title