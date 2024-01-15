import { MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { RoutesConstant } from "src/constants/RoutesConstants.enum";

const AdminHeaderComp: FC = () => {
  return (
    <header style={{ display: 'flex' }}>
      <MenuItem >
        <NavLink to={RoutesConstant.flights}>
          <Typography textAlign="center">Flights</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem >
        <NavLink to={RoutesConstant.users}>
          <Typography textAlign="center">Users</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem >
        <NavLink to={RoutesConstant.tickets}>
          <Typography textAlign="center">Tickets</Typography>
        </NavLink>
      </MenuItem>
    </header>
  );
};

export default AdminHeaderComp;