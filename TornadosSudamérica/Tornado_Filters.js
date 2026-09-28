var monthsStartDayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334] // is 1 lower because day of month will make up for it

var seasonMIN = -Math.pow(2, 32);
var seasonMAX = Math.pow(2, 32);
var seasonUNK = true

var yearMIN = -Math.pow(2, 32);
var yearMAX = Math.pow(2, 32);
var yearUNK = true

var monthMIN = 1;
var monthMAX = 12;
var monthUNK = true

var dayMIN = 1;
var dayMAX = 31;
var dayUNK = true

var hourMIN = -99;
var hourMAX = 23;
var hourUNK = true

var minuteMIN = -99;
var minuteMAX = 59;
var minuteUNK = true

var windspeedMIN = -Math.pow(2, 32);
var windspeedMAX = Math.pow(2, 32);
var windspeedUNK = true

var ratingALLOW = {
    "U":true,
    "0":true,
    "1":true,
    "2":true,
    "3":true,
    "4":true,
    "5":true,
    "6":true,
}

var timezoneALLOW = {
    MVT:true,
    EHR:true,
    ESP:true,
    ENG:true,
    WFA:true,
    JSA:true,
    ERU:true,
    CLA:true,
}

var locerrorMIN = -Math.pow(2, 32);
var locerrorMAX = Math.pow(2, 32);

var widthMIN = -Math.pow(2, 32);
var widthMAX = Math.pow(2, 32);
var widthUNK = true

var lengthMIN = -Math.pow(2, 32);
var lengthMAX = Math.pow(2, 32);
var lengthUNK = true

var durationMIN = -Math.pow(2, 32);
var durationMAX = Math.pow(2, 32);
var durationUNK = true

var deathsMIN = -Math.pow(2, 32);
var deathsMAX = Math.pow(2, 32);
var deathsUNK = true

var injuriesMIN = -Math.pow(2, 32);
var injuriesMAX = Math.pow(2, 32);
var injuriesUNK = true