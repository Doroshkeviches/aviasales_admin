import React from 'react'
import { useAppSelector } from 'src/storeTypes'
import { flightsErrorsSelector, flightsPendingSelector, flightsSelector } from '../store/flights.selector'
import { Alert, AlertTitle, CircularProgress, Stack } from '@mui/material'
import FlightList from './flights-list'

export default function PathsList() {
    // const errors_flights = useAppSelector(flightsErrorsSelector)
    const pending_flights = useAppSelector(flightsPendingSelector)
    const flights = useAppSelector(flightsSelector)

    if (pending_flights) {
        return <CircularProgress />
    }
    return (
        <>
            {/* <Stack className='errors-stack' spacing={2}>
                {errors_flights ? <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errors_flights}</Alert> : null}
            </Stack> */}
            <Stack direction='column' className='paths-stack'>
                {flights.map((flightList) => {
                    return <FlightList key={flightList.id} flightList={flightList} />
                })}
            </Stack>
        </>
    )
}
