from django.urls import path, include
from .import views
urlpatterns = [
    path('hero/', views.HeroView.as_view()),
    path('link/', views.LinkView.as_view()),
    path('project/', views.ProjectView.as_view()),
    path('aboutme/',views.AboutMeView.as_view()),
]
