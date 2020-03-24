export function fetchWeather(city) {
  return function(dispatch) {
    fetch(
      `https://api.weatherstack.com/current?access_key=2f9fb3f033b30a0bcddb462b5d945ee4&query=${city}`
      // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e283b422c8eae3d015030a9854ad801`
    )
      .then(res => {
        return res.json();
      })

      .then(JSONres => {
        dispatch({ type: 'FETCH_WEATHER', payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

// &appid=8e283b422c8eae3d015030a9854ad801
// http://api.weatherstack.com/current?access_key=2f9fb3f033b30a0bcddb462b5d945ee4&query=New%20York
