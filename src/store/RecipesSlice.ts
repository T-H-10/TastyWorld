import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { partialRecipeType, recipeType } from "../types/recipeType";
import { storeType } from "./Store";
import { deleteRecipe, updateRecipe } from "./RecipePut&Delete";

export const routerURLRecipes = "http://localhost:3000/api/recipes";
export const fetchRecipes = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(routerURLRecipes)
            return response.data as recipeType[];
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response ? e.response.status : 500,
            });
        }
    }
);
export const addRecipe = createAsyncThunk('recipes/add',
    async ({ newRecipe, userId }: { newRecipe: partialRecipeType, userId: number }, thunkAPI) => {
        console.log('add');

        try {
            const response = await axios.post(routerURLRecipes, {
                title: newRecipe.title,
                description: newRecipe.description,
                ingredients: newRecipe.ingredients,
                instructions: newRecipe.instructions
            }, {
                headers: { "User-id": userId }
            });
            alert('המתכון נוסף בהצלחה')
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response ? e.response.status : 500,
            });
        }
    }
);

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: { recipesList: [] as recipeType[], loading: true },
    reducers: {
        add: (_, action: PayloadAction<{ newRecipe: partialRecipeType; userId: number }>) => {
            addRecipe({ newRecipe: action.payload.newRecipe, userId: action.payload.userId });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled,
                (state, action) => {
                    state.recipesList = action.payload;
                    state.loading = false;
                })
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRecipes.rejected, (state) => {
                state.loading = false;
                alert('תקלה! נסו שוב מאוחר יותר');
            })
            .addCase(addRecipe.fulfilled,
                (state, action: PayloadAction<recipeType>) => {
                    state.recipesList = [...state.recipesList, { ...action.payload }]
                    state.loading = false;
                }
            )
            .addCase(addRecipe.pending, (state) => {
                state.loading = true;
            })
            .addCase(addRecipe.rejected, (state) => {
                state.loading = false;
                console.log(state);
                
                alert('תקלה! נסו שוב מאוחר יותר');
            })
            .addCase(deleteRecipe.fulfilled,
                (state, action: PayloadAction<recipeType>) => {
                    state.recipesList = state.recipesList.filter(recipe => recipe.id !== action.payload.id);
                    state.loading = false;
                }
            )
            .addCase(deleteRecipe.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteRecipe.rejected, (state) => {
                state.loading = false;
                alert('תקלה! נסו שוב מאוחר יותר');
            })
        
            .addCase(updateRecipe.fulfilled,
                (state, action: PayloadAction<recipeType>) => {
                    const index = state.recipesList.findIndex(recipe => recipe.id === action.payload.id);
                    if (index >= 0) {
                        state.recipesList[index] = action.payload;
                    }
                    state.loading = false;
                }
            )
            .addCase(updateRecipe.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateRecipe.rejected, (state) => {
                state.loading = false;
                alert('תקלה! נסו שוב מאוחר יותר');
            });
    }
});
export const selectRecipes = (state: storeType) => state.recipes;
export const { add } = recipesSlice.actions;
export default recipesSlice;

