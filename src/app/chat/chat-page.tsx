import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
const URL = 'http://localhost:4444';
const socket = io(URL);
export default function ChatPage() {
    const [value, setValue] = useState('')
    const [room, setRoom] = useState('')

    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        socket.on('message', (val) => {
            console.log('s')
            setMessages(prev => [...prev, val])
        })
        console.log("socket")

    }, [])
    const handleClick = () => {
        const data = {
            room_id: room,
            message: value,
        }
        socket.emit('message', data)
    }
    const handleConnect = () => {
        socket.emit('join-chat', room)
    }
    return (
        <div>
            <input type="text" value={room} onChange={(e) => setRoom(e.currentTarget.value)} />
            <Button onClick={handleConnect}>connect to room</Button>

            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            <Button onClick={handleClick}>send message</Button>
            {messages.map(mes => {
                return <div>{mes}</div>
            })}
        </div>

    )
}
