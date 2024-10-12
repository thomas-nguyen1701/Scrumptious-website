import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './RecipeSearch.css'

function RecipeSearch (){
    return(
        <div className= "input=wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Type to search..."/>   

        </div>
    );
}
export default RecipeSearch