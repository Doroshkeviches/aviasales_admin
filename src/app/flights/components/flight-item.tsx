import React from 'react'
import { Flight } from '../types/Flight.type'
import { Button, Card, CardActions, CardContent, Stack, Tooltip, Typography } from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import Road from './ui/road'
interface Props {
  flight: Flight
}
const transform_flight_date_to_date = (date: Date) => {
  const new_date = new Date(date.valueOf()).toLocaleString()
  return new_date
}
export default function FlightItem({ flight }: Props) {
  const start_date = transform_flight_date_to_date(flight.start_flight_date)
  const end_date = transform_flight_date_to_date(flight.end_flight_date)

  return (
      <Stack direction='row' className='plane-icon-stack'>
        <FlightTakeoffIcon />
        <Tooltip color="inherit" placement="top" title={
          <Card className='flight-card'>
            <CardContent className='card-content'>
              <Typography >
                From: {flight.from_city.title} <br />
                To: {flight.to_city.title}
              </Typography>
              <Typography>
                from: {start_date}<br />
                to: {end_date}
              </Typography>
              <Typography>
                plane: {flight.plane.title}
                available seats: {flight.available_seats}
                price: {flight.price}
              </Typography>
            </CardContent>

          </Card>
        }>
          <div
            style={{
              width: '100%',
              padding: '2px',
              backgroundColor: 'black'
            }}></div>
        </Tooltip>

        <FlightLandIcon />
      </Stack>

  )
}
