import axios from "axios"
import { Ticket } from "../models/Ticket"

export const getAllTickets = () => { 
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/ticket/all',
      })
        .then(function (response) {
          return response.data;
        });
    // return axios.get(`127.0.0.1:3000/ticket/all`);
}

export const updateTicketState = (ticket: Ticket) => {
    return axios.patch('http://127.0.01:3000/ticket', ticket)
}

export const deleteTicket = (ticketId: string) => {
    return axios.delete(`localhost:3000/ticket/${ticketId}`)
}

export const getTicketById = (ticketId: string) => {
    return axios.get(`localhost:3000/ticket/${ticketId}`)
}