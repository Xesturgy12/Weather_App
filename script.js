let loginForm = document.getElementById("main-form");


const temperature = document.getElementById('temperature');
const wind_speed = document.getElementById('wind_speed');
const condition = document.getElementById('condition');
const city_name = document.getElementById('city_name');


loginForm.addEventListener("submit",(e) => {
    e.preventDefault();

    let city = document.getElementById('city_input');

    fetchWeather(city?.value);

  });



  async function fetchWeather(city){

    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3045dd712ffe6e702e3245525ac7fa38`);
        let jsonData = await response.json();
        
        // console.log(jsonData);
        
        changeHTML(
            {
                city_name: city,
                condition: jsonData?.weather[0]?.description,
                temperature: jsonData?.main?.temp,
                wind_speed: jsonData?.wind?.speed
            }
            )
            
        }
    catch(err){
        
            if(city == ''){
                alert('Please enter a value in the input box');
            }

            else{
                alert('You entered Wrong City Name!')
            }

        }

    }




function changeHTML(data){

    city_name.innerHTML = `City : ${data.city_name}`;
    wind_speed.innerHTML = `Wind Speed : ${data.wind_speed} km/hr`;
    temperature.innerHTML = `Temperature : ${data.temperature} C`;
    condition.innerHTML = `Condition : ${data.condition}`;
    
  }