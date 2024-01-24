import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { io } from 'socket.io-client';
const URL = 'http://localhost:4444';
const token = localStorage.getItem('refresh-token')
const socket = io(URL, {
    extraHeaders: {
        Authorization: `Bearer ${token}`
    }
});
export default function ChatPage() {
    // const [value, setValue] = useState('')
    const [rooms, setRooms] = useState<any[]>([]) //TODO ADD ROOM TYPE
    // const [messages, setMessages] = useState<string[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        socket.emit('connect-manager')
        socket.emit("get-rooms")
        socket.on("new-chat", (room) => {
            setRooms(prev => [...prev, room])
        })
        socket.on("rooms", (rooms) => {
            setRooms(rooms)
        })
    }, [])
    const handleNavigateToPrivateRoom = (id: string) => {
        navigate(id)
    }
    console.log(rooms[0])
    return (
        <Stack direction='row' alignItems='center' gap={3} className='users-stack'>
            {rooms.map(room => {
                return <Card className='user-card' onClick={() => handleNavigateToPrivateRoom(room.id)} key={room.id}>
                    <CardContent>
                        <Typography variant='h2'>
                            Client: {room.first_name + ' ' + room.last_name}
                        </Typography>
                        <Typography variant='h4' paddingTop={'3px'}>
                            Room: {room.id}
                        </Typography>
                    </CardContent>
                </Card>
            })}
        </Stack>
    )
}
