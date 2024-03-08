from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Article(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    thumb = models.ImageField(default="default.png", blank=True)
    author = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
    
    def preview(self):
        '''Return first 50 characters of article text as a preview.'''
        return self.body[:50] + "..."
    
    def save(self, *args, **kwargs):
        if not self.slug: 
            self.slug = slugify(self.title) 
        super().save(*args, **kwargs)