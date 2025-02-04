import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { partialRecipeType } from "../types/recipeType";
import { routerURLRecipes } from "./RecipesSlice";

export const deleteRecipe = createAsyncThunk('recipes/delete',
    async ({ recipeId, userId }: { recipeId: number, userId: number }, thunkAPI) => {
        try {
            const response = await axios.delete(`${routerURLRecipes}/:${recipeId}`, {
                headers: { "User-id": userId }
            });
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response ? e.response.status : 500,
            });
        }
    }
);

export const updateRecipe = createAsyncThunk('recipes/update',
    async ({ recipeId, updatedRecipe, userId }: { recipeId: number, updatedRecipe: partialRecipeType, userId: number }, thunkAPI) => {     
        try {
            const response = await axios.put(`${routerURLRecipes}/:${recipeId}`, {
                title: updatedRecipe.title,
                description: updatedRecipe.description,
                ingredients: updatedRecipe.ingredients,
                instructions: updatedRecipe.instructions
            }, {
                headers: { "User-id": userId }
            });
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response ? e.response.status : 500,
            });
        }
    }
);