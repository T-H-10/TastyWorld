import { Box, Typography } from "@mui/material";

const EmptyRecipe=()=>{
    return(<>
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="100vh" 
            bgcolor="background.default"
        >
            <Typography 
                variant="h4" 
                component="h2" 
                align="center" 
                sx={{ fontWeight: 'bold', color: 'primary.main' }} // עיצוב נוסף
            >
                כאן יוצג המתכון
            </Typography>
        </Box>
    </>);
}
export default EmptyRecipe;