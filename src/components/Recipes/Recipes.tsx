import { Box, Paper, Typography } from '@mui/material';
import RecipesList from './RecipesList';
import { Outlet } from 'react-router';

const Recipes = () => {
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Paper elevation={3} style={{ padding: '16px', width: '30%', backgroundColor: '#ffffff', border: '2px solid #66BB6A', marginLeft: '2px' }}>
                <Typography variant="h6" gutterBottom>
                    המתכונים שלנו:
                </Typography>
                <RecipesList />
            </Paper>
            <Paper elevation={3} style={{ padding: '16px', width: '65%', backgroundColor: '#ffffff', border: '2px solid #AB47BC', marginRight: '2px'  }}>
                <Outlet/>
            </Paper>
        </Box>
    );
};

export default Recipes;
