from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext as _

from hotels.models import TypeChambre
from users.models import Utilisateur


class Reservation(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    type_chambre = models.ForeignKey(TypeChambre, on_delete=models.CASCADE)
    date_debut = models.DateField(verbose_name=_('Date debut reservation'))
    date_fin = models.DateField(verbose_name=_('Date fin reservation'))
    validee = models.BooleanField(default=False)

    def __str__(self):
        return '{} - {}'.format(self.utilisateur, self.type_chambre)

    def clean(self):
        if self.date_debut >= self.date_fin:
            raise ValidationError(_('Date debut doit etre avant date fin.'))
