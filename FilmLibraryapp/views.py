from django.shortcuts import render
from .models import Film
from django.core.mail import send_mail

# Create your views here.
def show_film(request):
    context = {
        "list_films":Film.objects.all()
    }
    
    if request.method == 'POST':
        name = request.POST.get('name')
        content = request.POST.get('content')
        text = f'Клієнт {name} залишив свій відгук: {content}'
        send_mail(subject='Вiдгук', message=text, from_email='settings.EMAIL_HOST_USER', recipient_list=['romansemenov2109@gmail.com'], fail_silently=False)
    return render(request, 'index.html',context)