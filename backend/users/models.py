from django.conf import settings
from django.db import models
from django.utils.translation import gettext as _


class Utilisateur(models.Model):
    email = models.EmailField(max_length=settings.EMAIL_MAX_LENGTH, verbose_name=_('Email'), unique=True)
    nom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Nom'), blank=True)
    prenom = models.CharField(max_length=settings.NAME_MAX_LENGTH, verbose_name=_('Prenom'), blank=True)
    adresse = models.CharField(max_length=settings.ADRESSE_MAX_LENGTH, blank=True)
    avatar = models.ImageField(upload_to=settings.IMAGES_UPLOAD_TO, blank=True)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = _('Utilisateur')
        verbose_name_plural = _('Utilisateurs')
