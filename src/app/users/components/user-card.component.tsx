// ======= utils, types ======= //
import { User } from '../types/User.type'

// ======= mui ======= //
import { Card, CardContent, Typography, CardActions } from '@mui/material'
import { RoutesConstant } from 'src/constants/RoutesConstants.enum'
import { NavLink } from 'react-router-dom'
interface Props {
  user: User
}
export default function UserCard({ user }: Props) {
  return (
    <>
      <Card className='user-card'>
        <CardContent>
          <Typography variant='h2'>
            {user.last_name} {user.first_name}
          </Typography>
          <Typography variant='h5' paddingTop={'3px'}>
            Email: {user.email}
          </Typography>
          <Typography variant="h5" paddingTop={'3px'}>
            Tickets purchaced: {user.tickets.length}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <NavLink to={RoutesConstant.user_id} className='personal-info'>
            Watch Personal Info
          </NavLink>
        </CardActions>
      </Card>
    </>
  )
}
