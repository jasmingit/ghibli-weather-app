function WeatherInfo() {

    return (
        <div>
        <div className="container"></div>
      <div className="top"></div>
      <div className="weather">
        
      <div className="location">
        <p>London</p>
      </div>
      <div className="temp">
        <h1>4°C</h1>
        <div className="description">
          <h3>cloudy</h3>
        </div>
        
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="title">Feels Like</p>
          <p className="bold">2°C</p>
        </div>
        <div className="humidity">
          <p className="title">Humidity</p>
          <p className="bold">12%</p>
        </div>
        <div className="wind">
          <p className="title">Wind</p>
          <p className="bold">12 MPH</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default WeatherInfo