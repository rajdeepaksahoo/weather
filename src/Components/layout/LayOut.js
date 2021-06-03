import {React,Component, useState, useEffect} from 'react';
import Location from '../location/Location';
import Search from '../Search/Search';
import Temp from '../Temp/Temp';
import classes from './LayOut.module.css'

var Layout=()=>{
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Bhubaneswar');

    useEffect(()=>{
        const fetchApi = async ()=>{
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e89ff401aa37aab02e9df25701ee3362`
            const  response = await fetch(api);
            const responses = await response.json();
           
            
            setCity(responses.main);
        }
        fetchApi();
    })
 var change=(event)=>{setSearch(event.target.value)}
    return(
        <div>
           
            <Search change = {change}></Search>
            {!city ? (
                <p>No Data Found,,,</p>
            ):( <Temp temp={city.temp}
                max={city.temp_max} 
                min={city.temp_min}
                real={city.feels_like} 
             
                search={search}></Temp>)}
           
            
        </div>
    )
}

export default Layout;
