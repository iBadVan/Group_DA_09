from rest_framework import serializers
from .models import Album


class AlbumSerializer(serializers.ModelSerializer):
    # Usa el __str__() de Track gracias a related_name='tracks'
    tracks = serializers.StringRelatedField(many=True)

    class Meta:
        model = Album
        fields = ['album_name', 'artist', 'tracks']
