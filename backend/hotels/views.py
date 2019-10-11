from rest_framework import generics, serializers
from rest_framework.response import Response

from hotels.models import Hotel
from hotels.serializers import HotelSerializer
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
