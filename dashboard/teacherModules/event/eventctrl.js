app.controller("eventctrl", function (teacherFactory, $scope,$localStorage){

    console.log("Inside event");
    
    $scope.createEvent=()=>{
        console.log("Data..",$scope.event);
        
        var creatEventJson = teacherFactory.eventCreate($scope.event);
        creatEventJson.then(function (data) {
                alert("Event Created.."+ data);
                console.log(data);
            }, function (err) {
                alert("Event Creation Failed");
            });
    }
    
//    $scope.getData=(type)=>{
//        $scope.check = type;
//        
//         var extraJson = studentFactory.callData(type);
//                $scope.extra= null;
//                extraJson.then(function(data) {
//                    $scope.extra= data;        
//                    console.log($scope.extra);
//                }, function(err) {
////                    $scope.attendenceobj= err;
//                    console.log(err);
//                    alert("Something went wrong");
//                });
//    }
//    
    
});