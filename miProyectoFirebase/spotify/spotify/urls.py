from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apitracks/', include('temas.urls')),  # o el prefijo que diga tu guía
]
