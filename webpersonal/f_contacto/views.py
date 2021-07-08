from f_contacto.models import formulario_contacto
from django.shortcuts import redirect, render
from django.http import HttpResponse
from .forms import ContactoFrom
from django.contrib import messages


def contact(request):
    data = {
        'form':ContactoFrom()
    } 
    if request.method == 'POST':
        formulario = ContactoFrom(data=request.POST)       
        if formulario.is_valid():
            formulario.save()   
               
        else:
            data['form']= formulario
    return render(request,"f_contacto/contact.html",data)

def read_contact(request):
    formularios = formulario_contacto.objects.all()
    return render(request,"f_contacto/read_contact.html",{'formularios':formularios})

def update_contact(request,email):
    emailContacto = formulario_contacto.objects.get(email=email)
    form = ContactoFrom(instance=emailContacto)
    context = {'form':form}
    formularios = formulario_contacto.objects.all()
    
    if request.method == 'POST':
        form = ContactoFrom(request.POST, instance=emailContacto)
        print('llega aca 2')
        print(form)
        if form.is_valid():
            form.save()
            print('llega aca 3')
            return render(request,"f_contacto/read_contact.html",{'formularios':formularios})
    context = {'form': form}
    return render(request,"f_contacto/update_contact.html",context) 
     
def delete_contact(request,email):
    emailContacto = formulario_contacto.objects.get(email=email)
    context = {'contacto':emailContacto}
    formularios = formulario_contacto.objects.all()

    if request.method == "POST":
        emailContacto.delete()

        return render(request,"f_contacto/read_contact.html",{'formularios':formularios})

    return render(request,'f_contacto/delete_contact.html',context)