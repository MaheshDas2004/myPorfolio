from django.db import models


class ContactInfo(models.Model):
    heading = models.CharField(max_length=100, default="Get in Touch")
    description = models.TextField(blank=True, null=True)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.email
