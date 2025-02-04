import { Button } from "@mui/material";
import { ReactElement } from "react";

const CustomBox = ({ children, hoverColor }:{children: ReactElement|string, hoverColor: string}) => {
    return (
        <Button
            component="div"
            sx={{
                color: "#333",
                pb: 1,
                borderRadius: "0px", 
                borderBottom: "2px solid transparent",
                '&:hover': {
                    borderBottom: `2px solid ${hoverColor}`,
                    cursor: 'pointer',
                },
                typography: 'h6',
            }} 
        >
            {children}
        </Button>
    );
};

export default CustomBox;

