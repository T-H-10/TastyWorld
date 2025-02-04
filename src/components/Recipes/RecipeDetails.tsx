import { useSelector } from "react-redux";
import { storeType } from "../../store/Store";
import { Link, useLocation } from "react-router";
import { Card, CardContent, Typography, Button, Paper } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { recipeType } from "../../types/recipeType";
import { useContext } from "react";
import { IsLogin, UserContext } from "../Header";

const RecipeDetails = () => {
    const recipes = useSelector((store: storeType) => store.recipes.recipesList);
    const location = useLocation();
    const recipeIndex: number = recipes.findIndex((r) => r.id === location.state);
    const recipe: recipeType = recipes[recipeIndex];
    const userContext= useContext(UserContext);
    const [isLogin,] = useContext(IsLogin);
    
    return (
        <>
            {recipeIndex !== -1 &&
                <Paper elevation={4} style={{ backgroundColor: '#f0f0f0', margin: '20px', padding: '20px', borderRadius: '15px' }}>
                    <Card style={{ backgroundColor: '#ffffff', borderRadius: '15px', color: '#333', border: '2px solid #ff6f61' }}>
                        <CardContent>
                            <Typography variant="h4" component="div" style={{ color: '#333', fontWeight: 'bold', borderBottom: '2px solid #ff6f61', paddingBottom: '10px' }}>
                                {recipe.title}
                            </Typography>
                            <Typography variant="body1" style={{ margin: '10px 0', color: '#555' }}>
                                {recipe.description}
                            </Typography>
                            <Typography variant="h6" style={{ color: '#ff6f61', fontWeight: 'bold', borderBottom: '1px dashed #4caf50', paddingBottom: '5px' }}>
                                מרכיבים:
                            </Typography>
                            <ul style={{ paddingLeft: '20px', color: '#333' }}>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                                        <ListAltIcon style={{ marginRight: '10px', color: '#ff6f61' }} />
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                            <Typography variant="h6" style={{ color: '#ff6f61', fontWeight: 'bold', borderBottom: '1px dashed #4caf50', paddingBottom: '5px' }}>
                                הוראות הכנה:
                            </Typography>
                            <Typography variant="body1" style={{ color: '#333' }}>
                                {recipe.instructions}
                            </Typography>
                            { (+recipe.authorId)===userContext.user.id && 
                            isLogin &&
                            <Link to="/recipes/new-recipe" state={recipe} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ marginTop: '20px', backgroundColor: '#ff6f61', color: 'white' }}>
                                עדכן מתכון
                            </Button>
                            </Link>}
                        </CardContent>
                    </Card>
                </Paper>}
        </>
    );
};

export default RecipeDetails;