app.controller("timectrl", function (studentFactory, $scope,$localStorage){
    console.log("Inside Time");
    
    timeString=(data)=>{
   
        var dayData = new Array();
         dayData[0]=data.monday.split("|");
         dayData[1]=data.teausday.split("|");
        dayData[2]=data.wednesday.split("|");
        dayData[3]=data.thursday.split("|");
        dayData[4]=data.friday.split("|");        
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; 
        
        for(var i=0;i<5;i++){
            dayData[i].unshift(days[i]);
        }
        
        $scope.show=dayData;
        console.log($scope.show);
    }
    
    $scope.timeTable=(branch,sem)=>{
        
                var timeJson = studentFactory.callTime(branch,sem);
                $scope.timeobj = null;
                timeJson.then(function(data) {
                    $scope.timeobj = data;        
                    timeString($scope.timeobj);
                }, function(err) {
                    $scope.timeobj = err;
                    alert("Wrong Semester/Branch");
                });
         
    }
});