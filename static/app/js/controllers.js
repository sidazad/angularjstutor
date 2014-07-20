app.controller("LandingCtrl", ["$scope", "$location", "$state", "$window", function ($scope, $location, $state, $window) {
    console.log("LandingCtrl called");
    console.log($location.path());

    $scope.model = {
        emailsub: ""
    };

    $scope.model.tabs = [
        { title: "About the Course", route:"landing.coursedes", active:false },
        { title: "Course Contents", route:"landing.toc", active:false },
        { title: "About Me", route:"landing.aboutme", active:false }
    ];


    $scope.$watch("model.emailsub", function(val) {
        console.log("emailsub changed:"+val);
    })

    $scope.email_sub = function() {
        console.log("email_sub:"+$scope.model.emailsub);
    };

    $scope.buyvimeo = function () {
        console.log("buy_clicked");
        $window.open('https://vimeo.com/ondemand/angularjstutor/');

    };

    $scope.buyvhx = function () {
        console.log("buy_vhx_clicked");
        $window.open('https://angularjs.vhx.tv/');

    };


    $scope.rent_clicked = function () {
        console.log("rent_clicked");
        $state.go("landing.coursedes.rentvimeo")
    };

    $scope.toc_clicked = function () {
        console.log("toc_clicked");
        $state.go("landing.toc")
    };


    $scope.$on("$stateChangeSuccess", function() {
        console.log("LandingCtrl.$stateChangeSuccess")
        $scope.model.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
        console.log($scope.model);
        console.log("ended");
    });

     $scope.go = function(route){
         console.log("go:"+route);
         if($state.includes(route)) {
             console.log("Route already included");
         }
         else {
        $state.go(route);
         }

    };

    $scope.active = function(route){
        console.log("active:"+route);
        console.log(route);
        console.log(typeof(route));
        console.log($state.current.name);
        return $state.includes(route);

    };




}]);

