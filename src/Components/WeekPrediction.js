
const WeekPrediction = (props) =>{
    return(
        <div className="row container">
            <h1 className="text-center">WEEK PREDICTION</h1>
            <div className="col-3 p-1 m-1 bg-secondary">
                <h4 className="text-center">DAY 1</h4>
                <p>{props.day1[0]}</p>
                <p>{props.day1[1]}</p>
                <p>{props.day1[2]}/{props.day1[3]}</p>
            </div>
            <div className="col-3 p-1 m-1 bg-secondary">
                <h4 className="text-center">DAY 2</h4>
                <p>{props.day2[0]}</p>
                <p>{props.day2[1]}</p>
                <p>{props.day2[2]}/{props.day2[3]}</p>
            </div>
            <div className="col-3 p-1 m-1 bg-secondary">
                <h4 className="text-center">DAY 3</h4>
                <p>{props.day3[0]}</p>
                <p>{props.day3[1]}</p>
                <p>{props.day3[2]}/{props.day3[3]}</p>
            </div>
            <div className="col-3 p-1 m-1 bg-secondary">
                <h4 className="text-center">DAY 4</h4>   
                <p>{props.day4[0]}</p>
                <p>{props.day4[1]}</p>
                <p>{props.day4[2]}/{props.day4[3]}</p>
            </div>
        </div>   
    )
}

export default WeekPrediction