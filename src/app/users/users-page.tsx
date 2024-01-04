import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUsers } from './store/users.action'
import { usersErrorsSelector, usersPendingSelector, usersSelector } from './store/users.selector'
import UserCard from './components/user-card.component'

export default function UserPage() {
    const users = useAppSelector(usersSelector)
    const errors = useAppSelector(usersErrorsSelector)
    const pending = useAppSelector(usersPendingSelector)
    console.log(users, errors, pending)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers(1))
    }, [])
    return (
        <>
        {users.map(user => {
            return <UserCard user={user}/>
        })}
        </>
    )
}
