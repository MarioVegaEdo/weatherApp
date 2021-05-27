
const WeekPrediction = (props) =>{
    return(
        <div>
            <h1>Week Prediction</h1>
            <div>DAY1
                <p>{props.day1[0]}</p>
                <div>{props.day1[1]}</div>
                <div>{props.day1[2]}/{props.day1[3]}</div>
            </div>
            <div>DAY2
                <p>{props.day2[0]}</p>
                <div>{props.day2[1]}</div>
                <div>{props.day2[2]}/{props.day2[3]}</div>
            </div>
            <div>DAY3
                <p>{props.day3[0]}</p>
                <div>{props.day3[1]}</div>
                <div>{props.day3[2]}/{props.day3[3]}</div>
            </div>
            <div>DAY4
                <p>{props.day4[0]}</p>
                <div>{props.day4[1]}</div>
                <div>{props.day4[2]}/{props.day4[3]}</div>
            </div>
        </div>   
    )
}

export default WeekPrediction
{/*<div>
    <h1>Next week</h1>
      
    <div>
        REPETIR POR CADA DÍA
        <p>{weatherInfo.list[8].dt_txt+'/'}</p>
        <p>{weatherInfo.list[8].weather[0].main}</p>
        <p>{weatherInfo.list[8].main.temp_max+'/'+weatherInfo.list[0].main.temp_min}</p>
    </div>

</div>*/}