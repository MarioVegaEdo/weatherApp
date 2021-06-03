export const getWeather = async (location) =>{
    let search 
    location === undefined ? search = 'madrid'
    : search = location

    const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
    const API_KEY = '&appid=65d2187b25c5d78afbef68c4b83e2c24'
    
    const FINAL_URL = BASE_URL + search + API_KEY

    const data = await fetch(FINAL_URL)
    const dataJson = await data.json()
    return dataJson 
      
  
      
    
    
  
    
    //setWeatherInfo(dataJson)
    /*
    return fetch(FINAL_URL).then(response => {const {data}=response; return data})
    */
  }