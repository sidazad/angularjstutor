from django.conf.urls import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
urlpatterns = patterns('',
    (r'^loadTemplate', 'angularjstutor.views.loadTemplate'),
    (r'$', 'angularjstutor.views.index'),
)

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns += staticfiles_urlpatterns()

print urlpatterns