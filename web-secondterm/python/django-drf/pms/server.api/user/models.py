from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class UserPasswordOtp(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    otp = models.IntegerField(max_length=6)
    expires_at = models.DateTimeField()

    def is_expired(self):
        return timezone.now() >= self.expires_at

    def __str__(self):
        return self.user.email
    
class UserRole(models.Model):
    class Role(models.TextChoices):
        PM = "pm", "Project Manager"
        EMP = "emp", "Employee"

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="role",
    )
    role = models.CharField(
        max_length=3,
        choices=Role.choices,
        default=Role.EMP,
    )