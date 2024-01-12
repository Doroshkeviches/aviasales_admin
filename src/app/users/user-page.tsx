import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUser } from './store/users.action'
import { userErrorsSelector, userPendingSelector, userSelector } from './store/users.selector'
import { useParams } from 'react-router'
import { Typography, Button, CircularProgress, Container, Stack } from '@mui/material'
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
        <Container sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            {user ? <><Stack className='user-edit-stack'>
                <Button variant='contained' color='success' onClick={navigateBackToUsers} sx={{ marginLeft: 'auto' }}>BACK</Button>
                <Typography variant='h1' color={'whitesmoke'}>USER: {user.first_name} {user.last_name}</Typography>
                <UserEdit user={user} />
            </Stack>
                <Stack direction='column' className='users-stack'>
                    {user.tickets.map(ticket => {
                        return <UserTicketsComponent ticket={ticket} />
                    })}
                </Stack>
            </> : null}
            {user_errors ? <AlertMessage errorMessage={user_errors} ></AlertMessage> : null}
        </Container>
    )
}
