import { useState } from "react";
import axios from "axios";

function SearchBar() {
   
    
    const [location, setLocation] = useState('');
    const [data, setData] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a2174ec49014c6ea28c0a53ac689b53`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
              setData(response.data)
              console.log(response.data)
            })
            setLocation('')
          }
        }
        
      
    
    console.log(data)
    console.log(location)
    return (
        <div className="search-bar">
            <input type="text" placeholder='Enter Location' onChange={event => setLocation(event.target.value)} value={location} onKeyPress={searchLocation} ></input>
        </div>
    )
};

export default SearchBar;