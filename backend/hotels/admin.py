from django.conf import settings
from django.contrib import admin

from hotels.models import Hotel, TypeChambre, ChambrePhoto


class HotelAdmin(admin.ModelAdmin):
    list_display = ('nom', 'get_description')

    def get_description(self, hotel):
        if len(hotel.description) > settings.DESCRIPTION_DISPLAY_CHARS:
            return hotel.description[:settings.DESCRIPTION_DISPLAY_CHARS] + ' ...'
        return hotel.description


class ChambrePhotosInline(admin.TabularInline):
    model = ChambrePhoto


class TypeChambreAdmin(admin.ModelAdmin):
    list_display = ('type_chambre', 'hotel', 'prix', 'nombre_chambres', 'get_description')
    inlines = (ChambrePhotosInline,)

    def get_description(self, type_chambre):
        if len(type_chambre.description) > settings.DESCRIPTION_DISPLAY_CHARS:
            return type_chambre.description[:settings.DESCRIPTION_DISPLAY_CHARS] + ' ...'
        return type_chambre.description


admin.site.register(Hotel, HotelAdmin)
admin.site.register(TypeChambre, TypeChambreAdmin)
