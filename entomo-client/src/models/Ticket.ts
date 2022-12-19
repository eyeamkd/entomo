export type TicketStatus = 'open' | 'closed' | 'active'

export type Ticket = {
    id: string,
    title: string,
    description: string,
    state: TicketStatus,
}