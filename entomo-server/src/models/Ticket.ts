type TicketStatus = 'open' | 'closed' | 'active';

type Ticket = {
    id : string,
    title: string,
    description : string,
    state : string
}