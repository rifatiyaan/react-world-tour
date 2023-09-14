import { useEffect, useState } from "react";
import Country from "../country/country";
import './Countries.css'


const Countries = () => {
    const[countries,setCountries] = useState([])
    const[visitedCountries,setVisitedCountries] = useState([]);
    const[visitedFlags,setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleFlags = flags => {
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }
    

    return (
        <div>
            <h1>React World Tour</h1>
            <h1>Countries:{countries.length}</h1>
            <h3>Visited Countries: </h3>
            <div className="visited-country-container">
                {
                    visitedCountries.map(country => <li key={country.cca3}>
                    {country.name.common}
                    </li> )
                }

            </div>
            <div className="img-container">
                {
                    visitedFlags.map((flag,idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country =><Country key={country.cca3} country={country} 
                    handleCountry={handleVisitedCountry}
                    handleFlags={handleFlags}
                    >   
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;