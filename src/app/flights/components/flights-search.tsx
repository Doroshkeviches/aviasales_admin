import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/storeTypes'
import { getCities, getFlights } from '../store/flghts.action'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { citiesErrorsSelector, citiesPendingSelector, citiesSelector, flightsErrorsSelector, flightsPendingSelector, flightsSelector } from '../store/flights.selector'

export default function FlightsSearch() {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [city1, setCity1] = useState<string | null>(null)
    const [city2, setCity2] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const errors_city = useAppSelector(citiesErrorsSelector)
    const pending_city = useAppSelector(citiesPendingSelector)
    const cities = useAppSelector(citiesSelector)
    const errors_flights = useAppSelector(flightsErrorsSelector)


    useEffect(() => {
        dispatch(getCities())
    }, [])
    const validateSeatch = () => {
        if (!startDate) {
            return false
        }
        if (!city1 || !city2) {
            return false
        }
        if (city1 === city2) {
            return false
        }
        return true
    }
    const handleGetPath = () => {
        const isValid = validateSeatch()
        if (!isValid) {
            return
        }
        dispatch(getFlights({ from_city: city1, to_city: city2, date: startDate! }))
    }
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                sx={{ width: 300 }}
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
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="City" />}
                value={city2}
                onChange={(event: any, newValue: string | null) => {
                    setCity2(newValue);
                }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="start date picker"
                        value={startDate}
                        onChange={(newValue: Date | null) => setStartDate(newValue)} />
                </DemoContainer>
            </LocalizationProvider>
            <Button onClick={handleGetPath}>CLICK</Button>
            {errors_flights}
        </>
    )
}
