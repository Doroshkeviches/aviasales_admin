import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUser } from './store/users.action'
import { devicesErrorsSelector, devicesPendingSelector, devicesSelector, userErrorsSelector, userPendingSelector, userSelector } from './store/users.selector'
import { useParams } from 'react-router'
import { Typography, Button, CircularProgress, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router'
import UserEdit from './components/user-edit.component'
import UserTicketsComponent from './components/user-tickets.component'
import AlertMessage from '../../components/alert-message'
import { Device } from './types/Device.type'
import useRepository from 'src/hooks/useRepositiry'

export default function UserPage() {
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()
    const user = useAppSelector(userSelector)
    const user_errors = useAppSelector(userErrorsSelector)
    const user_pending = useAppSelector(userPendingSelector)

    const navigate = useNavigate()
    const [isLoading, errors, data, fetchData] = useRepository()
    useEffect(() => {
        dispatch(getUser(id!))
        
    }, [])
    if (user_pending) {
        return <CircularProgress />
    }
    const navigateBackToUsers = () => {
        navigate('/admin/users')
    }
    // const handleDeviceDelete = async (device: Device) => {
    //     const body = { device_id: device.device_id }
    //     const res = await fetchData('/devices/signout-selected-session', "POST", body)
    //     if (res.data) {
    //         dispatch(getUserDevices(id!))
    //     }
    // } TODO replace to aviasales_client!
    return (
        <Container sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            {user ? <><Stack className='user-edit-stack'>
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
