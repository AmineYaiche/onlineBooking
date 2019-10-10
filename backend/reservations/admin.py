from django.contrib import admin

from reservations.models import Reservation


class ReservationAdmin(admin.ModelAdmin):
    list_display = ('utilisateur', 'type_chambre', 'date_debut', 'date_fin', 'validee')


admin.site.register(Reservation, ReservationAdmin)

