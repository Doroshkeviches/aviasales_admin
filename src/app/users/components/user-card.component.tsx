import { useNavigate } from 'react-router-dom'

// ======= utils, types ======= //
import { User } from '../types/User.type'

// ======= mui ======= //
import { Card, CardContent, Typography, CardActions } from '@mui/material'
interface Props {
  user: User
}
export default function UserCard({ user }: Props) {
  const navigate = useNavigate()

  const navigateToPersonalInfo = () => {
    navigate(`${user.id}`)
  }
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
          <Typography variant='h5' className='personal-info' onClick={navigateToPersonalInfo} sx={{ cursor: 'pointer' }}>
            Watch Personal Info
          </Typography>
        </CardActions>
      </Card>
    </>
  )
}
