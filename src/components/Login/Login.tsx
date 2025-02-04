import { useContext, useRef, useState } from "react"
import { routerURLUser } from "./UserReducer"
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { IsLogin, UserContext } from "../Header";
import CustomTypography from "../Style/CustomBox";
import CustomBox from "../Style/CustomBox";
import { statusType } from "../../types/userTypes";

const Login = ({ status }: { status: statusType }) => {
    const { userDispatch } = useContext(UserContext);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState<Boolean>(false);
    const [, setIsLogin] = useContext(IsLogin);
    const loginUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${routerURLUser}${status}`,
                {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                })
            userDispatch({
                type: 'LOGIN_USER',
                data: status === "login" ? {
                    ...res.data.user
                } : {
                    id: res.data.userId,
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                }
            })
            setIsLogin(true);
        }
        catch (e:any) {
            if (e.response?.status === 401) {
                alert('!משתמש לא קיים במערכת, יש להירשם');
            }
            if (e.response?.status === 400) {
                alert('!משתמש כבר קיים במערכת, לא ניתן להירשם שוב');
            }
        }
        emailRef.current!.value = '';
        passwordRef.current!.value = '';
        setOpen(false);
    }
    return (
        <>
            {status === "login" && <span onClick={() => setOpen(true)}>
                <CustomBox hoverColor='#FF7043' >התחברות </CustomBox></span>}
            {status === "register" && <span onClick={() => setOpen(true)}>
                <CustomTypography hoverColor='#29B6F6'> הרשמה  </CustomTypography></span>}
            {open && <Box
                component="form"
                onSubmit={loginUser}
                sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 300,
                    padding: 2,
                    gap: 2,
                    backgroundColor: 'white',
                    boxShadow: 3,
                    borderRadius: 2
                }}
            >
                <TextField
                    inputRef={emailRef}
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                />
                <TextField
                    inputRef={passwordRef}
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                />
                <Button type="submit" variant="contained" color="primary"> אישור </Button>
                <Button onClick={() => setOpen(false)}> ביטול</Button>
            </Box>}
        </>
    )
}
export default Login