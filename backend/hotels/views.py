from rest_framework import generics, serializers
from rest_framework.response import Response

from hotels.models import Hotel, Chambre
from hotels.serializers import HotelSerializer, ChambreSerializer
from utils import convert_start_end_date


class HotelsList(generics.ListAPIView):
    serializer_class = HotelSerializer

    def get(self, request, *args, **kwargs):
        hotels = self.get_queryset()
        serializer = self.serializer_class(hotels, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        try:
            start_date, end_date = convert_start_end_date(start_date, end_date)
        except (ValueError, TypeError) as exc:
            raise serializers.ValidationError({"details": exc})

        return Hotel.objects.exclude(chambres__isnull=True)


class ChambresList(generics.ListAPIView):
    serializer_class = ChambreSerializer

    def get(self, request, *args, **kwargs):
        chambres = self.get_queryset()
        serializer = self.serializer_class(chambres, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        hotel_id =self.request.query_params.get('hotel_id')
        if hotel_id is None:
            raise serializers.ValidationError({"details": "hotel_id est requis."})
        try:
            start_date, end_date = convert_start_end_date(start_date, end_date)
        except (ValueError, TypeError) as exc:
            raise serializers.ValidationError({"details": exc})

        return Chambre.objects.filter(hotel=hotel_id)
