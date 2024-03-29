# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article
from .serializers import ArticleSerializer

@api_view(['GET'])
def article_list(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(["GET"])
def article_detail(request, slug):
    article = Article.objects.get(slug=slug)
    serializer = ArticleSerializer(article, context={'request': request})
    return Response(serializer.data)
