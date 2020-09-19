from django.urls import path
from . import views

urlpatterns = [
    path('api/activities/', views.ActivityListAll.as_view() ),
    path('api/activity/<slug:REF_PARTNER>', views.ActivityListCustomer.as_view() ),
]