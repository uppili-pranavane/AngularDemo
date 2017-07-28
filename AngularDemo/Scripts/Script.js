/// <reference path="angular.js" />


//var app = angular
//                .module("MyModule", [])
//                .controller("MyController", function($scope)
                
//                {
//                    var employees =
//                        [
//                            { name: "Uppili", Designation:"Software Engineer", Salary:12000, DateOfJoining:"June 14, 2017"},
//                            { name: "Tamil", Designation:"Software Tester", Salary:13000, DateOfJoining:"June 14, 2013"},
//                            { name: "Nitai", Designation:"Software Analyst", Salary:14000, DateOfJoining:"June 14, 2019"},
//                            { name: "Saravanan", Designation:"Software assigner", Salary:15000, DateOfJoining:"June 14, 2007"},
//                            { name: "Kavitha", Designation:"Software Executive", Salary:16000, DateOfJoining:"June 14, 2015"}

//                        ];
                            
               
//$scope.employees = employees;
                            
//                });


var app = angular.module("MyModule", []);



app.controller ("MyController",function($scope)
                
                {
                    var employees =
                        [
                            { name: "Uppili", Designation:"Software Engineer", Salary:12000, DateOfJoining:"June 14, 2017"},
                            { name: "Tamil", Designation:"Software Tester", Salary:13000, DateOfJoining:"June 14, 2013"},
                            { name: "Nitai", Designation:"Software Analyst", Salary:14000, DateOfJoining:"June 14, 2019"},
                            { name: "Saravanan", Designation:"Software assigner", Salary:15000, DateOfJoining:"June 14, 2007"},
                            { name: "Kavitha", Designation:"Software Executive", Salary:16000, DateOfJoining:"June 14, 2015"}

                        ];
                            
               
$scope.employees = employees;
                            
                });

app.controller ("MyController1",function($scope) {
    var countries =
        [
           { name : "India" ,
           City:
            [
               {name: "delhi"},
                {name: "Mumbai"},
                {name: "Banglore"},
                {name: "chennai"}

           ]
           },
           {
               name: "US",   
               City: [
                   { name: "Chiacago" },
                   { name: "Washington" },
                   {name: "States"}
               ]

           }
        ]
    $scope.countries = countries;
});