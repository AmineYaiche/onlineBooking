from rest_framework import generics
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from hotels.models import Chambre
from reservations.models import Reservation
from reservations.serializers import ReservationSerializer


class ReservationView(generics.ListCreateAPIView):
    serializer_class = ReservationSerializer

    def get(self, request, *args, **kwargs):
        reservation = self.get_queryset()
        serializer = self.serializer_class(reservation)
        return Response(serializer.data)

    def get_queryset(self):
        reservation_id = self.request.query_params.get('reservation_id')
        if reservation_id is None:
            raise ValidationError({'details': 'reservation_id est requis.'})
        return Reservation.objects.get(id=reservation_id)

    def post(self, request, *args, **kwargs):
        reservation = Reservation()
        reservation.email = request.data.get('email')
        reservation.nom = request.data.get('nom')
        reservation.prenom = request.data.get('prenom')
        reservation.adresse = request.data.get('adresse')
        reservation.date_debut = request.data.get('date_debut')
        reservation.date_fin = request.data.get('date_fin')
        chambre_id = request.data.get('chambre')
        try:
            reservation.chambre = Chambre.objects.get(id=chambre_id)
        except Chambre.DoesNotExist:
            raise ValidationError({'details': "chambre n'existe pas"})

        reservation.save()
        return Response(status=201)