import { Card, CardContent, Typography, CardActions, Button, CircularProgress, Select, MenuItem, SelectChangeEvent, Alert } from '@mui/material'
import { Link } from 'react-router-dom'
import { Ticket } from '../types/Ticket.type'
import { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import useRepository from 'src/hooks/useRepositiry';
import { baseUrl } from 'src/constants';
import { ticket_status_enum } from '../helpers/ticket-status.enum';

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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            HOLDER NAME {ticket.holder_first_name}
            HOLDER LASTNAME {ticket.holder_last_name}
          </Typography>
          <Select
            disabled={isDisabled}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectItem}
            label="Age"
            onChange={handleSelectChange}
          >
            {ticket_status_enum.map(item => {
              return <MenuItem value={item}>{item}</MenuItem>
            })}
          </Select>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            FROM {ticket.flight.from_city.title}
            TO {ticket.flight.to_city.title}
          </Typography>
          <Typography variant="body2">
            PRICE {ticket.flight.price}
          </Typography>
        </CardContent>
        <CardActions>
          {isDisabled ?
            <ModeEditIcon onClick={() => setIsDisabled(false)} />
            :
            <Button onClick={handleSubmit} color="primary" variant="contained" fullWidth type="submit">
              {isLoading ? <CircularProgress /> : 'submit'}
            </Button>
          }
        </CardActions>
      </Card>
      {errors ?
        <Alert severity="error">{errors}</Alert>
        :
        null
      }
    </>
  )
}
