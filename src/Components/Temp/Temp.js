import React from 'react';
import classes from './Temp.module.css'

var Temp = (props) => {
    return(
        <div>
            <h2> {props.search} </h2>
            <h3>29 May 2021</h3>
            <h1>
                {Math.round(props.temp)}°c<br></br>
                {props.weather}
            </h1>
            <h3>Real Feel : {Math.round(props.real)}°c</h3> 
            <h2> 
                Max : {Math.round(props.max)}°c | Min : {Math.round(props.min)}°c
            </h2>
            
        </div>
    )
}
export default Temp;