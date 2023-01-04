import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import SearchBar from './components/SearchBar';


function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=9a2174ec49014c6ea28c0a53ac689b53'

  return (
    <div className="app">
      <SearchBar />
      <WeatherInfo />
    </div>
  );
}

export default App;
