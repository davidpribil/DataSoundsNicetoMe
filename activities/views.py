from .models import Activity
from .serializers import ActivitySerializer
from rest_framework import generics


class ActivityListAll(generics.ListAPIView):
    queryset = (
        Activity.objects.using("activities")
        .all()
        .order_by("REF_PARTNER", "ActivityTime")
    )
    serializer_class = ActivitySerializer


class ActivityListCustomer(generics.ListAPIView):
    serializer_class = ActivitySerializer

    def get_queryset(self):
        return (
            Activity.objects.using("activities")
            .filter(REF_PARTNER=self.kwargs["REF_PARTNER"])
            .order_by("ActivityTime")
        )
