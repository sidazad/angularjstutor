var app = angular.module('angularjstutor', ['ui.router', 'ui.bootstrap', 'LocalStorageModule']).config(
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('landing', {
                url: "/",
                templateUrl: "loadTemplate?name=landing.html",
                controller: "LandingCtrl"
            })
            .state('landing.coursedes', {
                url: "coursedes",
                templateUrl: "loadTemplate?name=coursedes.html",


            })
            .state('landing.coursedes.buyvimeo', {
                url: "/buyvimeo",
                templateUrl: "loadTemplate?name=buyvimeo.html"
            })
            .state('landing.coursedes.rentvimeo', {
                url: "/rentvimeo",
                templateUrl: "loadTemplate?name=rentvimeo.html"
            })
            .state('landing.toc', {
                url: "toc",
                templateUrl: "loadTemplate?name=toc.html"

            })
            .state('landing.aboutme', {
                url: "aboutme",
                templateUrl: "loadTemplate?name=aboutme.html"

            });

        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');

    });



app.run(function($rootScope){

    $rootScope
        .$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log("stateChangeStart:");
                console.log(event);
                console.log(toState);
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log("stateChangeSuccess:");
                console.log(event);
                console.log(toState);
        });

    $rootScope
        .$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams){
                console.log("State Change: Error!");
        });

    $rootScope
        .$on('$stateNotFound',
            function(event, toState, toParams, fromState, fromParams){
                console.log("State Change: State not found!");
        });

    $rootScope
        .$on('$viewContentLoading',
            function(event, viewConfig){
                console.log("View Load: the view is loaded, and DOM rendered!");
        });

    $rootScope
        .$on('$viewcontentLoaded',
            function(event, viewConfig){
                console.log("View Load: the view is loaded, and DOM rendered!");
        });

})