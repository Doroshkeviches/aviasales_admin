import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUsers, getUsersBySearch } from './store/users.action'
import { usersErrorsSelector, usersPendingSelector, usersSelector } from './store/users.selector'
import UserCard from './components/user-card.component'
import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import useDebounce from 'src/hooks/useDebounce'
import AlertMessage from '../auth/components/alert-message'

export default function UsersPage() {
    const users = useAppSelector(usersSelector)
    const errors = useAppSelector(usersErrorsSelector)
    const pending = useAppSelector(usersPendingSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers(1))
    }, [])
    const handleInput = (value: string) => {
        dispatch(getUsersBySearch(value))
    }
    const debounced = useDebounce(handleInput)

    return (
        <Container sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Stack className='users-search-stack'>
                <Typography variant='h1' className='main'>REGISTERED USERS</Typography>
                <TextField
                    id="filled-search"
                    label="Search user"
                    placeholder='Enter user name'
                    InputLabelProps={{ shrink: true }}
                    type="search"
                    sx={{ color: 'whitesmoke', width: '40%' }}
                    variant='outlined'
                    onChange={(e) => debounced(e.target.value)}
                />
            </Stack>
            <Stack direction='column' className='users-stack'>
                {users.map(user => {
                    return <UserCard user={user} />
                })}
            </Stack>
            {errors ? <AlertMessage errorMessage={errors} /> : null}
        </Container>
    )
}
