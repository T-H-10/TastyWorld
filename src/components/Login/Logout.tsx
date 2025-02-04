import { useContext } from "react";
import CustomBox from "../Style/CustomBox";
import { IsLogin, UserContext } from "../Header";

const Logout=()=>{
  const [, setIsLogin] = useContext(IsLogin);
   const { userDispatch } = useContext(UserContext);
return(<>
<span onClick={()=> {
  userDispatch({
    type: 'DELETE_USER'
  });
  setIsLogin(false);}
}>
<CustomBox hoverColor='#FF7043' >
            התנתקות
</CustomBox></span>
</>)
}
export default Logout;