from django.db import models
from django.contrib.auth.models import User

class Experience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class SupportGroup(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    members = models.ManyToManyField(User)

    def __str__(self):
        return self.name

class Professional(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=200)
    bio = models.TextField()

    def __str__(self):
        return self.user.username
