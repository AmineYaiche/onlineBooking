from django.conf import settings
from django.contrib import admin

from hotels.models import Hotel, Chambre, ChambrePhoto


class HotelAdmin(admin.ModelAdmin):
    list_display = ('nom', 'get_description')

    def get_description(self, hotel):
        if len(hotel.description) > settings.DESCRIPTION_DISPLAY_CHARS:
            return hotel.description[:settings.DESCRIPTION_DISPLAY_CHARS] + ' ...'
        return hotel.description


class ChambrePhotosInline(admin.TabularInline):
    model = ChambrePhoto


class ChambreAdmin(admin.ModelAdmin):
    list_display = ('nom', 'hotel', 'prix', 'nombre_chambres', 'get_description')
    inlines = (ChambrePhotosInline,)

    def get_description(self, chambre):
        if len(chambre.description) > settings.DESCRIPTION_DISPLAY_CHARS:
            return chambre.description[:settings.DESCRIPTION_DISPLAY_CHARS] + ' ...'
        return chambre.description


admin.site.register(Hotel, HotelAdmin)
admin.site.register(Chambre, ChambreAdmin)
