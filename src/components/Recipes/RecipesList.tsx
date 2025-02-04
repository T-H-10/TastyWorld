import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/RecipesSlice";
import { appDispatch, storeType } from "../../store/Store";
import { recipeType } from "../../types/recipeType";
import RecipeItem from "../Style/RecipeItem";
import { IsLogin } from "../Header";
import { Button } from "@mui/material";
import { Link } from "react-router";

const RecipesList = () => {
    const dispatch = useDispatch<appDispatch>();
    const recipes = useSelector((store: storeType) => store.recipes.recipesList);
    useEffect(() => {
        dispatch(fetchRecipes())
    }, [recipes]);
    const [isLogin,] = useContext(IsLogin);
    const color = (recipeId: number) => {
        return `rgb(${(recipeId * 20) % 256},${(recipeId * 50) % 256},${(recipeId * 100) % 256})`
    }
    return (
        <>
            <div>
                {recipes.map((recipe: recipeType) => (
                    <div key={recipe.id}>
                        <RecipeItem recipe={recipe} />
                        <hr style={{ borderColor: color(recipe.id) }} />
                    </div>
                ))}
                {isLogin &&
                    <Link to="/recipes/new-recipe" style={{ textDecoration: 'none' }}>
                        <Button>add</Button>
                    </Link>}
            </div>
        </>
    );
};
export default RecipesList;

