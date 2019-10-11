from django.conf import settings
from django.db import models
from django.db.models import Min
from django.utils.translation import gettext as _


class Hotel(models.Model):
    nom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Nom'))
    photo = models.ImageField(upload_to=settings.IMAGES_UPLOAD_TO, verbose_name=_('Photo'))
    description = models.TextField(verbose_name=_('Description'))

    def __str__(self):
        return self.nom

    class Meta:
        verbose_name = _('Hotel')
        verbose_name_plural = _('Hotels')

    @property
    def prix(self):
        return self.chambres.aggregate(Min('prix')).get('prix__min')


class Chambre(models.Model):
    nom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Nom de la chambre'))
    prix = models.FloatField(verbose_name=_('Prix'))
    description = models.TextField(_('Description'), blank=True)
    nombre_chambres = models.IntegerField(verbose_name=_('Nombre de chambres ayons ce type'))
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='chambres')

    def __str__(self):
        return self.nom


class ChambrePhoto(models.Model):
    image = models.ImageField(upload_to=settings.IMAGES_UPLOAD_TO)
    chambre = models.ForeignKey(Chambre, on_delete=models.CASCADE)


