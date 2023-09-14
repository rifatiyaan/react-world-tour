import { useState } from 'react';
import './Country.css'
const country = ({country,handleCountry,handleFlags}) => {
    const {name,capital,flags} = country;

    const [visited,setVisited] = useState(false);

    const handleVisit = ()=>{
      setVisited(!visited);
    }
    
   
    return (
        <div className={`box ${visited? 'visited':'not-visited'}`}>
          <h3>Name: {name.common}</h3>  
          <h3>Capital: {capital}</h3>
          <img src={flags.png} alt="" />
          <button onClick={handleVisit}>{visited?'visited':'going'}</button>
          <button onClick={()=>handleCountry(country)}>Mark Visited</button>
          <button onClick={()=>handleFlags(country.flags.png)}>Add Flags</button>
        </div>
    );
};

export default country;