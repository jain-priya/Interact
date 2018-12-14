(function(){
app.factory("studentFactory", ($http, $q) => {
            var object = {
                callTime(branch,sem) {
                    var url = "http://sid1997.pythonanywhere.com/api/time/table/"+branch+sem+"/";
                   
                    var pr = $q.defer();
                    console.log("Calling Json....");
                    $http.get(url).then(function(data) {
                        console.log(data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
                    });
                    return pr.promise;
                },
                callattendence(id){
                    
                    var url="http://tushar1997.pythonanywhere.com/api/main/student/att/"+id+"/";
                    console.log(id);
                    var pr = $q.defer();
                    console.log("Calling Json....");
                    $http.get(url).then(function(data) {
                        console.log(data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
                    });
                    return pr.promise;
                    
                },
                callmarks(id){
                    var url="http://tushar1997.pythonanywhere.com/api/main/student/int/"+id+"/";
                    console.log(id);
                    var pr = $q.defer();
                    console.log("Calling Json....");
                    $http.get(url).then(function(data) {
                        console.log(data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
 
                    });
                    return pr.promise;
                },
                callData(type){
             
                    
                    var url;
                    if(type=="circular")
                     url="http://tushar1997.pythonanywhere.com/api/extras/circular_notice/?search=circular";
                    else if(type=="events")
                        url="http://tushar1997.pythonanywhere.com/api/extras/events/";
                    else if(type=="assignment")
                        url="http://tushar1997.pythonanywhere.com/api/extras/assignment/";
                    console.log(url);
                    
                    var pr = $q.defer();
                    console.log("Calling Json....");
                    $http.get(url).then(function(data) {
                        console.log(data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
                    });
                    return pr.promise;
                }
            }
            return object;
        }); 

app.controller("studentDashboard",(studentFactory,$scope, $location, $localStorage)=>{
       $scope.datastore = $localStorage; 
        console.log($scope.datastore.array);
    });
    
})();