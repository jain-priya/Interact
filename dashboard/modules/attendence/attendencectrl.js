app.controller("attendencectrl", function (studentFactory, $scope,$localStorage){
    
    $scope.getattendence=()=>{
                console.log("sdd");
                var timeJson = studentFactory.callattendence($scope.datastore.array.enroll_no);
                $scope.att = null;
                timeJson.then(function(data) {
                    $scope.att= data;        
                    console.log($scope.att.Subject1);
                }, function(err) {
//                    $scope.attendenceobj= err;
                    console.log(err);
                    alert("Something went wrong");
                });

    }
    
    
});