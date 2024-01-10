import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUser, getUsers } from './store/users.action'
import { userErrorsSelector, userPendingSelector, userSelector, usersErrorsSelector, usersPendingSelector, usersSelector } from './store/users.selector'
import { useParams } from 'react-router'
// import UserCard from './components/user-card.component'
import { Card, CardContent, Typography, CardActions, Button, TextField, CircularProgress, Divider, Container, Box } from '@mui/material'
// import { Link } from 'react-router-dom'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { Alert } from '@mui/material'
import { useNavigate } from 'react-router'
import UserEdit from './components/user-edit.component'
import UserTicketsComponent from './components/user-tickets.component'
import AlertMessage from '../auth/components/alert-message'

export default function UserPage() {
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()
    const user = useAppSelector(userSelector)
    const user_errors = useAppSelector(userErrorsSelector)
    const user_pending = useAppSelector(userPendingSelector)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser(id!))
    }, [])
    if (user_pending) {
        return <CircularProgress />
    }
    const navigateBackToUsers = () => {
        navigate('/admin/users')
    }
    return (
        <Container>
            {user ? <Box display={'flex'} flexDirection={'column'} alignItems={'center'} flexWrap={'wrap'} gap={4} padding={"40PX"}>
                <Button variant='contained' color='default' onClick={navigateBackToUsers} sx={{ marginLeft: 'auto' }}>BACK</Button>
                <Typography variant='h1' color={'whitesmoke'}>USER: {user.first_name} {user.last_name}</Typography>
                <UserEdit user={user} />
                {user.tickets.map(ticket => {
                    return <UserTicketsComponent ticket={ticket} />
                })}
            </Box> : null}
            {user_errors ? <AlertMessage errorMessage={user_errors} ></AlertMessage> : null}
        </Container>
    )
}
