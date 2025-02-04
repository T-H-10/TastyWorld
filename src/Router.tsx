import {createBrowserRouter} from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import AppLayout from "./components/AppLayout"
import RecipeForm from "./components/Recipes/RecipeForm/RecipeForm"
import Recipes from "./components/Recipes/Recipes"
import RecipeDetails from "./components/Recipes/RecipeDetails"
import EmptyRecipe from "./components/Recipes/EmptyRecipe"
export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout/>,
        errorElement: <h1>Error!</h1>,
        children: [
            {path: '/', element: <Home/>},
            { path: 'about', element: <About/>},
            { path: 'recipes', element: <Recipes/>,
                children: [
                    { path: 'new-recipe', element: <RecipeForm /> }, 
                    { path: 'recipe', element: <RecipeDetails /> },
                    { path: '', element: <EmptyRecipe /> }
                ]
            }

        ]
    }
])