import React from 'react';
import classes from './Search.module.css'

var Search = (props) => {
    return(
        <div>
            <input placeholder='Search...' 
            onChange={props.change}></input>
        </div>
    )
}
export default Search;