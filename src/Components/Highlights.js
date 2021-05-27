
const Highlights = (props) => {
    return(
      <div>
            <h1>Today highlights</h1>
            <div>
              <p>WIND
                {props.list.wind.speed}
                {props.list.wind.deg}
                {props.list.wind.gust}
              </p>
              <p>HUMIDITY
              {props.list.main.humidity}
              </p>
              <p>
                Visibility
                {props.list.visibility}
              </p>
              <p>Air pressure
              {props.list.main.pressure}
              </p>
            </div>
        </div>
      )}
   
                  

export default Highlights

{/*
        */}