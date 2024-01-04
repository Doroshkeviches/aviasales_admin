import React from 'react'
import { User } from '../types/User.type'
interface Props {
  user: User
}
export default function UserCard({ user }: Props) {
  return (
    <>
      <div>{user.email}</div>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.id}</div>
    </>
  )
}
