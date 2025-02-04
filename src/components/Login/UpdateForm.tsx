import { Box, Button } from "@mui/material";
import { createContext, Dispatch, useContext, useState } from "react";
import { UserContext } from "../Header";
import { initialUserState, UserType } from "../../types/userTypes";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IsUpdating } from "./UpdateDetails";
import MyTextField from "../Style/MyTextField";

export const FormDataContext = createContext<[UserType, Dispatch<React.SetStateAction<UserType>>]>([initialUserState, () => null]);
const UpdateForm = ({ handleSubmit }: { handleSubmit: Function }) => {
    const { user, } = useContext(UserContext);
    const [open, setIsOpen] = useContext(IsUpdating);
    const [formData, setFormData] = useState({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        address: user.address,
        tel: user.tel
    });
    return (<>
        {open &&
            <FormDataContext value={[formData, setFormData]} >
                <Box component="form"
                    sx={{
                        position: 'fixed',
                        top: '5vh',
                        left: '30vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '80vh',
                        width: '30vw',
                        backgroundColor: 'white',
                        zIndex: 1000,
                        pointerEvents: 'auto',
                        '& > :not(style)': { m: 1, width: '25ch' }
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => { handleSubmit(e, formData); }}
                >
                    <MyTextField label="First Name" name="firstName" value={formData.firstName}></MyTextField>
                    <MyTextField label="Last Name" name="lastName" value={formData.lastName}></MyTextField>
                    <MyTextField label="Email" name="email" value={formData.email}></MyTextField>
                    <MyTextField label="Password" name="password" value={formData.password}></MyTextField>
                    <MyTextField label="Address" name="address" value={formData.address}></MyTextField>
                    <MyTextField label="Tel" name="tel" value={formData.tel}></MyTextField>
                    <Button
                        sx={{ color: 'black' }}
                        variant="outlined"
                        type="submit"
                        color="inherit"
                    > <span><DoneOutlineIcon /></span>אישור
                    </Button>
                    <Button
                        sx={{ color: 'black' }}
                        variant="outlined"
                        type="button"
                        color="inherit"
                        onClick={() => setIsOpen(false)}
                    > ביטול </Button>
                </Box>
            </FormDataContext>
        }
    </>)
}
export default UpdateForm;