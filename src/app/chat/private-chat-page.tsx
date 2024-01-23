import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { io } from 'socket.io-client';

const URL = 'http://localhost:4444';
const token = localStorage.getItem('refresh-token')
const socket = io(URL, {
    extraHeaders: {
        Authorization: `Bearer ${token}`
    }
});
export default function PrivateChatPage() {
    const [messages, setMessages] = useState<any[]>([])
    const [value, setValue] = useState('')

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        socket.emit('join-room', { room_id: id })
        socket.emit('get-messages', { room_id: id })
        socket.on('messages', (messages) => {
            setMessages(messages)
        })
        socket.on('message', (message) => {
            setMessages(prev => [...prev, message])
            console.log(message, 'new message')
        })
    }, [])
    const handleButtonClick = () => {
        socket.emit('message', { room_id: id, message: value })
    }
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleButtonClick}>send</button>
            {messages.map(message => {
                return <div>{message.message}</div>
            })}
        </div>
    )
}
