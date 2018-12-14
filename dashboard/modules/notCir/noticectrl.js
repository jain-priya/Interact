app.controller("noticectrl", function (studentFactory, $scope,$localStorage){
    
    $scope.getData=(type)=>{
        $scope.check = type;
        
         var extraJson = studentFactory.callData(type);
                $scope.extra= null;
                extraJson.then(function(data) {
                    $scope.extra= data;        
                    console.log($scope.extra);
                }, function(err) {
//                    $scope.attendenceobj= err;
                    console.log(err);
                    alert("Something went wrong");
                });
    }
    
    
});