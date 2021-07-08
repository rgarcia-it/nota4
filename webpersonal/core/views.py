from django.shortcuts import render,HttpResponse

# Create your views here.

def home(request):
    
    return render(request,"core/HTML/index.html")


    
def worksingle(request):
    return render(request,"core/HTML/work-single.html")
