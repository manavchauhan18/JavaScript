const Current_Date = new Date();
var date = document.getElementById("CD");
var Day = Current_Date.getDay();
var Month = Current_Date.getMonth();

var SearchBox = document.querySelector('.search-box');

SearchBox.addEventListener('keypress', setQuery);
var Weather_Data;

var Curr_City = document.querySelector('.city');
var Curr_temp = document.querySelector('.temp');
var Curr_Weather = document.querySelector('.Weather');
var Curr_HiLow = document.querySelector('.hi-low');

function setQuery(evt) {
    if (evt.keyCode == 13) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ SearchBox.value +'&appid=9a92f3566a4e748bd4c865b29bfaa47b')
            .then(response => response.json())
            .then(data => {
                var City_Value = data['name'];
                var Temp_Value = data['main']['temp'];
                var Weather_Value = data['weather']['0']['main'];
                var Hi_Value = data['main']['temp_max'];
                var Low_Value = data['main']['temp_min'];
                Temp_Value = Math.floor(Temp_Value - 273.15);
                Hi_Value = Math.floor(Hi_Value - 273.15);
                Low_Value = Math.floor(Low_Value - 273.15);

                Curr_City.innerHTML = City_Value;
                Curr_temp.innerHTML = Temp_Value + "°C";
                Curr_Weather.innerHTML = Weather_Value;
                Curr_HiLow.innerHTML = Hi_Value + "°C" + ' / ' + Low_Value + "°C";
                console.log(data);
                console.log(Hi_Value);
                
                
            })
        .catch(err => alert("Wrong City Name!!!"))
    }
}


Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Str_Day = Days[Day];
var Str_Month = Months[Month];


date.innerHTML = Str_Day + " " + Str_Month + " " + Current_Date.getDate() + ", " + Current_Date.getFullYear();