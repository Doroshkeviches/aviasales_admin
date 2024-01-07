import React, { useEffect } from 'react'
import { Flight } from '../types/Flight.type'
import FlightItem from './flight-item'
import { Divider, Stack } from '@mui/material'
import Road from './ui/road'
import { Paths } from '../types/Paths.type'
import { Box } from '@mui/material'
import transformDate from 'src/utils/transform-date'
interface Props {
    flightList: Paths
}

export default function FlightsList({ flightList }: Props) {
    const [start_date, start_time, end_date, end_time] = transformDate(flightList)
    return (
        <>

            <Stack direction='row' className='flights-stack'>
                <Stack direction='column' className='price-stack'>
                    <Stack>
                        <div>{flightList.totalPrice} $</div>
                    </Stack>
                </Stack>
                <Stack direction='row' className='path-stack'>
                    <Stack>
                        <div>{flightList.from_city}</div>
                        <div>{start_time}</div>
                        <div>{start_date}</div>
                    </Stack>


                    {flightList.paths.map((flight: Flight) => {
                        return <FlightItem key={flight.id} flight={flight} />
                    })}
                    <Stack>
                        <div>{flightList.to_city}</div>
                        <div>{end_time}</div>
                        <div>{end_date}</div>
                    </Stack>
                </Stack>

            </Stack>
        </>
    )
}
