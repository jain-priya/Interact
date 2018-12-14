app.controller("internalctrl", function (teacherFactory, $scope,$localStorage){
    
    console.log("Inside Teacher Marks");
    
    $scope.getlist=(sub)=>{
                $scope.updatsub=sub.key;
                var listJson = teacherFactory.calllist(sub.semester,sub.stream);
                $scope.studentlist = null;
                listJson.then(function(data) {
                    $scope.studentlist= data;        
                    console.log($scope.studentlist);
                }, function(err) {
//                    $scope.attendenceobj= err;
                    console.log(err);
                    alert("Something went wrong");
                });
    }
    
    $scope.updatemarks=(no,val)=>{
        console.log(no+" "+val+" "+$scope.updatsub);
        var key= $scope.updatsub;
        var attenJson =  teacherFactory.setmarks(no,val,key);
        attenJson.then(function(data) {     
                    console.log("List Updated");
                }, function(err) {
//                    $scope.attendenceobj= err;
                    console.log(err);
                    alert("Something went wrong");
                });
    }
    
});