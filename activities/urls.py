from django.urls import path
from . import views

urlpatterns = [
    path('api/activity/<slug:REF_PARTNER>', views.ActivityListCustomer.as_view() ),
    path('api/user/<slug:REF_PARTNER>/recommendation', views.user_recommendation ),
]