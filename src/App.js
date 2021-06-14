import './App.css';
import React,{useEffect, useState} from 'react'
import {getWeather} from './ApiCalls/getWeather.js'
import Highlights from './Components/Highlights.js'
import WeekPrediction from './Components/WeekPrediction.js'
import Footer from './Components/Footer.js'


const App = ()=> {
  
  const [weatherInfo, setWeatherInfo] = useState({});
  const [searchLocation, setSearchLocation] = useState('Madrid')
  const [newSearch, setNewSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [locationHistory, setLocationHistory] = useState([]);
  const [tempUnity, setTempUnity] = useState('ºF');
  
  useEffect(() => {
    getWeather(searchLocation).then((weatherInfo) =>
     { 
      setNewSearch(false)
      setWeatherInfo(weatherInfo);
      setSearchLocation("")
      setTempUnity('ºF')
    }
    )
  },[newSearch]);

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(document.getElementById('inputSearch').value == '' || document.getElementById('inputSearch').value ==' '){
      if(event.target.id == "formSearch"){
        alert('Plase insert a location')
      }else{
        setSearchLocation(event.target.id)
        setNewSearch(true)
        setShowForm(false)
      } 
    }else{
      setNewSearch(true)
      setShowForm(false) 
      let exist = false 
      if(typeof locationHistory !== 'undefined' && locationHistory.length > 0){
          for(let i = 0;i < locationHistory.length ;i++){
            if(locationHistory[i] === searchLocation){
              exist=true
            }
          }
      }
      if(exist===false){
        setLocationHistory([...locationHistory, searchLocation])
      }
      
    }
  }

  const handleChange = (event) =>{
    event.preventDefault()
    setSearchLocation(event.target.value)
  }

  const handleClick = () => {
    setShowForm(true)
  }

  const roundHandler = (tempValue) => {
   let roundedTemp =  Math.round(tempValue)
   return roundedTemp
  }

  const tempUnityHandler = ()=> {
    let degreeValue = 0
    let newDegree = 0
    let arrayTempFields = document.getElementsByClassName('tempField');
    
    for(let n = 0;n<arrayTempFields.length;n++){
      degreeValue = arrayTempFields[n].innerText
      if(tempUnity === 'ºF'){
        newDegree = degreeValue - (273)
        arrayTempFields[n].innerText = newDegree
      }else{
        newDegree = degreeValue - (-273)
        arrayTempFields[n].innerText = newDegree
      }
    }
    tempUnity === 'ºF' 
    ?setTempUnity('ºC')
    :setTempUnity('ºF')
  }

  const imgSelector =(weather) =>{
    let weatherValue = weather
    const options = {
        Clear:'data:image/png;base64,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',
        Clouds: 'data:image/png;base64,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',
        Rain:'data:image/png;base64,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'
    }
    const defaultValue = ''
    const weatherImage = options[weatherValue] || defaultValue
    return weatherImage
  }

  return (
    <div>
        
        {weatherInfo.city &&(
          <div className="row p-5 text-center justify-content-start bg-secondary text-secondary text-white">
            <div className="col p-1 m-2 bg-dark rounded">
            
            {showForm
             ?
             <div>
              <form id="formSearch" className="form-search p-2 " onSubmit={handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                <input id="inputSearch" className="col input-medium search-query" onChange={handleChange} type="text" value={searchLocation} />
                </div>
                <button className="col btn btn-primary mb-2" >Search</button>
              </form>
              <div>
              <p>History</p>
              {locationHistory.map(location =>
                <form id={location} className="form-search p-2 " onSubmit={handleSubmit} key={location}>
                  <button className="btn-lg btn-block w-50 text-white bg-secondary p-2 border border-white rounded">{location}</button>
                </form>
                )}
              
              </div>
              </div>
             :
             <div >
                <div className="container">
                  <div className="row m-2 justify-content-between">
                  <button className="col-8 btn btn-primary" onClick={handleClick}>Search for places</button>
                  <button id="tempUnityBoton" className="col-2 aling-self-end btn btn-primary rounded-circle" onClick={tempUnityHandler}>{tempUnity}</button>
                  </div>
                </div>
                <div className="p-3 m-3" >
                  <img className="img-fluid" src={imgSelector(weatherInfo.list[8].weather[0].main)}
                   alt={weatherInfo.list[8].weather[0].main} />
                  <div><h1 className="tempField">{roundHandler(weatherInfo.list[0].main.temp)}</h1>{tempUnity}</div>
                  <p>{weatherInfo.list[0].dt_txt}</p>
                  <p>{weatherInfo.city.name}({weatherInfo.city.country})</p>
                </div>
              </div>
            }
             </div>
            <div className="col p-1 m-2 container bg-dark rounded">
              <WeekPrediction 
                tempUnity={tempUnity}
                imgSelector={imgSelector}
                day1= {
                  [weatherInfo.list[8].dt_txt,
                  weatherInfo.list[8].weather[0].main,
                  roundHandler(weatherInfo.list[8].main.temp_max),
                    roundHandler(weatherInfo.list[8].main.temp_min)
                ]}
                
                day2= {
                  [weatherInfo.list[16].dt_txt,
                  weatherInfo.list[16].weather[0].main,
                  roundHandler(weatherInfo.list[16].main.temp_max),
                  roundHandler(weatherInfo.list[16].main.temp_min)
                ]}

                day3= {
                  [weatherInfo.list[24].dt_txt,
                  weatherInfo.list[24].weather[0].main,
                  roundHandler(weatherInfo.list[24].main.temp_max),
                  roundHandler(weatherInfo.list[24].main.temp_min)
                ]}

                day4= {
                  [weatherInfo.list[32].dt_txt,
                  weatherInfo.list[32].weather[0].main,
                  roundHandler(weatherInfo.list[32].main.temp_max),
                  roundHandler(weatherInfo.list[32].main.temp_min)
                ]}
                />
              <Highlights list={weatherInfo.list[0]}/>
            </div>
            
          </div>
        )
        }
        <Footer /> 
    </div>
  );
}

export default App;
