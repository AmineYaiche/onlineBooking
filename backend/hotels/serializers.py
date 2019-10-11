from rest_framework import serializers

from hotels.models import Hotel


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ('nom', 'photo', 'description', 'prix')
