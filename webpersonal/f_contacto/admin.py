from django.contrib import admin
from .models import formulario_contacto


class ContactoAdmin(admin.ModelAdmin):
    search_fields = ("name", )


admin.site.register(formulario_contacto,ContactoAdmin)

