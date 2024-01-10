import { Card, CardContent, Typography, CardActions, Button, CircularProgress, Select, MenuItem, SelectChangeEvent, Alert } from '@mui/material'
import { Link } from 'react-router-dom'
import { Ticket } from '../types/Ticket.type'
import { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import useRepository from 'src/hooks/useRepositiry';
import { baseUrl } from 'src/constants';
import { ticket_status_enum } from '../helpers/ticket-status.enum';
import AlertMessage from 'src/app/auth/components/alert-message';

interface Props {
  ticket: Ticket
}
export default function UserTicketsComponent({ ticket }: Props) {
  const [ticketItem, setTicketItem] = useState<Ticket>(ticket)

  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [selectItem, setSelectItem] = useState<string>(ticket.status)
  const [isLoading, errors, data, fetchData] = useRepository()

  const handleSubmit = async () => {
    const body = { id: ticket.id, status: selectItem }
    const tickets = await fetchData('/ticket/updateStatus', 'put', body)
    setTicketItem(data)
    setIsDisabled(true)
  }
  const handleSelectChange = (e: SelectChangeEvent) => {
    setSelectItem(e.target.value)
  }
  return (
    <>
      <Card className='ticket-card'>
        <CardContent>
          <Typography variant='h4' >
            HOLDER NAME: {ticket.holder_first_name}
          </Typography>
          <Typography variant='h4' >
            HOLDER LASTNAME: {ticket.holder_last_name}
          </Typography>
          <Typography variant='h4'>
            FROM: {ticket.flight.from_city.title}
          </Typography>
          <Typography variant='h4'>
            TO: {ticket.flight.to_city.title}
          </Typography>
          <Typography variant="h4">
            PRICE: {ticket.flight.price} $
          </Typography>
          <Select
            disabled={isDisabled}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectItem}
            className='ticket-status-select'
            // label="Ticket Status"
            onChange={handleSelectChange}
          >
            {ticket_status_enum.map(item => {
              return <MenuItem value={item}>{item}</MenuItem>
            })}
          </Select>
        </CardContent>
        <CardActions>
          {isDisabled ?
            <ModeEditIcon onClick={() => setIsDisabled(false)} />
            :
            <Button onClick={handleSubmit} color="default" variant="contained" className='submit-ticket-changes' fullWidth type="submit">
              {isLoading ? <CircularProgress /> : 'SUBMIT CHANGES'}
            </Button>
          }
        </CardActions>
      </Card>
      {errors ? <AlertMessage errorMessage={errors} /> : null}
    </>
  )
}
