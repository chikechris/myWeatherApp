import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { fetchWeather } from './actions/fetchWeather';

import './App.css';

function App() {
  // set city
  const [city, setCity] = useState('');

  const weatherSelector = useSelector(state => state);
  const dispatch = useDispatch();
  const getWeatherAction = city => dispatch(fetchWeather(city));

  useEffect(() => {
    getWeatherAction('paris')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getWeatherdata = e => {
    e.preventDefault();
    if (city === '') {
      console.log('Please type a city name');
    } else {
      getWeatherAction(city);
      console.log(weatherSelector.weatherinfo);
    }
  };

  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  }

  let details = '';
  if (weatherSelector.weatherinfo) {
    details = (
      <div>
        <h2>Weather Information</h2>
        <p>City and Country:{' '}
          {weatherSelector.weatherinfo.location.name},{' '}{' '}
          <span>{weatherSelector.weatherinfo.location.country}</span>{' '}
        </p>
        <p>Observation Time: {weatherSelector.weatherinfo.current.observation_time} </p>
        <p>Temp: {toFahrenheit(weatherSelector.weatherinfo.current.temperature)} °F</p>
           <img src={weatherSelector.weatherinfo.current.weather_icons}/>
           <p>{weatherSelector.weatherinfo.current.weather_descriptions}</p>
      </div>
    );
  } 
  else {
    details = <p>Please Type in a cityname</p>;
  }

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>Weather App</h1>
        </header>
      </div>

      <main >
        <form onSubmit={getWeatherdata}>
          <div>
            <input
            className='input'
              type='text'
              name='name'
              placeholder='type in city name'
              onChange={e => setCity(e.target.value)}
            />
          </div>
          {/* <input type="submit" value="Check the weather"/>  */}
          <button className='btn'>Submit</button>
        </form>
        <div className='Card'>
           {details}
        </div>
        
      </main>
    </>
  );
}

export default App;



