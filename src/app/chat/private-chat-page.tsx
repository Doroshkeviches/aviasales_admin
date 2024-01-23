import { Stack, TextField, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { io } from 'socket.io-client';
import MessageAdmin from './components/message-admin';
import MessageClient from './components/message-client';
import { useAppSelector } from 'src/storeTypes';
import { sessionSelector } from '../auth/store/auth.selector';

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
    const session = useAppSelector(sessionSelector)

    const { id } = useParams()
    useEffect(() => {
        socket.emit('join-room', { room_id: id })
        socket.emit('get-messages', { room_id: id })
        socket.on('messages', (messages) => {
            setMessages(messages)
        })
        socket.on('message', (message) => {
            setMessages(prev => [...prev, message])
        })
    }, [])

    const handleSendMessage = () => {
        const body = {
            message: value,
            first_name: 'asd',
            last_name: 'asd',
            room_id: id,
            user_id: session?.id,
            created_at: Date.now()
        }
        socket.emit('message', body)
        setValue('')
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return (
        <Stack className='chat-stack'>
            <Stack className='messages-stack'>
                {messages.map(mes => {
                    return mes.user_id === session?.id ? <MessageClient {...mes} key={mes.id} /> : <MessageAdmin {...mes} key={mes.id} />
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
