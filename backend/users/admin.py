from django.contrib import admin

from users.models import Utilisateur


class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('email', 'prenom', 'nom', 'adresse')


admin.site.register(Utilisateur, UtilisateurAdmin)
