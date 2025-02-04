import Header from './Header';
import { Outlet } from 'react-router';
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
};

export default AppLayout;