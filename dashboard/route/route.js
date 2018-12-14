app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: "modules/profile/profile.html"
    }).when("/profile", {
        templateUrl: "modules/profile/profile.html"
    }).when("/timeTable", {
        templateUrl: "modules/timeTable/timeTable.html",
        controller:"timectrl"
    }).when("/attendence", {
        templateUrl: "modules/attendence/attendence.html",
        controller:"attendencectrl"
    }).when("/internal", {
        templateUrl: "modules/internal/internal.html",
        controller:"internalctrl"
    }).when("/calender", {
        templateUrl: "modules/calender/calender.html"
    }).when("/notCir", {
        templateUrl: "modules/notCir/notice.html",
        controller:"noticectrl"
    }).otherwise({
        redirectTo: "/"
    });
});
