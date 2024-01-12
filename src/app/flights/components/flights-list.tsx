import React, { useEffect } from 'react'
import { Flight } from '../types/Flight.type'
import FlightItem from './flight-item'
import { Button, Stack, Typography } from '@mui/material'
// import Road from './ui/road'
import { Paths } from '../types/Paths.type'
// import { Box } from '@mui/material'
import transformDate from 'src/utils/transform-date'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
interface Props {
    flightList: Paths
}

export default function FlightsList({ flightList }: Props) {
    const [start_date, start_time, end_date, end_time] = transformDate(flightList)

    return (
        <>
            <Stack direction='row' className='flights-element-stack'>
                <Stack direction='column' className='price-stack' gap={3}>
                    <Typography variant='h1'>{flightList.totalPrice} $</Typography>
                    <Button variant='contained' color='primary' className='flight-purchace'>BUY</Button>
                </Stack>
                <Stack direction='row' className='path-stack'>
                    <Stack alignItems={'center'}>
                        <Typography variant='h2'>{start_time}</Typography>
                        <Typography variant='h5'>{start_date}</Typography>
                        <Typography variant='h5'>{flightList.from_city}</Typography>
                    </Stack>
                    <Stack direction='column' className='path-stack-outlook'>
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{ marginBottom: '2px' }}>
                            <FlightTakeoffIcon />
                            <FlightLandIcon />
                        </Stack>
           
                            {/* <Stack className='transfer-path'>
                            </Stack> */}
                        <Stack direction='row' className='path-transfers-stack'>
                            {flightList.paths.map((flight: Flight) => {
                                return <FlightItem key={flight.id} flight={flight} />
                            })}
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'}>
                        <Typography variant='h2'>{end_time}</Typography>
                        <Typography variant='h5'>{end_date}</Typography>
                        <Typography variant='h5'>{flightList.to_city}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
