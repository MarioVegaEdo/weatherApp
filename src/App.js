import './App.css';
import React,{useEffect, useState} from 'react'
import {getWeather} from './ApiCalls/getWeather.js'
import Highlights from './Components/Highlights.js'
import WeekPrediction from './Components/WeekPrediction.js'

const App = ()=> {
  
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState('Madrid')
  const [newSearch, setNewSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getWeather(searchLocation).then((weatherInfo) =>
     { 
      setWeatherInfo(weatherInfo);
      setLoading(false);
      setNewSearch(false)
      setSearchLocation("")
    }
     
    );
  },[newSearch]);

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(searchLocation)
    setNewSearch(true)
    setShowForm(false)   
  }

  const handleChange = (event) =>{
    event.preventDefault()
    setSearchLocation(event.target.value)
    console.log(searchLocation)
  }

  const handleClick = () => {
    setShowForm(true)
  }

  return (
    <div>
        {loading ? 'Charing...' :''}
        {weatherInfo.city &&(
          <div className="row p-5 text-center justify-content-start bg-secondary text-secondary text-white">
            <div className="col-4">
            {showForm
             ?
              <form className="  form-search" onSubmit={handleSubmit}>
                <input className="input-medium search-query" onChange={handleChange} type="text" value={searchLocation} />
                <button className="btn btn-primary">Search</button>
              </form>
             :
             <div >
                <button className="btn btn-primary" onClick={handleClick}>Search for places</button>
                <div >
                  <p>{weatherInfo.list[0].main.temp}</p>
                  <img src="/images/index.jpg" alt={weatherInfo.list[8].weather[0].main} />
                  <p>{weatherInfo.list[0].dt_txt}</p>
                  <p>{weatherInfo.city.name}({weatherInfo.city.country})</p>
                </div>
              </div>
            }
             </div>
            <div className="col-8 p-1 container bg-dark">
              <WeekPrediction 
                day1= {
                  [weatherInfo.list[8].dt_txt,
                  weatherInfo.list[8].weather[0].main,
                  weatherInfo.list[8].main.temp_max,
                  weatherInfo.list[8].main.temp_min
                ]}
                
                day2= {
                  [weatherInfo.list[16].dt_txt,
                  weatherInfo.list[16].weather[0].main,
                  weatherInfo.list[16].main.temp_max,
                  weatherInfo.list[16].main.temp_min
                ]}

                day3= {
                  [weatherInfo.list[24].dt_txt,
                  weatherInfo.list[24].weather[0].main,
                  weatherInfo.list[24].main.temp_max,
                  weatherInfo.list[24].main.temp_min
                ]}

                day4= {
                  [weatherInfo.list[32].dt_txt,
                  weatherInfo.list[32].weather[0].main,
                  weatherInfo.list[32].main.temp_max,
                  weatherInfo.list[32].main.temp_min
                ]}
                />
              <Highlights list={weatherInfo.list[0]}/>
            </div>
          </div>
        )
        }
        
    </div>
  );
}

export default App;
