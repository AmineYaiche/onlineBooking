from django.contrib import admin

from reservations.models import Reservation


class ReservationAdmin(admin.ModelAdmin):
    list_display = ('email', 'chambre', 'date_debut', 'date_fin')

    def utilisateur(self):
        if self.nom != '' or self.prenom != '':
            return '{} {}'.format(self.prenom, self.nom)
        return self.email


admin.site.register(Reservation, ReservationAdmin)

