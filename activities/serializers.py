from rest_framework import serializers
from .models import Activity
from .csv_sources import activity_fraudulent, category
import random

class ActivitySerializer(serializers.ModelSerializer):

    approved = serializers.SerializerMethodField('is_approved')
    category = serializers.SerializerMethodField('get_category')
    points = serializers.SerializerMethodField('get_points')
    ActivityTime = serializers.DateTimeField(format="%d/%m/%Y %H:%M")

    def is_approved(self, activity):
        return not activity_fraudulent(activity.Id)
    
    def get_category(self, activity):
        return category(activity.BasicActivity)

    def get_points(self, activity):
        cat = category(activity.BasicActivity)
        if cat == 'Fitness':
            return 20
        elif cat == 'Loyalty':
            return 30
        elif cat == 'Nutrition':
            return 50
        return 10

    class Meta:
        model = Activity
        fields = '__all__'