from django.db import models

# Create your models here.
class Certificates(models.Model):
    title = models.CharField(max_length=200)
    issuing_organization = models.CharField(max_length=200, blank=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    certificate_url = models.URLField(max_length=500, blank=True, null=True)
    is_mooc=models.BooleanField(default=False)
    is_training=models.BooleanField(default=False)
    is_featured=models.BooleanField(default=False)
    def __str__(self):
        return f"{self.title} from {self.issuing_organization}"
