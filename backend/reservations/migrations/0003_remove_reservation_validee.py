# Generated by Django 2.2.6 on 2019-10-11 16:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0002_auto_20191011_1459'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reservation',
            name='validee',
        ),
    ]
