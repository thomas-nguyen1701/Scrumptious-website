import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './RecipeSearch.css'
import { useState } from 'react';

function RecipeSearch (){
    const[input, setInput] = useState("")

    const FetchData = {value} => {
        fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    }
    return(
        <div className= "input-wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input 
                placeholder="Type to search..." 
                value={input} 
                onChange={(e)=> setInput(e.target.value)}
            />   

        </div>
    );
}
export default RecipeSearch