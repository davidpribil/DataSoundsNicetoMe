from django.db import models

class Activity(models.Model):
    class Meta:
        managed = False
        db_table = 'Activity'

    Id = models.TextField(primary_key=True)
    BasicActivity = models.CharField(max_length=60)
    ActivityTime = models.DateTimeField()
    Gender = models.CharField(max_length=60)
    Age = models.IntegerField()
    ImageClass = models.CharField(max_length=200, null=True)
    RecognizedActivity = models.CharField(max_length=200, null=True)
    LabelsJson = models.TextField(null=True)
    ScreenshotFindingsJson = models.TextField(null=True)
    ScreenshotFindingsDetailsJson = models.TextField(null=True)
    ActivityDetails = models.TextField(null=True)
    REF_PARTNER = models.CharField(max_length=40) 
