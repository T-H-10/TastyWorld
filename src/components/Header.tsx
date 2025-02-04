import { AppBar, Box, Toolbar } from '@mui/material';
import { createContext, Dispatch, useContext } from 'react';
import Login from './Login/Login';
import Avatar from './Login/Avatar';
import { UserType } from '../types/userTypes';
import { Action } from './Login/UserReducer';
import UpdateDetails from './Login/UpdateDetails';
import Logout from './Login/Logout';
import { Link } from 'react-router';
import CustomBox from './Style/CustomBox';

export const IsLogin = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])
export const UserContext = createContext<{ user: UserType, userDispatch: Dispatch<Action> }>({
    user: { id: 0, firstName: '', lastName: '', email: '', password: '', address: '', tel: '' },
    userDispatch: () => null
});
const Header = () => {
    const [isLogin,] = useContext(IsLogin);
    return (
        <>
            <AppBar position="sticky" sx={{ top: '5px', backgroundColor: "#F7F7F7" }}>
                <Toolbar sx={{ color: "#777" }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
                    </Box>
                    {!isLogin && <Login status={"register"} />}
                    {!isLogin && <Login status={"login"} />}
                    {isLogin && <Avatar />}
                    {isLogin && <UpdateDetails />}
                    {isLogin && <Logout />}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <CustomBox hoverColor='#66BB6A'>עמוד הבית</CustomBox>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <CustomBox hoverColor='#AB47BC' >
                            אודות
                        </CustomBox>
                    </Link>
                    <Link to="/recipes" style={{ textDecoration: 'none' }}>
                        <CustomBox hoverColor='#FF7043'>
                            רשימת המתכונים
                        </CustomBox>
                    </Link>
                    {isLogin && <Link to="/recipes/new-recipe" state={null} style={{ textDecoration: 'none' }}>
                        <CustomBox hoverColor='#AB47BC'>
                            הוספת מתכון
                        </CustomBox>
                    </Link>}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
