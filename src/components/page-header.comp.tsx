import { MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const PageHeaderComp: FC = () => {
  return (
    <header style={{ display: 'flex' }}>
      <MenuItem >
        <Link to={'/store/catalog'}>
          <Typography textAlign="center">Store</Typography>
        </Link>

      </MenuItem>
      <MenuItem >
        <Link to={'/cart'}>
          <Typography textAlign="center">Cart</Typography>
        </Link>

      </MenuItem>
      <MenuItem >
        <Link to={'/order'}>
          <Typography textAlign="center">My orders</Typography>
        </Link>

      </MenuItem>
    </header>
  );
};

export default PageHeaderComp;