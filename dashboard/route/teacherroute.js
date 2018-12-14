app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: "teacherModules/profile/profile.html"
    }).when("/profile", {
        templateUrl: "teacherModules/profile/profile.html"
    }).when("/attendence", {
        templateUrl: "teacherModules/attendence/attendence.html",
        controller:"attendencectrl"
    }).when("/internal", {
        templateUrl: "teacherModules/internal/internal.html",
        controller:"internalctrl"
    }).when("/event", {
        templateUrl: "teacherModules/event/event.html",
        controller:"eventctrl"
    }).when("/notCir", {
        templateUrl: "modules/notCir/notice.html"
    }).otherwise({
        redirectTo: "/"
    });
});
