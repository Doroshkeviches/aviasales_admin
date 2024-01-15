import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getUser, getUserDevices } from './store/users.action'
import { devicesErrorsSelector, devicesPendingSelector, devicesSelector, userErrorsSelector, userPendingSelector, userSelector } from './store/users.selector'
import { useParams } from 'react-router'
import { Typography, Button, CircularProgress, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router'
import UserEdit from './components/user-edit.component'
import UserTicketsComponent from './components/user-tickets.component'
import AlertMessage from '../auth/components/alert-message'
import { Device } from './types/Device.type'
import useRepository from 'src/hooks/useRepositiry'

export default function UserPage() {
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()
    const user = useAppSelector(userSelector)
    const user_errors = useAppSelector(userErrorsSelector)
    const user_pending = useAppSelector(userPendingSelector)

    const devices = useAppSelector(devicesSelector)
    const devices_errors = useAppSelector(devicesErrorsSelector)
    const devices_pending = useAppSelector(devicesPendingSelector)
    const navigate = useNavigate()
    const [isLoading, errors, data, fetchData] = useRepository()
    useEffect(() => {
        dispatch(getUser(id!))
        dispatch(getUserDevices(id!))
    }, [])
    if (user_pending) {
        return <CircularProgress />
    }
    const navigateBackToUsers = () => {
        navigate('/admin/users')
    }
    const handleDeviceDelete = async (device: Device) => {
        const body = { device_id: device.device_id }
        const res = await fetchData('/devices/signout-selected-session', "POST", body)
        if (res.data) {
            dispatch(getUserDevices(id!))
        }
    }
    return (
        <Container sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            {user ? <><Stack className='user-edit-stack'>
                <Button variant='contained' color='success' onClick={navigateBackToUsers} sx={{ marginLeft: 'auto' }}>Back to all users</Button>
                <Typography variant='h1' color={'whitesmoke'}>USER: {user.first_name} {user.last_name}</Typography>
                <UserEdit user={user} />
            </Stack>
                <Stack direction='column' className='users-stack'>
                    {user.tickets.map(ticket => {
                        return <UserTicketsComponent ticket={ticket} />
                    })}
                </Stack>
                {devices.map(device => {
                    return <>
                        <div>{device.device_id}</div>
                        {/* TODO add pending to btn */}
                        <Button onClick={() => handleDeviceDelete(device)}>Delete device</Button>
                    </>
                })}
            </> : null}
            {user_errors ? <AlertMessage errorMessage={user_errors} ></AlertMessage> : null}
            {devices_errors ? <AlertMessage errorMessage={devices_errors} ></AlertMessage> : null}

        </Container>
    )
}
