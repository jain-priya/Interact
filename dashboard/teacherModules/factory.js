(function(){
app.factory("teacherFactory", ($http, $q) => {
            var object = {   
                initial(id){
                    var url = "http://tushar1997.pythonanywhere.com/api/main/subjects/?search="+id;
//                    var url = "http://tushar1997.pythonanywhere.com/api/main/subjects/?search=5";
                    console.log(url);
                    var pr = $q.defer();
                    $http.get(url).then(function(data) {
                      
                        console.log("Inside factory..."+ data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
                    });
                    return pr.promise;
                },
                calllist(sem,branch){
                     var url = "http://tushar1997.pythonanywhere.com/api/main/student/list/?stream="+branch+"&semester="+sem;
                    console.log(url);
                    var pr = $q.defer();
                    $http.get(url).then(function(data) {
                      
                        console.log("Inside factory..."+ data.data);
                        pr.resolve(data.data);
                    }, function(er) {
                        console.log("Error", +er);
                        pr.reject(er);
                    });
                    return pr.promise;
                },
                updateatt(no,val,key){
                    console.log(key);
                    var sub = key+"_att";
                    console.log(sub);
                     var req = {
                    method: 'PUT',
                    url: "http://tushar1997.pythonanywhere.com/api/main/update/att/"+key+"/"+no+"/",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {[sub]:val}
                };

        var pr = $q.defer();
                $http(req).then(function (data,config) {
                    console.log("Data ran ...",data.data);
                    pr.resolve(data.data);
                }, function (er,config) {
                    console.log("Error", +er);
                    pr.reject(er);
                });
                return pr.promise;
                },
                setmarks(no,val,key){
                    console.log(key);
                    var sub = key+"_int";
                    console.log(sub);
                     var req = {
                    method: 'PUT',
                    url: "http://tushar1997.pythonanywhere.com/api/main/update/int/"+key+"/"+no+"/",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {[sub]:val}
                };

        var pr = $q.defer();
                $http(req).then(function (data,config) {
                    console.log("Data ran ...",data.data);
                    pr.resolve(data.data);
                }, function (er,config) {
                    console.log("Error", +er);
                    pr.reject(er);
                });
                return pr.promise;
                },
                eventCreate(event){
                     console.log("Event is....", event);
               
                var req = {
                    method: 'POST',
                    url: 'http://tushar1997.pythonanywhere.com/api/extras/create_event/',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: event
                };
                var pr = $q.defer();
                $http(req).then(function (data,config) {
                    console.log("Data ran ...",data.data);
                    pr.resolve(data.data);
                }, function (er,config) {
                    console.log("Error", +er);
                    pr.reject(er);
                });
                return pr.promise;
                }
            }
            return object;
        }); 

app.controller("teacherDashboard",(teacherFactory,$scope, $location, $localStorage)=>{
       $scope.datastore = $localStorage; 
        console.log($scope.datastore.teacherProf);
    
    $scope.init=()=>{
         var teacherJson = teacherFactory.initial($scope.datastore.teacherProf.id);
                $scope.teacherobj = null;
        $scope.subject=[];
        $scope.key=[];
                teacherJson.then(function(data) {
                    $scope.teacherobj = data;
                    
                    for(i=0;i<data.length;i++){
                       $scope.subject[i]=data[i].subject;
                        $scope.key[i]=data[i].key;
                        
                        console.log(data[i].subject);
                    }
                    console.log("Inside controller...."+$scope.teacherobj);
                    
                }, function(err) {
                    $scope.teacherobj = err;
                });
    
    }
    
    $scope.init();
    
    });
    
})();