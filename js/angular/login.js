(function () {
    app.factory("myfactory", ($http, $q) => {
        var object = {
            callServer(enroll) {
                var url = "http://sid1997.pythonanywhere.com/api/students/" + enroll + "/";
                //var url="user.json";
                var pr = $q.defer();
                console.log("Calling Json....");
                $http.get(url).then(function (data) {
                    console.log(data.data);
                    pr.resolve(data.data);
                }, function (er) {
                    console.log("Error", +er);
                    pr.reject(er);
                });
                return pr.promise;
            },
            
            callTeacher(obj) {
                
                console.log("Calling Teacher....", obj);
               
                var req = {
                    method: 'POST',
                    url: 'http://tushar1997.pythonanywhere.com/api/main/login/',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: obj
                };


//                var url1 = 'http://tushar1997.pythonanywhere.com/api/extras/circular_notice/?search=circular';
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


    app.controller("myctrl", (myfactory, $scope, $location, $localStorage) => {
        $scope.login = (enroll) => {

            console.log("login called...." + enroll);
            var userJson = myfactory.callServer(enroll);
            console.log("I got the promise....");
            console.log("user is...", userJson);
            userJson.then(function (data) {
                array = data;
                console.log(array.name);
                console.log("pass...");
                location.href = "dashboard/index.html";
                $scope.store = $localStorage;

                $scope.store.array = array;
                //                            alert($scope.store.array.name);
            }, function (err) {
                array = err;
                alert("Enrollment No. is not Present");
            });
        }

        $scope.teachLogin = () => {
            console.log("Teacher login called....", $scope.teacher);
//            $scope.teacher.email="";
            var teacherJson = myfactory.callTeacher($scope.teacher);
            teacherJson.then(function (data) {
                $localStorage.teacherProf=data;
                location.href = "dashboard/teacher.html";
                console.log(data);
            }, function (err) {
                alert("Wrong username/password/email");
            });
        }
    });
})();
