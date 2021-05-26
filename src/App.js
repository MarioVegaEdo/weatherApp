import './App.css';
import React,{useEffect, useState} from 'react'


const App = ()=> {
  
  const weatherType = '{weatherInfo.list[0].weather[0].main}'//Quitar paréntesis

  const options = {
    Clouds:'imagePath',
    sunny:'imagePath',
    rain:'imagePath'
  }

  const weatherDefault = 'default'
  const weatherImage = options[weatherType] || weatherDefault

  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    peticion()
  },[])

  const peticion = async () =>{

    const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
    const API_KEY = '&appid=65d2187b25c5d78afbef68c4b83e2c24'
    let search = 'madrid'
    const FINAL_URL = BASE_URL + search + API_KEY

    console.log(FINAL_URL)
    const data = await fetch(FINAL_URL)
    const dataJson = await data.json()
    setWeatherInfo(dataJson)
    //console.log(weatherInfo)
  }

  const Highlights = () =>{
    return(
      <div>
        <div>
            <h1>Next week</h1>
            
            <div>
              REPETIR POR CADA DÍA
              <p>{weatherInfo.list[8].dt_txt+'/'}</p>
              <p>{weatherInfo.list[8].weather[0].main/*PINTAR IMAGEN*/}</p>
              <p>{weatherInfo.list[8].main.temp_max+'/'+weatherInfo.list[0].main.temp_min}</p>
            </div>
        </div>
        <div>
            <h1>Today highlights</h1>
            <div>
              <p>WIND
                {weatherInfo.list[0].wind.speed}
                {weatherInfo.list[0].wind.deg}
                {weatherInfo.list[0].wind.gust}
              </p>
              <p>HUMIDITY
                {weatherInfo.list.map(
                  item => (
                    <li key={item.dt}>
                      {item.main.humidity}
                    </li>
                ))}
              </p>
              <p>
                Visibility
                {weatherInfo.list[0].visibility}
              </p>
              <p>Air pressure
              {weatherInfo.list[0].main.pressure}
              </p>
            </div>
        </div>
      </div>
    )
  }

  const Search = () =>{
    return(
      <div>
        <button>Search for places</button>
        <div>Imagen clima</div>
        <div>
          {weatherInfo.list[0].main.temp/*TEMP -273*/}
        </div>
        <div>{weatherInfo.list[0].weather[0].main/*Time(clouds)*/}</div>
        <div>Día today 17/7/77, esto saca la hora de la prediccion{weatherInfo.list[0].dt_txt+'/'}</div>
        <div>{weatherInfo.city.name}({weatherInfo.city.country})</div>
        <div>
          <form>
            <input type="text" placeholder="Search location"/>
            <input type="submit" />
            <p>Recomendaciones/antes visitados</p>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
        <h1>Data</h1>
        <ul>
          {weatherInfo.city && (
            <div>
              {weatherInfo.cod+'/'}
              {weatherInfo.message+'/'}
              {weatherInfo.cnt+'/'}
              {weatherInfo.city.name+'/'}
              {weatherInfo.list[0].main.temp_max+'/'+weatherInfo.list[0].main.temp_min}
              {/*weatherInfo.list.map(
                item => (

                <li key={item.dt}>
                    {item.main.temp}
                </li>
                ))*/}
            </div>
          )}
            
            {/*weatherInfo.city.name}
            {weatherInfo.list.map(
              item => (
                <li key={item.dt}>
                    {item.dt}
                </li>
              ))*/}
        </ul>
    </div>
  );
}

export default App;
