let city = document.getElementById("SearchCity")
let SearchBtn = document.getElementById("SearchBtn")
let apiKey = "803894e227e342f7806133312242106"



// Start Header Days
let firstDay = document.getElementById("first-day")
let secondDay = document.getElementById("second-day")
let thirdDay = document.getElementById("third-day")
// End Header Days


let weatherData = document.getElementById("weatherData")
let weatherIcon = document.getElementById("weatherIcon")
let weatherDesc = document.getElementById("weatherDesc")
let temp = document.getElementById("temp")
let windSpeed = document.getElementById("windSpeed")
let dayNum = document.getElementById("day-num")
let dayMonth = document.getElementById("day-month")
let firstwindMph = document.getElementById("first-wind-mph")
let firstHeatIndex = document.getElementById("first-heat-index")


// Forecast Second Day
let secondDayIcon = document.getElementById("second-day-icon")
let secondDayMaxTemp = document.getElementById("second-day-max-temp")
let secondDayMinTemp = document.getElementById("second-day-min-temp")
let secondDayDesc = document.getElementById("second-day-desc")
// End Forecast Second Day


// Forecast Third Day
let thirdDayIcon = document.getElementById("third-day-icon")
let thirdDayMaxTemp = document.getElementById("third-day-max-temp")
let thirdDayMinTemp = document.getElementById("third-day-min-temp")
let thirdDayDesc = document.getElementById("third-day-desc")
// End Forecast Third Day


city.addEventListener("keyup", getdata)





async function getdata() {
    let search = city.value
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=803894e227e342f7806133312242106&q=${search}&days=7`
    let data = await fetch(apiUrl)
    let result = await data.json()

    if (!result.error) {
        let DateTime = new Date(result.forecast.forecastday[0].date)
        console.log(result);
        console.log(result);
        console.log(DateTime.getMonth());
        dayNum.innerText = DateTime.getDate()
        weatherData.innerText = result.location.name
        temp.innerText = result.current.temp_c
        weatherIcon.setAttribute("src", result.current.condition.icon)
        weatherDesc.innerText = result.current.condition.text

        firstwindMph.innerText = result.current.wind_mph
        firstHeatIndex.innerText = result.current.heatindex_c

        // Forecast Second Day
        secondDayIcon.setAttribute("src", result.forecast.forecastday[1].day.condition.icon)
        secondDayMaxTemp.innerText = result.forecast.forecastday[1].day.maxtemp_c
        secondDayMinTemp.innerText = result.forecast.forecastday[1].day.mintemp_c
        secondDayDesc.innerText = result.forecast.forecastday[1].day.condition.text
        // End Forecast Second Day


        // Forecast Third Day
        thirdDayIcon.setAttribute("src", result.forecast.forecastday[2].day.condition.icon)
        thirdDayMaxTemp.innerText = result.forecast.forecastday[2].day.maxtemp_c
        thirdDayMinTemp.innerText = result.forecast.forecastday[2].day.mintemp_c
        thirdDayDesc.innerText = result.forecast.forecastday[2].day.condition.text
        // End Forecast Third Day

        //Start Check Get Day
        let DayValue = DateTime.getDay()
        if (DayValue + 1 == 1) {
            firstDay.innerText = "Sunday"
            secondDay.innerText = "Monday"
            thirdDay.innerText = "Tuesday"

        } else if (DayValue + 1 == 2) {
            firstDay.innerText = "Monday"
            secondDay.innerText = "Tuesday"
            thirdDay.innerText = "Wednesday"

        } else if (DayValue + 1 == 3) {
            firstDay.innerText = "Tuesday"
            secondDay.innerText = "Wednesday"
            thirdDay.innerText = "Saturday"

        } else if (DayValue + 1 == 4) {
            firstDay.innerText = "Wednesday"
            secondDay.innerText = "Tuesday"
            thirdDay.innerText = "Friday"

        } else if (DayValue + 1 == 5) {
            firstDay.innerText = "Tuesday"
            secondDay.innerText = "Friday"
            thirdDay.innerText = "saturday"

        } else if (DayValue + 1 == 6) {
            firstDay.innerText = "saturday"
            secondDay.innerText = "Sunday"
            thirdDay.innerText = "Monday"

        } else if (DayValue + 1 == 7) {
            firstDay.innerText = "Friday"
            secondDay.innerText = "saturday"
            thirdDay.innerText = "Sunday"

        }
        //End Check Get Day

        //Start Check Get Month
        let MonthValue = DateTime.getMonth()
        if (MonthValue + 1 == 1) {

            dayMonth.innerText = "January"

        } else if (MonthValue + 1 == 2) {
            dayMonth.innerText = "February"

        } else if (MonthValue + 1 == 3) {
            dayMonth.innerText = "March"

        } else if (MonthValue + 1 == 4) {
            dayMonth.innerText = "April"


        } else if (MonthValue + 1 == 5) {
            dayMonth.innerText = "May"


        } else if (MonthValue + 1 == 6) {
            dayMonth.innerText = "June"


        } else if (MonthValue + 1 == 7) {
            dayMonth.innerText = "July"


        } else if (MonthValue + 1 == 8) {
            dayMonth.innerText = "August"


        } else if (MonthValue + 1 == 9) {
            dayMonth.innerText = "September"


        } else if (MonthValue + 1 == 10) {
            dayMonth.innerText = "October"


        } else if (MonthValue + 1 == 11) {
            dayMonth.innerText = "November"


        } else if (MonthValue + 1 == 12) {
            dayMonth.innerText = "December"


        }
        //End Check Get Month

    } else {
        console.log("bad");
    }
}
