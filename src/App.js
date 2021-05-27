import './App.css';
import React,{useEffect, useState} from 'react'
import {getWeather} from './ApiCalls/getWeather.js'
import SearchData from './Components/SearchData.js'
import Highlights from './Components/Highlights.js'
import WeekPrediction from './Components/WeekPrediction.js'

const App = ()=> {
  
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getWeather().then((weatherInfo) =>
     { setWeatherInfo(weatherInfo);
      setLoading(false);
    }
     
    );
  },[])

  
  return (
    <div>
        {loading ? 'Charing...' :''}
        {weatherInfo.city &&(
          <div>
            <SearchData 
              temp={weatherInfo.list[0].main.temp}
              weatherMain={weatherInfo.list[8].weather[0].main}
              dt={weatherInfo.list[0].dt_txt}
              city={weatherInfo.city.name}
              country={weatherInfo.city.country}
            />  
            <div>
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
   {/*        <SearchData imgHandler={imageHandler} list={weatherInfo.list[0]} city={weatherInfo.city}/>
         
<div>    <div>{weatherInfo.city.name}</div>
          <WeekPrediction imgHandler={imageHandler} day1={weatherInfo.list[16]} day2={weatherInfo.list[16]} day3={weatherInfo.list[24]} day4={weatherInfo.list[32]} />
        
<Highlights list={weatherInfo.list[0]}/>

</div>*/}