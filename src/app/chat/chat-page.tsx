import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
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
    const [value, setValue] = useState('')
    const [rooms, setRooms] = useState<any[]>([]) //TODO ADD ROOM TYPE
    const [messages, setMessages] = useState<string[]>([])
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
    return (
        <div>
            {rooms.map(room => {
                return <div onClick={() => handleNavigateToPrivateRoom(room.id)} key={room.id}>{room.id}</div>
            })}
        </div>

    )
}
