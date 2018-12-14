
var app = angular.module("myApp", ['ngStorage','ngRoute','ui.bootstrap']).config(function($sceDelegateProvider,$httpProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   'self',
   'http://sid1997.pythonanywhere.com/**',
 'http://tushar1997.pythonanywhere.com/*'
 ]);
     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
 });
        
