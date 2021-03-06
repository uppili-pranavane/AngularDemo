﻿/// <reference path="angular.js" />


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



app.controller("Table", function ($scope)   //app.controller function is used to link the controller with the module in the app, 
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

app.controller ("NestedArrays",function($scope) {            //registering another controlle MyController1 to the app
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

app.controller("TwoWayDataBinding", function ($scope) {
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

    $scope.resetlikeAndDislike = function (technology) {
        technology.like = 0;
        technology.dislike = 0;
    }

});

app.controller("AngularFilters", function ($scope) {
    var employee = [
        { name: "Uppili", gender: 1, Salary: 500000.789, dateofbirth: new Date("August 19, 1996") },
        { name: "tamil", gender: 1, Salary: 600000, dateofbirth: new Date("April 19, 1996") },
        { name: "Niatai", gender: 1, Salary: 300000, dateofbirth: new Date("June 19, 1996") },
        { name: "Saravanan", gender: 1, Salary: 200000, dateofbirth: new Date("May 19, 1996") },
        { name: "kavitha", gender: 2, Salary: 90000, dateofbirth: new Date("March 19, 1996") },
        { name: "Balaji", gender: 1, Salary: 400000, dateofbirth: new Date("December 19, 1996") },
        { name: "JP", gender: 1, Salary: 50000, dateofbirth: new Date("January 19, 1996") },
        { name: "Sparsh", gender: 1, Salary: 550000, dateofbirth: new Date("February 19, 1996") }

        ];
    $scope.employee = employee;
    $scope.rowLimit = 3;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;    //this variable tells asc r desc if flase reverse is false so asc

    $scope.sortData = function(column) {          // this fucntion gets a attribute the column to be sorted
                                                   // to set data to the resverseSort fuction
        $scope.reverseSort = ($scoper.$sortColumn == column) ? !$scope.reverseSort : false;  //if the same column is selected the value in the reverse sort is noted
                                                                                    // true to false and false to true
                                                                                    //if not then the column is selected for the first time so the reverseSort value is aassinged to false i.e asc
        $scope.sortColumn = column;  //then assings the selected column to the sortColumn attribute
    }



    $scope.getSortClass = function(column) { //this fuction id fr the arrow mark specifying the order of sort based on the value of reverseSort
        if($scope.sortColumn == column)     //checks if the selected column and the sortColumn matched 
        {
            return ($scope.reverseSort) ? 'arrow-down' : 'arrow-up';   //if reverseSort is true arrow-down for desc if flase arroup up fr asc
            // the arrow-up and arrow-down are the css properties in the style.css file
            // in the style.css we define with a . here sont use the prefixing dot
        }

        return ''; //checks if the selected column and the sortColumn not matched returns a empty string
    }



});

app.controller("ngInclude", function ($scope) {
    var employee = [
        { name: "Uppili", gender: 1, Salary: 500000.789, dateofbirth: new Date("August 19, 1996") },
        { name: "tamil", gender: 1, Salary: 600000, dateofbirth: new Date("April 19, 1996") },
        { name: "Niatai", gender: 1, Salary: 300000, dateofbirth: new Date("June 19, 1996") },
        { name: "Saravanan", gender: 1, Salary: 200000, dateofbirth: new Date("May 19, 1996") },
        { name: "kavitha", gender: 2, Salary: 90000, dateofbirth: new Date("March 19, 1996") },
        { name: "Balaji", gender: 1, Salary: 400000, dateofbirth: new Date("December 19, 1996") },
        { name: "JP", gender: 1, Salary: 50000, dateofbirth: new Date("January 19, 1996") },
        { name: "Sparsh", gender: 1, Salary: 550000, dateofbirth: new Date("February 19, 1996") }

    ];

    $scope.emp = employee;
    $scope.selectView= 'employeeTable.html'
});


