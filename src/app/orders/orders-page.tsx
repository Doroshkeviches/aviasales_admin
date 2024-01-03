import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"

const order =
{
    "id": "71989524-d5b3-4dd6-a563-cc4b553d7d50",
    "status": "InProcess",
    "tickets": [
        {
            "id": "ee82894a-2f98-45f1-a576-b351a595448f",
            "holder_first_name": "Varvara",
            "holder_last_name": "Varvara",
            "flight": {
                "from_city_id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                "to_city_id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                "start_flight_date": "2023-12-30T12:33:48.299Z",
                "end_flight_date": "2022-09-30T12:33:48.299Z",
                "status": "Planned",
                "price": 100,
                "available_seats": 80,
                "plane_id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                "from_city": {
                    "id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                    "title": "Beijing"
                },
                "to_city": {
                    "id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                    "title": "Milan"
                },
                "plane": {
                    "id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                    "title": "Bombardier CRJ-900",
                    "seats": 80
                }
            }
        },
        {
            "id": "f1c61698-3b93-4e26-874b-68041b565723",
            "holder_first_name": "Varvara",
            "holder_last_name": "Varvara",
            "flight": {
                "from_city_id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                "to_city_id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                "start_flight_date": "2023-12-30T12:33:48.299Z",
                "end_flight_date": "2022-09-30T12:33:48.299Z",
                "status": "Planned",
                "price": 100,
                "available_seats": 80,
                "plane_id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                "from_city": {
                    "id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                    "title": "Beijing"
                },
                "to_city": {
                    "id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                    "title": "Milan"
                },
                "plane": {
                    "id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                    "title": "Bombardier CRJ-900",
                    "seats": 80
                }
            }
        },
        {
            "id": "36f5065f-9d80-4d93-8aa5-a63e07ddc1b1",
            "holder_first_name": "Varvara",
            "holder_last_name": "Varvara",
            "flight": {
                "from_city_id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                "to_city_id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                "start_flight_date": "2023-12-30T12:33:48.299Z",
                "end_flight_date": "2022-09-30T12:33:48.299Z",
                "status": "Planned",
                "price": 100,
                "available_seats": 80,
                "plane_id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                "from_city": {
                    "id": "d78ca647-e7d0-4c6c-a1ad-6ba8a976b344",
                    "title": "Beijing"
                },
                "to_city": {
                    "id": "6e4b0186-6947-4eca-92f5-ec86c7559c71",
                    "title": "Milan"
                },
                "plane": {
                    "id": "91538b51-aa6e-4934-9fdc-c1565b4c88c9",
                    "title": "Bombardier CRJ-900",
                    "seats": 80
                }
            }
        }
    ]
}



export default function OrdersPage() {

    const start_flight_date = new Date(order.tickets[0].flight.start_flight_date).toLocaleString();
    const end_flight_date = new Date(order.tickets[0].flight.end_flight_date).toLocaleString();

    return (
        <Card className='catalog-card'>
            <CardContent className='card-content'>
                <Typography >
                    Name: {order.tickets[0].holder_first_name} <br />
                    Last name: {order.tickets[0].holder_last_name}
                </Typography>
                <Typography>
                    from: {order.tickets[0].flight.from_city.title}<br />
                    to: {order.tickets[0].flight.to_city.title}
                </Typography>
                <Typography>
                    start_date: {start_flight_date}<br />
                    end_date: {end_flight_date}
                </Typography>
                <Typography>
                    plane: {order.tickets[0].flight.plane.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
