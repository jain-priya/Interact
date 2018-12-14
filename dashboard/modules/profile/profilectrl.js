 app.controller("profilectrl",( $scope, $location, $localStorage)=>{
       $scope.datastore = $localStorage; 
        console.log($scope.datastore.array);
    });