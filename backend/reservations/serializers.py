from rest_framework import serializers

from reservations.models import Reservation


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ('email', 'nom', 'prenom', 'adresse', 'chambre', 'date_debut', 'date_fin')









