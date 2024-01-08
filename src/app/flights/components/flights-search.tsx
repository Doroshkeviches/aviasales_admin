import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, TextField, Button, Checkbox, FormControlLabel, FormControl, CircularProgress, Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getCities, getFlights } from '../store/flghts.action'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { citiesErrorsSelector, citiesPendingSelector, citiesSelector, flightsErrorsSelector, flightsPendingSelector, flightsSelector } from '../store/flights.selector'
// @ts-ignore
import image from '../plane3.jpg';

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
    if(pending_city) {
        return <CircularProgress/>
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
        <Container sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingTop={'30px'} >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cities}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} label="City" />}
                    value={city1}
                    onChange={(event: any, newValue: string | null) => {
                        setCity1(newValue);
                    }}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cities}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} label="City" />}
                    value={city2}
                    onChange={(event: any, newValue: string | null) => {
                        setCity2(newValue);
                    }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{ paddingTop: '0px', overflow: 'unset' }}>
                        <DatePicker label="Start Date Picker"
                            // sx={{ minWidth: '200px' }}
                            value={startDate}
                            onChange={(newValue: Date | null) => setStartDate(newValue)} />
                    </DemoContainer>
                </LocalizationProvider>
                <Button onClick={handleGetPath} variant='contained' color='default' size='medium'>SEARCH</Button>
                {errors_flights}
            </Box>
        </Container >
    )
}
