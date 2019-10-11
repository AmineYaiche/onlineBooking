import uuid

from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext as _

from hotels.models import Chambre


class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=settings.EMAIL_MAX_LENGTH, verbose_name=_('Email'), unique=True)
    nom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Nom'), blank=True)
    prenom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Prenom'), blank=True)
    adresse = models.CharField(max_length=settings.ADRESSE_MAX_LENGTH, blank=True)
    avatar = models.ImageField(upload_to=settings.IMAGES_UPLOAD_TO, blank=True)

    chambre = models.ForeignKey(Chambre, on_delete=models.CASCADE)
    date_debut = models.DateField(verbose_name=_('Date debut reservation'))
    date_fin = models.DateField(verbose_name=_('Date fin reservation'))

    def __str__(self):
        return '{} - {}'.format(self.email, self.chambre)

    def clean(self):
        if self.date_debut >= self.date_fin:
            raise ValidationError(_('Date debut doit etre avant date fin.'))
