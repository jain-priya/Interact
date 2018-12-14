app.controller("internalctrl", function (studentFactory, $scope,$localStorage){
    console.log("Inside Marks");
    $scope.getmarks=()=>{
                console.log("sdd");
                var timeJson = studentFactory.callmarks($scope.datastore.array.enroll_no);
                $scope.int = null;
                timeJson.then(function(data) {
                    $scope.int= data;        
                    console.log($scope.int.Subject1);
                }, function(err) {
//                    $scope.attendenceobj= err;
                    console.log(err);
                    alert("Something went wrong");
                });

    }
    
    
});