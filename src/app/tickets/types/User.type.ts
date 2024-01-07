import { Ticket } from "./ticket.type";

export interface User {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    tickets: Ticket[]
}