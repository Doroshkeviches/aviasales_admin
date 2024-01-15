import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getTickets } from './store/tickets.action'
import { ticketsErrorsSelector, ticketsPendingSelector, ticketsSelector } from './store/tickets.selector'
import TicketComponent from './components/ticket.component'
import { CircularProgress, Container, Stack, Typography } from '@mui/material'
import AlertMessage from '../../components/alert-message'

export default function TicketPage() {
    const tickets = useAppSelector(ticketsSelector)
    const errors = useAppSelector(ticketsErrorsSelector)
    const pending = useAppSelector(ticketsPendingSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTickets())
    }, [])

    return (
        <Container sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Stack className='tickets-search-stack'>
                <Typography variant='h1' className='main'>TICKETS</Typography>
                <Stack className='users-stack'>
                    {pending ? <CircularProgress sx={{position: 'absolute'}}/> : null}
                    {tickets.length ? tickets?.map(ticket => {
                        return <TicketComponent key={ticket.id} ticket={ticket} />
                    })
                    : 
                    <div>No tickets</div>
                    }
                </Stack>
            </Stack>
            {errors ? <AlertMessage errorMessage={errors} /> : null}
        </Container>
    )
}
