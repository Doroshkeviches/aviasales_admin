import React from 'react'
import { User } from '../types/User.type'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'
interface Props {
  user: User
}
export default function UserCard({ user }: Props) {
  return (
    <>
      <Card className='user-card'>
        <CardContent>
          <Typography variant='h3'>
            {user.last_name} {user.first_name}
          </Typography>
          <Typography variant='h5'>
            Actual Email: {user.email}
          </Typography>
          <Typography variant="h6">
            Actual ID: {user.id}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <Link to={`${user.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant='h6'>
              Watch Personal Info
            </Typography>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
