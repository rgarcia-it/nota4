from django.db import models

class formulario_contacto(models.Model):
    CHILE = 'CHILE'
    PERU = 'PERU'
    ARGENTINA = 'ARGENTINA'
    BRASIL = 'BRASIL'
    PARAGUAY = 'PARAGUAY'

    PESO = 'PESO'
    DOLAR = 'DOLAR'
    PAGO_CHOICES = [
            (PESO, 'PESO'),
            (DOLAR, 'DOLAR')
            
        ]
    PAIS_CHOICES = [
        (CHILE, 'CHILE'),
        (PERU, 'PERU'),
        (ARGENTINA, 'ARGENTINA'),
        (BRASIL, 'BRASIL'),
        (PARAGUAY, 'PARAGUAY')
    ]
    name = models.CharField(max_length=50, verbose_name='Nombre')
    email = models.EmailField(verbose_name='Correo')
    phone =  models.IntegerField(verbose_name='Telefono')
    direccion = models.TextField(verbose_name='direccion',null=True)
    paiss = models.CharField(
        max_length=30,
        choices=PAIS_CHOICES,
        default=CHILE,
    )
    pago = models.CharField(
        max_length=30,
        choices=PAGO_CHOICES,
        default=PESO,
    )
    foto = models.ImageField(verbose_name='fotito',null=True)
    num_ver = models.IntegerField(verbose_name='numero identificador',null=True)
    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
        

    def __str__(self) -> str:
        return self.name


