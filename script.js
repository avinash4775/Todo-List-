var app=angular.module("todo",[])
app.controller("mycontroller",function($scope){
    $scope.items=[];
    $scope.additem=function(){
        if(!$scope.add)
        {$scope.errortext="Blank Entry Not Allowed !";return;}
        if($scope.items.indexOf($scope.add) == -1){
            $scope.items.push($scope.add);
            $scope.errortext="";
            $scope.add="";
        }
        else{
            $scope.errortext="This task is already in your Todo !";
        }
    }
    $scope.removeitem=function(x){
        $scope.items.splice(x,1);
         $scope.errortext = "";
    }
});