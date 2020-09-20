from .models import Activity
from .serializers import ActivitySerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .csv_sources import user_recommendation as user_recommendation_from_csv


class ActivityListCustomer(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get_queryset(self):
        return (
            Activity.objects.using("activities")
            .filter(REF_PARTNER=self.kwargs["REF_PARTNER"])
            .order_by("ActivityTime")
        )

@api_view()
def user_recommendation(request, **kwargs):
    return Response([user_recommendation_from_csv(kwargs["REF_PARTNER"])])
