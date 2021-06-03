
const WeekPrediction = (props) =>{
    return(
        <div className="container">
        <div className="row ">
            <h1 className="text-center">WEEK PREDICTION</h1>
            <div className="col m-1 bg-secondary rounded">
                <h4 className="text-center">DAY 1</h4>
                <p>{props.day1[0]}</p>
                <img className="img-fluid" src={props.imgSelector(props.day1[1])}
                   alt={props.day1[1]} />
                <p><span className="tempField">{props.day1[2]}ºF</span>/<span className="tempField">{props.day1[3]}ºF</span></p>
            </div>
            <div className="col  m-1 bg-secondary rounded">
                <h4 className="text-center">DAY 2</h4>
                <p>{props.day2[0]}</p>
                <img className="img-fluid" src={props.imgSelector(props.day2[1])}
                   alt={props.day2[1]} />
                <p><span className="tempField">{props.day2[2]}ºF</span>/<span className="tempField">{props.day2[3]}ºF</span></p>
            </div>
            <div className="col p-1 m-1 bg-secondary rounded">
                <h4 className="text-center">DAY 3</h4>
                <p>{props.day3[0]}</p>
                <img className="img-fluid" src={props.imgSelector(props.day3[1])}
                   alt={props.day3[1]} />
                <p><span className="tempField">{props.day3[2]}ºF</span>/<span className="tempField">{props.day3[3]}ºF</span></p>
            </div>
            <div className="col p-1 m-1 bg-secondary rounded">
                <h4 className="text-center">DAY 4</h4>   
                <p>{props.day4[0]}</p>
                <img className="img-fluid"src={props.imgSelector(props.day4[1])}
                   alt={props.day4[1]} />
                <p><span className="tempField">{props.day4[2]}ºF</span>/<span className="tempField">{props.day4[3]}ºF</span></p>
            </div>
        </div>
        </div>   
    )
}

export default WeekPrediction