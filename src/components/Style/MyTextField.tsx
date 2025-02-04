import { TextField } from "@mui/material";
import { useContext } from "react";
import { FormDataContext } from "../Login/UpdateForm";

const MyTextField = ({ label, name, value }: { label: string, name: string, value: string | number | null }) => {
    const [formData, setFormData] = useContext(FormDataContext);
    const handleChange = (e: { target: { name: string; value: string | number | null; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (<>
        <TextField
            label={label}
            variant="filled"
            type='text'
            name={name}
            value={value}
            onChange={handleChange}
        />

    </>)
}
export default MyTextField;