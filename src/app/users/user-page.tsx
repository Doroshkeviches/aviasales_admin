import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUser, getUsers } from './store/users.action'
import { userErrorsSelector, userPendingSelector, userSelector, usersErrorsSelector, usersPendingSelector, usersSelector } from './store/users.selector'
import { useParams } from 'react-router'
import UserCard from './components/user-card.component'
import { Card, CardContent, Typography, CardActions, Button, TextField, CircularProgress, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert } from '@mui/material'
import UserEdit from './components/user-edit.component'
import UserTicketsComponent from './components/user-tickets.component'

export default function UserPage() {
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()
    const user = useAppSelector(userSelector)
    const user_errors = useAppSelector(userErrorsSelector)
    const user_pending = useAppSelector(userPendingSelector)
    useEffect(() => {
        dispatch(getUser(id!))
    }, [])
    if (user_pending) {
        return <CircularProgress />
    }
    return (
        <>
            {
                user ?
                    <>
                        <UserEdit user={user} />
                        <Divider />
                        {user.tickets.map(ticket => {
                           return  <UserTicketsComponent ticket={ticket} />
                        })}

                    </>
                    :
                    null
            }
            {user_errors ?
                <Alert severity="error">{user_errors}</Alert>
                :
                null
            }
        </>
    )
}
