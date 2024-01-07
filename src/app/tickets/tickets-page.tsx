import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getTickets } from './store/tickets.action'
import { ticketsErrorsSelector, ticketsPendingSelector, ticketsSelector } from './store/tickets.selector'
import TicketComponent from './components/ticket.component'

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
        <>
            {tickets.map(ticket => {
                return <TicketComponent ticket={ticket} />
            })}
        </>
    )
}
