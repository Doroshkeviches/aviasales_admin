import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getTickets } from './store/tickets.action'
import { ticketsErrorsSelector, ticketsPendingSelector, ticketsSelector } from './store/tickets.selector'

export default function TicketPage() {
    const tickets = useAppSelector(ticketsSelector)
    const errors = useAppSelector(ticketsErrorsSelector)
    const pending = useAppSelector(ticketsPendingSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTickets())
    }, [])
    return (
        <div>TicketPage</div>
    )
}
