import { TextField } from '@mui/material';
import { FieldErrors } from 'react-hook-form';
import { Location } from 'react-router';

const RecipeInstructionsInput = ({ register, errors, location }: { register: Function, errors: FieldErrors, location: Location }) => (
    <TextField
        {...register('instructions')}
        label="הוראות הכנה"
        variant="outlined"
        defaultValue={location.state ? location.state.instructions : ""}
        fullWidth
        multiline
        rows={4}
        error={!!errors.instructions}
        helperText={errors.instructions ? errors.instructions.message : ''}
        margin="normal"
        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#9c27b0' } } }}
    />
);

export default RecipeInstructionsInput;
