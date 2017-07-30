/// <reference path="Script.js" />

// a filter is a function which returns another function

app.filter("genderfilter", function () {
    return function (gender)
    {
        switch(gender)
        {
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "Not Disclosed";
        }
}
})

