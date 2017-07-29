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


var app = angular.module("MyModule", []);         //declearing the module MyModule to the app 



app.controller("MyController", function ($scope)   //app.controller function is used to link the controller with the module in the app, 
                                                   //the controller name is MyController and the defeniotion of the function goes after function($scope)
                
                {
                    var employees =                                                                                         // creating a variable named employee which is a string
                        [
                            { name: "Uppili", Designation:"Software Engineer", Salary:12000, DateOfJoining:"June 14, 2017"},         //contents of the string in a key value pair
                            { name: "Tamil", Designation:"Software Tester", Salary:13000, DateOfJoining:"June 14, 2013"},
                            { name: "Nitai", Designation:"Software Analyst", Salary:14000, DateOfJoining:"June 14, 2019"},
                            { name: "Saravanan", Designation:"Software assigner", Salary:15000, DateOfJoining:"June 14, 2007"},
                            { name: "Kavitha", Designation:"Software Executive", Salary:16000, DateOfJoining:"June 14, 2015"}

                        ];
                            
               
$scope.employees = employees;       //since the variable decleared is private making it public by sending it to the $scope.employee 
                            
                });



app.controller ("MyController1",function($scope) {            //registering another controlle MyController1 to the app
    var countries =                                           // to demontrate the array within a array                          
        [
           { name : "India" ,
           City:                                             //there is an array with the key city in the array name   
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
    $scope.countries = countries;   // making the countries array as public
});



app.controller("MyController2", function ($scope) {
    var employees = {

        name: "Uppili", designation: "Senior Engineer", date: "June 14, 2017", salary: 500000
    };
    $scope.employees = employees;    
});



app.controller("HandlingEvent", function ($scope) {
    var technologies = [
        { name: "C#", like: 0, dislike: 0 },
        { name: "C", like: 0, dislike: 0 },
        { name: "C++", like: 0, dislike: 0 },
        { name: ".Net", like: 0, dislike: 0 }
    ];

    $scope.technologies = technologies;

    $scope.incrementlike = function (technology) {
        technology.like++;
    }

    $scope.incrementdislike = function (technology) {
        technology.dislike++;
    }

});