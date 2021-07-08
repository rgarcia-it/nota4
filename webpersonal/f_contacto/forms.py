
from django import forms
from f_contacto.models import formulario_contacto


class ContactoFrom(forms.ModelForm):

    class Meta:
        model = formulario_contacto
        fields = ('name','email','phone','paiss','direccion','pago','foto','num_ver')

