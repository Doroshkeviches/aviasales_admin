import { Stack, TextField, Button } from '@mui/material';
import { ChangeEvent, useEffect, useState, useRef, FormEvent } from 'react'
import { useParams } from 'react-router'
import { io } from 'socket.io-client';
import MessageAdmin from './components/message-admin';
import MessageClient from './components/message-client';
import { useAppSelector } from 'src/storeTypes';
import { sessionSelector } from '../auth/store/auth.selector';
import { useTranslation } from 'react-i18next';

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
    const chatRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation();

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
        chatRef.current?.scrollIntoView()
    }, [])

    useEffect(() => {
        chatRef.current?.scrollIntoView() //прокрутка до нового сообщения типо работает но выглядит не супер )) на невысоких устройствах ваще говно
    }, [messages])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        if (!value) {
            return
        }
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
                <Stack ref={chatRef}></Stack>
            </Stack>
            <form onSubmit={handleSendMessage} style={{ margin: 'auto 0 10px', width: '100%', position: 'static' }}>
                <Stack direction={'row'} >
                    <TextField
                        value={value}
                        onChange={handleChangeInput}
                        fullWidth
                        className='whitesmoke'
                        id="message"
                        name="message"
                        placeholder={t('chat.message_placeholder')}
                    />
                    <Button type='submit' variant='contained' color='primary' sx={{ width: '20%' }}>{t('chat.send_button')}</Button>
                </Stack>
            </form>
        </Stack>
    )
}
