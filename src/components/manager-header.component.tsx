import { Button, MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RoutesConstant } from "src/constants/RoutesConstants.enum";
import { useAppDispatch } from "src/storeTypes";
import { signout } from "src/utils/signout";

const ManagerHeaderComp: FC = () => {
    const dispatch = useAppDispatch()
    const handleClickSignOut = () => {
        signout(dispatch)
    }
    return (
        <header style={{ display: 'flex', padding: '10px 60px', justifyContent: 'center' }}>
            <MenuItem >
                <NavLink to={RoutesConstant.flights} >
                    <Typography textAlign="center" variant="h4" className="navlink">Flights</Typography>
                </NavLink>
            </MenuItem>
            <MenuItem >
                <NavLink to={RoutesConstant.tickets}>
                    <Typography textAlign="center" variant="h4" className="navlink">Tickets</Typography>
                </NavLink>
            </MenuItem>
            <Button onClick={handleClickSignOut} variant="contained" color="error" sx={{ marginLeft: 'auto' }}>Sign out</Button>
        </header>
    );
};

export default ManagerHeaderComp;