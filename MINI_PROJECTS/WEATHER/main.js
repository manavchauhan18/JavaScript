const Current_Date = new Date();
var date = document.getElementById("CD");
var Day = Current_Date.getDay();
var Month = Current_Date.getMonth();

Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Str_Day = Days[Day];
var Str_Month = Months[Month];


date.innerHTML = Str_Day + " " + Str_Month + " " + Current_Date.getDate() + ", " + Current_Date.getFullYear();