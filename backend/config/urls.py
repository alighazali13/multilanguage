from django.contrib import admin
from django.urls import path
from products.views import ProductView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/product/', ProductView.as_view())
]