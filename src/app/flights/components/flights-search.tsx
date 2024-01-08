import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, TextField, Button, Checkbox, FormControlLabel, FormControl, CircularProgress, Box, Typography, Alert, AlertTitle, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getCities, getFlights } from '../store/flghts.action'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { citiesErrorsSelector, citiesPendingSelector, citiesSelector, flightsErrorsSelector, flightsPendingSelector, flightsSelector } from '../store/flights.selector'

const FormControlMuiSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'grey',
    gap: 2,
    padding: '20px'

}
export default function FlightsSearch() {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [returnDate, setReturnDate] = useState<Date | null>(null)
    const [isReturn, setIsReturn] = useState<boolean>(false)
    const [from_city, setFrom_city] = useState<string | null>(null)
    const [to_city, setTo_city] = useState<string | null>(null)
    const [validationErrors, setValidationErrors] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const errors_city = useAppSelector(citiesErrorsSelector)
    const pending_city = useAppSelector(citiesPendingSelector)
    const cities = useAppSelector(citiesSelector)
    const errors_flights = useAppSelector(flightsErrorsSelector)
    const tomorrow = dayjs().add(1, 'day');

    useEffect(() => {
        dispatch(getCities())
    }, [])
    if (pending_city) {
        return <CircularProgress />
    }
    const validateSeatch = () => { // кастомная валидация , сомнительно но окей
        setValidationErrors(null)
        if (!startDate) {
            setValidationErrors('start date is required')
            return false
        }
        if (!from_city || !to_city) {
            setValidationErrors('start city and end city are required')

            return false
        }
        if (from_city === to_city) {
            setValidationErrors('start city cannot be same as end city')
            return false
        }
        if (isReturn && !returnDate) {
            setValidationErrors('return date is required')
            return false
        }
        return true
    }
    const handleGetPath = () => {
        const isValid = validateSeatch()
        if (!isValid) {
            return
        }
        const body = {
            from_city: from_city!,
            to_city: to_city!,
            start_flight_date: startDate!,
            isReturn,
            return_flight_date: returnDate
        }
        dispatch(getFlights(body))
    }
    return (
        <>
            <FormControl error={!!validationErrors}
                sx={FormControlMuiSx}>
                <Typography variant='h1' className='main'>FLIGHTSSALES</Typography>
                <Typography variant='h3' className='main'>We are here to help you find tickets</Typography>

                <Box display={'flex'} flexWrap={'wrap'} gap={2}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        renderInput={(params) => <TextField {...params} label="City" />}
                        value={from_city}
                        onChange={(event: any, newValue: string | null) => {
                            setFrom_city(newValue);
                        }}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        renderInput={(params) => <TextField {...params} label="City" />}
                        value={to_city}
                        onChange={(event: any, newValue: string | null) => {
                            setTo_city(newValue);
                        }}
                    />
                </Box>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker label="Start Date"
                            value={startDate}
                            defaultValue={tomorrow.toDate()}
                            onChange={(newValue: Date | null) => setStartDate(newValue)} />
                        {isReturn ? <DatePicker label="Return Date"
                            value={returnDate}
                            onChange={(newValue: Date | null) => setReturnDate(newValue)} /> : null}
                    </DemoContainer>
                </LocalizationProvider>

                <FormControlLabel control={<Checkbox onClick={() => setIsReturn(prev => !prev)} />} label="Return" />

                <Button onClick={handleGetPath} variant='contained' color='primary' className='flight-search'>SEARCH</Button>

                <Stack className='errors-stack' spacing={2}>
                    {validationErrors ? <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {validationErrors}</Alert> : null}
                    {errors_flights ? <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errors_flights}</Alert> : null}
                    {errors_city ? <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errors_city}</Alert> : null}
                </Stack>
            </FormControl>
        </>
    )
}