import { Link } from 'react-router-dom';
import { recipeType } from '../../types/recipeType';

const RecipeItem = ({ recipe }:{recipe: recipeType}) => {
    return (
        <div style={{ margin: '10px 0' }}>
            <Link to={`/recipes/recipe`} state={recipe.id} style={{ textDecoration: 'none', color: 'black' }}>
                <h3 style={{ fontSize: '24px' }}>{recipe.title}</h3>
                <p style={{ fontSize: '14px', color: 'gray' }}>{recipe.description}</p>
            </Link>
        </div>
    );
};

export default RecipeItem;
