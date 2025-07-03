from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils import translation
from .models import Product
from .serializers import ProductSerializer

class ProductView(APIView):
    def get(self, request):
        lang = request.GET.get('lang') or request.headers.get('Accept-Language', 'en')
        translation.activate(lang)
        product = Product.objects.first()
        return Response(ProductSerializer(product).data)