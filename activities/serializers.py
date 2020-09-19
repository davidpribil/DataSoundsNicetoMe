from rest_framework import serializers
from .models import Activity
from .csv_sources import activity_fraudulent

class ActivitySerializer(serializers.ModelSerializer):

    approved = serializers.SerializerMethodField('is_approved')
    category = serializers.SerializerMethodField('get_category')
    points = serializers.SerializerMethodField('get_points')

    def is_approved(self, activity):
      return not activity_fraudulent(activity)
    
    def get_category(self, activity):
      return "Fitness"

    def get_points(self, activity):
      return 30

    class Meta:
        model = Activity
        fields = '__all__'