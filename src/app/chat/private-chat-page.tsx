import { Stack, TextField, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { io } from 'socket.io-client';
import MessageAdmin from './components/message-admin';
import MessageClient from './components/message-client';

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

    const handleSendMessage = () => {
        socket.emit('message', { room_id: id, message: value })
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return (
        // <div>
        //     <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        //     <button onClick={handleButtonClick}>send</button>
        //     {messages.map(message => {
        //         return <div>{message.message}</div>
        //     })}
        // </div>
        <Stack className='chat-stack'>
            <Stack className='messages-stack'>
                {messages.map(mes => {
                    return mes.id === 'Admin' ? <MessageAdmin {...mes} /> : <MessageClient {...mes} />
                })}
            </Stack>
            <Stack direction={'row'} sx={{ margin: 'auto 0 10px', width: '100%', position: 'static' }}>
                <TextField
                    value={value}
                    onChange={handleChangeInput}
                    fullWidth
                    className='whitesmoke'
                    id="message"
                    name="message"
                    placeholder='Enter your message'
                />
                <Button onClick={handleSendMessage} variant='contained' color='primary' sx={{ width: '20%' }}>Send</Button>
            </Stack>
        </Stack>
    )
}
