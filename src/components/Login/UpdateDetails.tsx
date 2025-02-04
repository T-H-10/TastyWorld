import axios from "axios";
import { createContext, Dispatch, FormEvent, useContext, useState } from "react";
import { UserType } from "../../types/userTypes";
import { routerURLUser } from "./UserReducer";
import { UserContext } from "../Header";
import CustomBox from "../Style/CustomBox";
import UpdateForm from "./UpdateForm";

export const IsUpdating = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

const UpdateDetails = () => {
    const { user, userDispatch } = useContext(UserContext);
    const [open, setOpen] = useState<boolean>(false);
    const handleSubmit = async (e: FormEvent, userToUpdate: UserType) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${routerURLUser}`, { ...userToUpdate },
                { headers: { 'user-id': ''+user.id } });
            userDispatch({
                type: 'UPDATE_USER',
                data: res.data
            })
            setOpen(false);
        } catch (e) {
            console.log(e);
            if (axios.isAxiosError(e) && e.response?.status === 401) {
                alert('משתמש לא נמצא במערכת');
            }
            if (axios.isAxiosError(e) && e.response?.status === 403) {
                alert(e.message);
            } if (axios.isAxiosError(e) && e.response?.status === 404) {
                alert('משתמש לא נמצא');
            }
        }
    }
    return (
        <>
        <IsUpdating value={[open, setOpen]}>
            <span onClick={() => setOpen(true)} >
                <CustomBox hoverColor='#FF7043' >עדכון</CustomBox></span>
             <UpdateForm handleSubmit={handleSubmit}/>
        </IsUpdating>
        </>
    )
}
export default UpdateDetails