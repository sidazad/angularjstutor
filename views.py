

from django.http import HttpResponse
from django.template import loader,RequestContext

from django.shortcuts import redirect,render_to_response

def index(request):
    print "index"
    template=loader.get_template("index.html")
    rc=RequestContext(request,{})
    return HttpResponse(template.render(rc))

def loadTemplate(request):
    print "loadTemplate"
    name = request.GET.get("name", None)
    print name, " requested"
    if None:
        return HttpResponse("No document found")
    return render_to_response(name, {})

