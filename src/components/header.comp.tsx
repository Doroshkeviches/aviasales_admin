import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { sessionSelector } from "src/app/auth/store/auth.selector";
import { RoutesConstant } from "src/constants/RoutesConstants.enum";
import { useAppDispatch, useAppSelector } from "src/storeTypes";
import { signout } from "src/utils/signout";

const HeaderComp: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const session = useAppSelector(sessionSelector)

  const handleClickSignOut = () => {
    signout(dispatch)
  }
  const navToFlights = () => navigate(RoutesConstant.flights)
  const navToUsers = () => navigate(RoutesConstant.users)
  const navToTickets = () => navigate(RoutesConstant.tickets)
  const navToChat = () => navigate(RoutesConstant.chat)

  return (
    <AppBar position="static" className="header-bar">
      <Toolbar disableGutters>
        <MenuItem onClick={navToFlights}>
          <Typography variant="h4" className="navlink">Flights</Typography>
        </MenuItem>
        <MenuItem onClick={navToChat}>
          <Typography variant="h4" className="navlink">Chat</Typography>
        </MenuItem>
        {
          session?.role_type === 'Admin' ?
            <MenuItem onClick={navToUsers}>
              <Typography variant="h4" className="navlink">Users</Typography>
            </MenuItem>
            :
            null
        }
        <MenuItem onClick={navToTickets}>
          <Typography variant="h4" className="navlink">Tickets</Typography>
        </MenuItem>
        <Button onClick={handleClickSignOut} variant="contained" color="error" sx={{ marginLeft: 'auto' }}>Sign out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComp;