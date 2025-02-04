import { Avatar as AvatarMUI } from "@mui/material";
import { UserContext } from "../Header";
import { useContext } from "react";
import FaceIcon from '@mui/icons-material/Face';

const Avatar = () => {
    
    function stringToColor(string: string) {
        let hash = 0;
        let i;
        if(!string) return '#00';
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }

    function stringAvatar(firstName: string, lastName: string) {
        firstName = (!firstName) ? ' ':firstName;
        lastName = (!lastName) ? ' ':lastName;

        return {
            sx: {
                bgcolor: stringToColor(`${firstName} ${lastName}`),
            },
            children: [firstName[0], lastName[0]],
        };
    }
    const userContext= useContext(UserContext)
   
    return (<>
        {!(userContext.user.firstName) && !(userContext.user.lastName) ? <FaceIcon/> :
            <AvatarMUI {...stringAvatar(userContext.user.firstName, userContext.user.lastName)} />
        }
        <div>
            שלום {userContext.user.firstName} {userContext.user.lastName}
        </div>
    </>)
}
export default Avatar;