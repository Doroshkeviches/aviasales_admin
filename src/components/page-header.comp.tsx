import { MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const PageHeaderComp: FC = () => {
  return (
    <header style={{ display: 'flex' }}>
      <MenuItem >
        <Link to={'/admin/flights'}>
          <Typography textAlign="center">Flights</Typography>
        </Link>
      </MenuItem>
      <MenuItem >
        <Link to={'/admin/users'}>
          <Typography textAlign="center">Users</Typography>
        </Link>
      </MenuItem>
      <MenuItem >
        <Link to={'/admin/tickets'}>
          <Typography textAlign="center">Tickets</Typography>
        </Link>
      </MenuItem>
    </header>
  );
};

export default PageHeaderComp;