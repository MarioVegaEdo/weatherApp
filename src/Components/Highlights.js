import ProgressBar from 'react-bootstrap/ProgressBar'

const Highlights = (props) => {

    return(
      
      <div>
            <h1 className="text-center">TODAY'S HIGHLIGHTS</h1>
            <div className=" container">
              <div className="row">
                <div className="col  p-2 m-2 text-center container bg-secondary rounded">
                  <h5 className="text-center">WIND</h5>
                  <p>{props.list.wind.speed} mph</p>
                  {props.list.wind.deg} degree
                </div>
                <div className="col p-2 m-2 text-center container bg-secondary rounded">
                  <h5 className="text-center">HUMIDITY</h5>
                  <p id="humidity">{props.list.main.humidity} % </p>
                  <ProgressBar variant="primary" now={props.list.main.humidity} /> 
                </div>
              </div>

              <div className="row ">
                <div className="col p-2 m-2 text-center container bg-secondary rounded">
                  <h5 className="text-center">VISIBILITY</h5>
                  <p>{props.list.visibility/1000} miles</p>
                </div>
                <div className="col p-2 m-2 text-center container bg-secondary rounded" >
                  <h5 className="text-center">AIR PRESSURE</h5>
                <p>{props.list.main.pressure} mb</p>
                </div>
              </div>
            </div>
        </div>
      )}
   
                  

export default Highlights
