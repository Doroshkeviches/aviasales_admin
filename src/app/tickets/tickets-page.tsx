import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getTickets } from './store/tickets.action'
import { ticketsErrorsSelector, ticketsPendingSelector, ticketsSelector } from './store/tickets.selector'
import TicketComponent from './components/ticket.component'
import { Box, Container, Stack, Typography } from '@mui/material'
import AlertMessage from '../auth/components/alert-message'

export default function TicketPage() {
    const tickets = useAppSelector(ticketsSelector)
    const errors = useAppSelector(ticketsErrorsSelector)
    const pending = useAppSelector(ticketsPendingSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTickets())
    }, [])
    console.log(tickets)
    return (
        <Container>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} flexWrap={'wrap'} gap={4}>
                <Typography variant='h1' color={'whitesmoke'}>TICKETS</Typography>
                <Stack direction='column' className='users-stack'>
                    {tickets.map(ticket => {
                        return <TicketComponent ticket={ticket} />
                    })}
                </Stack>
            </Box>
            {errors ? <AlertMessage errorMessage={errors} /> : null}
        </Container>
    )
}
