import { Box, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addRecipe } from "../../../store/RecipesSlice";
import { appDispatch } from "../../../store/Store";
import { partialRecipeType } from "../../../types/recipeType";
import { UserContext, IsLogin } from "../../Header";
import validationSchema from "./ValidationSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import IngredientsList from "./IngredientsList";
import RecipeDetailsInput from "./RecipeDetailsInput";
import RecipeInstructionsInput from "./RecipeInstructionsInput";

const RecipeForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const location = useLocation();
    const [ingredients, setIngredients] = useState(['', '']);
    
    useEffect(() => {
        if (location.state) {
            const recipeIngredients = location.state.ingredients || [];
            setIngredients(recipeIngredients.length > 0 ? recipeIngredients : ['', '']);
        }
    }, [location.state]);
    
    const dispatch = useDispatch<appDispatch>();
    const onSubmit = (data: partialRecipeType) => {        
        handleAddRecipe(data);
    };

    const { user } = useContext(UserContext);
    const handleAddRecipe = (newRecipe: partialRecipeType) => {
        dispatch(addRecipe({ newRecipe, userId: user.id }));
    };

    const [isLogin,] = useContext(IsLogin);
    
    return (
        <>
            {isLogin &&
                <Box component="form" onSubmit={handleSubmit(onSubmit, () => {})} sx={{ position: 'sticky', top: '15%', mt: 2, bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
                    <RecipeDetailsInput register={register} errors={errors} location={location} />
                    <IngredientsList ingredients={ingredients} setIngredients={setIngredients} control={control} errors={errors} />
                    <RecipeInstructionsInput register={register} errors={errors} location={location} />
                    <Button type="submit" disabled={ingredients.length < 2} variant="contained" sx={{ bgcolor: '#6200ea', color: '#fff' }}>שמור מתכון</Button>
                </Box>
            }
        </>
    );
}
export default RecipeForm;
