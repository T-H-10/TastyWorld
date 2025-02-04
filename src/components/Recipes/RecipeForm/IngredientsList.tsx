import { Box, IconButton, Button, Typography, TextField } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const IngredientsList = ({ ingredients, setIngredients, control, errors }: {ingredients: string[], setIngredients:Function, control: Control<any>, errors:FieldErrors}) => (
    <>
        {ingredients.map((ingredient, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Controller
                    name={`ingredients[${index}]`}
                    control={control}
                    defaultValue={ingredient}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={`מצרך ${index + 1}`}
                            variant="outlined"
                            fullWidth
                            error={!!errors.ingredients?.[index]}
                        />
                    )}
                />
                <IconButton onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))} color="error" sx={{ ml: 1 }}>
                    <RemoveIcon />
                </IconButton>
            </Box>
        ))}
        {errors.ingredients && (
            <Typography color="error" sx={{ mb: 2 }}>צריך לפחות 2 מצרכים</Typography>
        )}
        <Button onClick={() => setIngredients([...ingredients, ''])} variant="outlined" startIcon={<AddIcon />} sx={{ mb: 2 }}>
            הוסף מצרך
        </Button>
    </>
);
export default IngredientsList;