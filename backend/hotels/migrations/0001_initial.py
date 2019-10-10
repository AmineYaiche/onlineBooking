# Generated by Django 2.2.6 on 2019-10-10 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50, verbose_name='Nom')),
                ('photo', models.ImageField(upload_to='statics/images', verbose_name='Photo')),
                ('description', models.TextField(verbose_name='Description')),
            ],
            options={
                'verbose_name': 'Hotel',
                'verbose_name_plural': 'Hotels',
            },
        ),
        migrations.CreateModel(
            name='TypeChambre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_chambre', models.CharField(max_length=50, verbose_name='Type de chambre')),
                ('prix', models.FloatField(verbose_name='Prix')),
                ('description', models.TextField(verbose_name='Description')),
                ('nombre_chambres', models.IntegerField(verbose_name='Nombre de chambres')),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotels.Hotel')),
            ],
        ),
        migrations.CreateModel(
            name='ChambrePhoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='statics/images')),
                ('type_chambre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotels.TypeChambre')),
            ],
        ),
    ]
