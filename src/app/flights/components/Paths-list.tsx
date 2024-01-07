import React from 'react'
import { useAppSelector } from 'src/storeTypes'
import { flightsErrorsSelector, flightsPendingSelector, flightsSelector } from '../store/flights.selector'
import { CircularProgress, Stack } from '@mui/material'
import FlightList from './flights-list'

export default function PathsList() {
    const errors_flights = useAppSelector(flightsErrorsSelector)
    const pending_flights = useAppSelector(flightsPendingSelector)
    const flights = useAppSelector(flightsSelector)
    if (pending_flights) {
        return <CircularProgress />
    }
    return (
        <>
            <Stack direction='column' className='paths-stack'>
                {flights.map((flightList) => {
                    return <FlightList key={flightList.id} flightList={flightList} />
                })}
            </Stack>
        </>
    )
}
