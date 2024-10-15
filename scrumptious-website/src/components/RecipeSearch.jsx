import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './RecipeSearch.css'
import { useState } from 'react';

function RecipeSearch (){
    const[input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
        .then((reponse) => reponse.json())
        .then((json) => {
            console.log(json);
        });
    
    };
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    return(
        <div className= "input-wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input 
                placeholder="Type to search..." 
                value={input} 
                onChange={(e)=> handleChange(e.target.value)}
            />   

        </div>
    );
}
export default RecipeSearch