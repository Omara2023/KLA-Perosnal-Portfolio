# serializers.py
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    thumb_url = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'body', 'date', 'thumb', 'thumb_url', 'author']

    def get_thumb_url(self, article):
        request = self.context.get('request')
        thumb_url = article.thumb.url if article.thumb else None
        if thumb_url and request:
            return request.build_absolute_uri(thumb_url)
        return thumb_url
