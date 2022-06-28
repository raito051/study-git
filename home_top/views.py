from imp import new_module
import math
from pickle import NONE
from django.shortcuts import render
from requests import request
from .list import Event_List, Sports_List
from .models import Event_Model,Event_Motion_Model
from django.views.generic import View, TemplateView, ListView, DetailView

class ModelDetailList(ListView):
    model = Event_Motion_Model
    template_name = 'templates/home/home.html'
        
    def get_context_data(self, *args, **kwargs):
        motion_model = Event_Motion_Model.objects.all()
        if motion_model is NONE:
            #データをデータベースに挿入
            #各種類の名前,写真
            event_list_motion = Event_List.Event_List_Motion
            Event_Motion_Model.objects.all().delete()
            for event in event_list_motion:
                event_name = event[0]
                event_img = event[1]
                events =  Event_Motion_Model(name = event_name, images = event_img)
                events.save()

            event_list_culture = Event_List.Event_List_Culture
            Event_Model.objects.all().delete()
            for event in event_list_culture:
                event_name = event[0]
                event_img = event[1]
                events =  Event_Model(name = event_name, images = event_img)
                events.save()
            
        context = super().get_context_data(*args, **kwargs)
        context['culture_list'] = Event_Model.objects.all
        return context

def Motion_ModelDetailView(request,pk):
    model_id = pk
    if model_id == 1:
        sports_list = Sports_List.Ball_Sports
    elif model_id == 2:
        sports_list = Sports_List.Indoor_Sports 
    elif model_id == 3:
        sports_list = Sports_List.Outdoor_Sports
    elif model_id == 4:
        sports_list = Sports_List.Winter_Sports
    else:
        sports_list = Sports_List.Other_Sports
        
    context = {'sports_list':sports_list}
    return render(request, 'templates/home/detail.html', context)


class Culture_ModelDetailView(DetailView):
    model = Event_Model
    template_name = 'templates/home/detail.html'



