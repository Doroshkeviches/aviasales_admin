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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.first_name}
          </Typography>
          <Typography variant="h5" component="div">
            {user.last_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body2">
            {user.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`${user.id}`}>Learn More</Link>
        </CardActions>
      </Card>
    </>
  )
}
