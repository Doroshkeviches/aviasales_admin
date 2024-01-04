import React from 'react'
import { Flight } from '../types/Flight.type'
import FlightItem from './flight-item'
import { Stack } from '@mui/material'
import Road from './ui/road'
interface Props {
    flightList: Flight[]
}
export default function FlightsList({ flightList }: Props) {
    const first_flight = flightList.at(0)
    const last_flight = flightList.at(-1)

    return (
        <>
            <Stack direction='row' className='flights-stack' >
                {first_flight?.from_city.title}
                {flightList.map((flight: Flight) => {
                    return <FlightItem key={flight.id} flight={flight} />
                })}
                {last_flight?.to_city.title}
            </Stack>
        </>
    )
}
