
const Highlights = (props) => {
    return(
      
      <div>
            <h1 className="text-center">TODAY HIGHLIGHTS</h1>
            <div className=" container">
              <div className="row align-items-start">
                <div className="col-5 p-2 m-2 text-center container bg-secondary">
                  <h4 className="text-center">WIND</h4>
                  <p>{props.list.wind.speed} mph</p>
                </div>
                <div className="col-5 p-2 m-2 text-center container bg-secondary">
                  <h4 className="">HUMIDITY</h4>
                  <p>{props.list.main.humidity} %</p>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-5 p-2 m-2 text-center container bg-secondary">
                  <h4 className="text-center">VISIBILITY</h4>
                  <p>{props.list.visibility/1000} miles</p>
                </div>
                <div className="col-5 p-2 m-2 text-center container bg-secondary">
                  <h4 className="text-center">AIR PRESSURE</h4>
                <p>{props.list.main.pressure} mb</p>
                </div>
              </div>
            </div>
        </div>
      )}
   
                  

export default Highlights
