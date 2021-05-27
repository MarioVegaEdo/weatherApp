import React,{useState} from 'react'

const SearchData = (props) =>{

  const [showForm, setShowForm] = useState(false);

  const Form = () =>{

    const handleSubmit = (event) =>{
      event.preventDefault()

      setShowForm(false)
    }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search location"/>
        <button>Search</button>
      </form>
    )
  }

  const Info = (info) =>{

    const handleClick = () => {
      setShowForm(true)
    }

    return(
      <div>
        <button onClick={handleClick}>Search for places</button>
        <p>{info.infoTemp}</p>
        <p>{info.infoDt}</p>
        <p>{info.infoWeatherMain}</p>
        <p>{info.infoCountry}</p>
        <p>{info.infoCity}</p>
      </div>
    )
  }


    return(
        <div>
          {showForm ? <Form />
          : 
          <Info 
              infoTemp={props.temp}
              infoDt={props.dt}
              infoCity={props.city}
              infoCountry={props.country}
              infoWeatherMain={props.weatherMain}
              />
          }
        </div>
      )
}

export default SearchData

{/*
  infoTemp,infoDt,infoCity,infoCountry
  infoTemp={props.temp}
              infoDt={props.dt}
              infoCity={props.city}
              infoCountry={props.country}
<button>Search for places</button>
          <div>Imagen clima</div>
          <div>
            {weatherInfo.list[0].main.temp}
            </div>
            <div>{weatherInfo.list[0].weather[0].main}</div>
            <div>Día today 17/7/77, esto saca la hora de la prediccion{weatherInfo.list[0].dt_txt+'/'}</div>
            <div>{weatherInfo.city.name}({weatherInfo.city.country})</div>
            <div>
              <form>
                <input type="text" placeholder="Search location"/>
                <input type="submit" />
                <p>Recomendaciones/antes visitados</p>
              </form>
            </div>
*/}