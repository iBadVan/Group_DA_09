from rest_framework import viewsets
from .models import Album
from .serializer import AlbumSerializer   # O .serializers si cambiaste el nombre


class AlbunesView(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
