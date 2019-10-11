from rest_framework import serializers

from hotels.models import Hotel, Chambre


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ('nom', 'photo', 'description', 'prix')


class ChambreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chambre
        fields = ('nom', 'prix', 'description', 'hotel')
        depth = 1