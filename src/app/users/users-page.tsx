import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUsers, getUsersBySearch } from './store/users.action'
import { usersErrorsSelector, usersPendingSelector, usersSelector } from './store/users.selector'
import UserCard from './components/user-card.component'
import { TextField } from '@mui/material'
import useDebounce from 'src/hooks/useDebounce'

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
        <>
            <TextField
                id="filled-search"
                label="Search user"
                type="search"
                variant="filled"
                onChange={(e) => debounced(e.target.value)}
            />
            {users.map(user => {
                return <UserCard user={user} />
            })}
            {errors}
        </>
    )
}
