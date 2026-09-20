from django.db import models
from customer.models import Customer
# Create your models here.
class Project(models.Model):
    class Role(models.TextChoices):
        INPR = "in_progress", "In Progress"
        PNDG = "pending", "Pending"
        CMLT = "completed", "Completed"
        CNLD = "cancelled", "Cancelled"
        DLVD = "delivered", "Delivered"
    title = models.CharField(max_length=150)
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name="project",
    )
    start_date = models.DateTimeField()
    dead_line = models.DateTimeField()
    
    status = models.CharField(
        max_length=15,
        choices=Role.choices,
        default=Role.INPR,
    )
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title