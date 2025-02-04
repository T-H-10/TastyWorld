import { TextField, Typography } from '@mui/material';
import { FieldErrors } from 'react-hook-form';
import { Location } from 'react-router';

const RecipeDetailsInput = ({ register, errors, location }: { register: Function, errors: FieldErrors, location: Location }) => (
    <>
        {!location.state && (
            <Typography variant="h5" sx={{ mb: 2 }}>הכנס מתכון חדש</Typography>
        )}
        <TextField
            {...register('title')}
            label="שם המתכון"
            variant="outlined"
            fullWidth
            defaultValue={location.state !== null ? location.state.title : ""}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ''}
            margin="normal"
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ff5722' } } }}
        />
        <TextField
            {...register('description')}
            label="תיאור המתכון (אופציונלי)"
            defaultValue={location.state ? location.state.description : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2196f3' } } }}
        />
    </>
);

export default RecipeDetailsInput;
